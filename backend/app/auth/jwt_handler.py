from datetime import datetime, timedelta
from typing import Any, Dict
from jose import jwt, JWTError
from app.schemas import TokenData
from app.config import settings

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES

def create_access_token(data: Dict[str, Any]) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt

def verify_token(token) -> TokenData:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithm=[ALGORITHM])

        username: str = payload.get('sub')
        if username is None:
            return None
        token_data = TokenData(username=username)
        return token_data
    except JWTError:
        return None
