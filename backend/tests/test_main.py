# backend/tests/test_main.py

import pytest
from httpx import AsyncClient
from app.main import app
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base, get_db
from app.models import User
from passlib.context import CryptContext

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine
)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Override the get_db dependency
def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture(scope='module')
def setup_database():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    hashed_password = pwd_context.hash("testpass")
    user = User(username="testuser", hashed_password=hashed_password)
    db.add(user)
    db.commit()
    db.close()
    yield
    Base.metadata.drop_all(bind=engine)

@pytest.mark.asyncio
async def test_register(setup_database):
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post(
            "/api/auth/register",
            json={"username": "newuser", "password": "newpass"}
        )
        assert response.status_code == 200
        assert response.json()["username"] == "newuser"

@pytest.mark.asyncio
async def test_login(setup_database):
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post(
            "/api/auth/login",
            json={"username": "testuser", "password": "testpass"}
        )
        assert response.status_code == 200
        assert "access_token" in response.json()
