from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


class User(BaseModel):
    username: str = Field(min_length=1)
    email: str = Field(min_length=1, max_length=100)


UserS = []


@app.get("/")
def index():
    return {"testing": "it worksss"}

@app.get("/get_all_users{uid}")
def read_api(db: Session = Depends(get_db)):
    return db.query(models.Users).all()


@app.post("/create_user{uid}")
def create_User(User: User, db: Session = Depends(get_db)):

    User_model = models.Users()
    User_model.username = User.username
    User_model.email = User.email

    db.add(User_model)
    db.commit()

    return User


@app.put("/update_user{uid}")
def update_User(uid: int, User: User, db: Session = Depends(get_db)):

    User_model = db.query(models.Users).filter(models.Users.id == uid).first()

    if User_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {uid} : Does not exist"
        )

    User_model.username = User.username
    User_model.email = User.email

    db.add(User_model)
    db.commit()

    return User


@app.delete("/delete_user{uid}")
def delete_User(uid: int, db: Session = Depends(get_db)):

    User_model = db.query(models.Users).filter(models.Users.id == uid).first()

    if User_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {uid} : Does not exist"
        )

    db.query(models.Users).filter(models.Users.id == uid).delete()

    db.commit()
 