# backend/app/main.py

from fastapi import FastAPI
from app.database import engine, Base
from app.routers import auth, users
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Muffin Finance Research API",
    description="An API for the Finance Research App",
    version="1.0.0",
    openapi_tags=[
        {
            "name": "Authentication",
            "description": "Operations related to authentication"
        },
        {
            "name": "Users",
            "description": "Operations related to users"
        },
    ],
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(users.router)

@app.get("/api/data", tags=["Data"])
def read_data():
    return {"message": "Welcome to Muffin, A Finance Research API"}