from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship
from .database import Base
 
 
class User(Base):
    """User Class contains standard information for a UserProduct."""
 
    __tablename__ = "user"
 
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    sobrenome = Column(String)
    email = Column(String, unique=True, index=True)
    telefone = Column(String)
    cidade = Column(String)
    Cep = Column(Integer)
    Endereço = Column(Integer)
    Produto = Column(String)
    is_active = Column(Boolean)