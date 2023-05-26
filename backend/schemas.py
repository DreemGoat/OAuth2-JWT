import pydantic as _pydantic


class _UserBase(_pydantic.BaseModel):
    email: str 

class UserCreate(_UserBase):
    hashed_password: str

    class Config: 
        orm_mode = True

class User(_UserBase): 
    id: int
     
    class Config:
        orm_mode = True

class _UserDetailsBase(_pydantic.BaseModel):
    name: str
    country: str
    city: str
    email: str
    dob: str
    gender: str

class UserDetailsCreate(_UserDetailsBase):
    pass

class UserDetails(_UserDetailsBase):
    id: int
    owner_id: int 

    class Config:
        orm_mode = True 
