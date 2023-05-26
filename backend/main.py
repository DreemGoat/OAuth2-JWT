import fastapi as _fastapi
import fastapi.security as _security
import sqlalchemy.orm as _orm
from database import engine
import services as _services, schemas as _schemas
from typing import List

bro = _fastapi.FastAPI()

@bro.post("/api/users")
async def create_user(
    user: _schemas.UserCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    db_user = await _services.get_user_by_email(user.email, db)
    if db_user:
        raise _fastapi.HTTPException(status_code=400, detail= "email already in use")
    user = await _services.create_user(user, db)

    return await _services.create_token(user)


@bro.post("/api/token")
async def generate_token(
    form_data: _security.OAuth2PasswordRequestForm = _fastapi.Depends(),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    user = await _services.authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise _fastapi.HTTPException(status_code=401, detail="Invalid Credentials")

    return await _services.create_token(user)


@bro.get("/api/users/me", response_model=_schemas.User)
async def get_user(user: _schemas.User = _fastapi.Depends(_services.get_current_user)):
    return user


@bro.post("/api/userdetails", response_model=_schemas.UserDetails)
async def create_userdetails(
    userdetails: _schemas.UserDetailsCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.create_userdetails(user=user, db=db, userdetails=userdetails)


@bro.get("/api/userdetails", response_model=List[_schemas.UserDetails])
async def get_userdetails(
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_userdetails(user=user, db=db)


@bro.get("/api/userdetails/{userdetails_id}", status_code=200)
async def get_userdetailss(
    userdetails_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.get_userdetailss(userdetails_id, user, db)


@bro.delete("/api/userdetails/{userdetails_id}", status_code=204)
async def delete_userdetails(
    userdetails_id: int,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.delete_userdetails(userdetails_id, user, db)
    return {"message", "Successfully Deleted"}


@bro.put("/api/userdetails/{userdetails_id}", status_code=200)
async def update_userdetails(
    userdetails_id: int,
    userdetails: _schemas.UserDetailsCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.update_userdetails(userdetails_id, userdetails, user, db)
    return {"message", "Successfully Updated"}


@bro.get("/api")
async def root():
    return {"message": "Awesome Leads Manager"}