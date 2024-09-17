from datetime import datetime, timedelta
from jose import jwt, JWTError
from app.schemas import TokenData
from app.config import settings

def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(datetime.utc) + datetime.timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

    return encoded_jwt

def verify_token(token) -> TokenData:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithm=[settings.ALGORITHM])

        username: str = payload.get('sub')
        if username is None:
            return None
        token_data = TokenData(username=username)
        return token_data
    except JWTError:
        return None
