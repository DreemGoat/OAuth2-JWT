from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Users(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)

    # users = relationship("Users", back_populates="userdetails")

# class UserDetails(Base):
#     __tablename__ = "UserDetails"

#     id = Column(Integer, ForeignKey("users.id"))
#     fullname = Column(String, index= True)
#     country = Column(String, index=True)
#     city = Column(String, index=True)
#     dob = Column(String, index=True) 
#     gender = Column(String, index=True) 

#     userdetails = relationship("UserDetails", back_populates="users")