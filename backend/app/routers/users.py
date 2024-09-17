# backend/app/routers/users.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas
from app.auth.jwt_handler import verify_token
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='api/auth/login')

router = APIRouter(
    prefix='/api/users',
    tags=['Users']
)

@router.get('/me', response_model=schemas.UserOut)
def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
):
    token_data = verify_token(token)
    if not token_data:
        raise HTTPException(
            status_code=401, detail='Could not validate credentials'
        )
    user = db.query(models.User).filter(
        models.User.username == token_data.username
    ).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    return user
