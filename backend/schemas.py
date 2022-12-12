from typing import List, Optional
from pydantic import BaseModel
 
class UserBase(BaseModel):
    nome: str 
    sobre_nome: str 
    email: str
    telefone: int 
    cidade: str 
    cep: int 
    endereco: str 
    produto: str 
 
 
class UserCreate(UserBase):
    email: str
 
 
class User(UserBase):
    id: int
    is_active: bool
 
    class Config:
        orm_mode = True