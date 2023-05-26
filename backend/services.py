import database as _database, models as _models, schemas as _schemas
import sqlalchemy.orm as _orm 
import jwt as _jwt
import passlib.hash as _hash
import fastapi.security as _security
import fastapi

oauth2schema = _security.OAuth2PasswordBearer(tokenUrl="/api/token")
JWT_SECRET = "myjwtsecret"


def create_database():
    return _database.Base.metadata.create_all(bind= _database.engine)

def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally: 
        db.close()

async def get_user_by_email(email: str, db: _orm.Session):
    return db.query(_models.User).filter(_models.User.email == email).first()

async def create_user(user: _schemas.UserCreate, db: _orm.Session):
    user_obj = _models.User(email= user.email, hashed_password= _hash.bcrypt.hash(user.hashed_password)
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj


async def authenticate_user(email: str, password: str, db: _orm.Session):
    user = await get_user_by_email(db=db, email=email)

    if not user:
        return False

    if not user.verify_password(password):
        return False

    return user

#here
async def create_token(user: _models.User):
    user_obj = _schemas.User.from_orm(user)

    token = _jwt.encode(user_obj.dict(), JWT_SECRET)

    return dict(access_token=token, token_type="bearer")


async def get_current_user(
    db: _orm.Session = fastapi.Depends(get_db),
    token: str = fastapi.Depends(oauth2schema),
):
    try:
        payload = _jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(_models.User).get(payload["id"])
    except:
        raise fastapi.HTTPException(
            status_code=401, detail="Invalid Email or Password"
        )

    return _schemas.User.from_orm(user)


async def create_userdetails(user: _schemas.User, db: _orm.Session, userdetails: _schemas.UserDetailsCreate):
    userdetails = _models.UserDetails(**userdetails.dict(), owner_id=user.id)
    db.add(userdetails)
    db.commit()
    db.refresh(userdetails)
    return _schemas.UserDetails.from_orm(userdetails)

#this weird
async def get_userdetailss(user: _schemas.User, db: _orm.Session):
    userdetailss = db.query(_models.UserDetails).filter_by(owner_id=user.id)

    return list(map(_schemas.UserDetails.from_orm, userdetailss))


async def _userdetails_selector(userdetails_id: int, user: _schemas.User, db: _orm.Session):
    userdetails = (
        db.query(_models.UserDetails)
        .filter_by(owner_id=user.id)
        .filter(_models.UserDetails.id == userdetails_id)
        .first()
    )

    if userdetails is None:
        raise fastapi.HTTPException(status_code=404, detail="userdetails does not exist")

    return userdetails


async def get_userdetails(userdetails_id: int, user: _schemas.User, db: _orm.Session):
    userdetails = await _userdetails_selector(userdetails_id=userdetails_id, user=user, db=db)

    return _schemas.UserDetails.from_orm(userdetails)


async def delete_userdetails(userdetails_id: int, user: _schemas.User, db: _orm.Session):
    userdetails = await _userdetails_selector(userdetails_id, user, db)

    db.delete(userdetails)
    db.commit()

async def update_userdetails(userdetails_id: int, userdetails: _schemas.UserDetailsCreate, user: _schemas.User, db: _orm.Session):
    userdetails_db = await _userdetails_selector(userdetails_id, user, db)

    userdetails_db.name = userdetails.name
    userdetails_db.country = userdetails.country
    userdetails_db.city = userdetails.city
    userdetails_db.email = userdetails.email
    userdetails_db.dob= userdetails.dob
    userdetails_db.gender = userdetails.gender

    db.commit()
    db.refresh(userdetails_db)

    return _schemas.UserDetails.from_orm(userdetails_db)