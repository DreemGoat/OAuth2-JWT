
import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash
import database as _database

class User(_database.Base):
    __tablename__ = "users"

    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    email = _sql.Column(_sql.String,  unique=True, index=True)
    hashed_password = _sql.Column(_sql.String)


    userdetailss = _orm.relationship("UserDetails", back_populates="owner")


    def verify_password(self, password: str):
        return _hash.bcrypt.verify(password, self.hashed_password)
    
     
    
class UserDetails(_database.Base):
    __tablename__ = "userdetailss"
    id = _sql.Column(_sql.Integer, primary_key=True, index= True)
    owner_id = _sql.Column(_sql.Integer, _sql.ForeignKey("users.id"))
    name = _sql.Column(_sql.String, index= True)
    email = _sql.Column(_sql.String, index=True)
    dob = _sql.Column(_sql.String, index = True)
    country = _sql.Column(_sql.String, index = True)
    city= _sql.Column(_sql.String, index= True)
    gender = _sql.Column(_sql.String)

    owner = _orm.relationship("User", back_populates="userdetailss")