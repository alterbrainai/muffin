# **Finance Research App Development Documentation**

Welcome to the development documentation for the Finance Research App. This document outlines the steps taken during the development of the application, including setting up virtual environments, installing necessary libraries, and configuring both the backend and frontend components. The aim is to provide a comprehensive guide that can help you understand the development process and replicate it if needed.

---

## **Table of Contents**

- [**Finance Research App Development Documentation**](#finance-research-app-development-documentation)
  - [**Table of Contents**](#table-of-contents)
  - [**Introduction**](#introduction)
  - [**Project Overview**](#project-overview)
  - [**Development Steps**](#development-steps)
    - [**Backend Development**](#backend-development)
      - [**1. Setting Up the Project Structure**](#1-setting-up-the-project-structure)
      - [**2. Creating a Virtual Environment**](#2-creating-a-virtual-environment)
      - [**3. Initializing Git Repository**](#3-initializing-git-repository)
      - [**4. Installing Dependencies**](#4-installing-dependencies)
      - [**5. Setting Up the FastAPI Application**](#5-setting-up-the-fastapi-application)
      - [**6. Configuring Database with SQLAlchemy**](#6-configuring-database-with-sqlalchemy)
      - [**7. Implementing User Authentication**](#7-implementing-user-authentication)
      - [**8. Adding Alembic for Migrations**](#8-adding-alembic-for-migrations)
      - [**9. Dockerizing the Backend**](#9-dockerizing-the-backend)
    - [**Frontend Development**](#frontend-development)
      - [**1. Setting Up the Next.js Project**](#1-setting-up-the-nextjs-project)
      - [**2. Installing Dependencies**](#2-installing-dependencies)
      - [**3. Implementing Authentication with NextAuth.js**](#3-implementing-authentication-with-nextauthjs)
      - [**4. Creating UI Components**](#4-creating-ui-components)
      - [**5. Integrating Backend API**](#5-integrating-backend-api)
      - [**6. Handling Protected Routes**](#6-handling-protected-routes)
    - [**Common Development Issues and Solutions**](#common-development-issues-and-solutions)
  - [**Conclusion**](#conclusion)

---

## **Introduction**

This documentation provides a step-by-step guide on how the Finance Research App was developed. It includes detailed instructions on setting up the development environment, installing necessary libraries, configuring both backend and frontend, and addressing common issues encountered during development.

---

## **Project Overview**

The Finance Research App is a web application that allows users to register, log in, and access financial data and research tools. It comprises:

- **Backend**: Built with FastAPI, it handles authentication, user management, and provides APIs for frontend consumption.
- **Frontend**: Developed with Next.js, it offers a responsive user interface, handles authentication via NextAuth.js, and communicates with the backend APIs.

---

## **Development Steps**

### **Backend Development**

#### **1. Setting Up the Project Structure**

Create a directory for the backend project:

```bash
mkdir finance-research-app
cd finance-research-app
mkdir backend
cd backend
```

#### **2. Creating a Virtual Environment**

Set up a Python virtual environment to isolate project dependencies.

```bash
python3 -m venv venv
source venv/bin/activate
```

#### **3. Initializing Git Repository**

Initialize a Git repository to track changes.

```bash
git init
```

#### **4. Installing Dependencies**

Create a `requirements.txt` file and install initial dependencies.

```bash
touch requirements.txt
```

**Add the following to `requirements.txt`:**

```text
fastapi
uvicorn[standard]
python-dotenv
```

**Install the dependencies:**

```bash
pip install -r requirements.txt
```

#### **5. Setting Up the FastAPI Application**

Create the main application file and directory structure.

```bash
mkdir app
touch app/__init__.py
touch app/main.py
```

**Content of `app/main.py`:**

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Finance Research API"}
```

#### **6. Configuring Database with SQLAlchemy**

Install SQLAlchemy and configure the database.

**Update `requirements.txt`:**

```text
sqlalchemy
psycopg2-binary
```

**Install new dependencies:**

```bash
pip install -r requirements.txt
```

**Create database configuration files:**

- **Create `app/database.py`:**

  ```python
  from sqlalchemy import create_engine
  from sqlalchemy.ext.declarative import declarative_base
  from sqlalchemy.orm import sessionmaker
  from app.config import settings

  SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL

  engine = create_engine(SQLALCHEMY_DATABASE_URL)
  SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
  Base = declarative_base()
  ```

- **Create `app/models.py`:**

  ```python
  from sqlalchemy import Column, Integer, String
  from app.database import Base

  class User(Base):
      __tablename__ = "users"
      id = Column(Integer, primary_key=True, index=True)
      username = Column(String, unique=True, index=True)
      hashed_password = Column(String)
  ```

- **Create `app/config.py`:**

  ```python
  from pydantic import BaseSettings

  class Settings(BaseSettings):
      DATABASE_URL: str
      SECRET_KEY: str
      ALGORITHM: str = "HS256"
      ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

      class Config:
          env_file = ".env"

  settings = Settings()
  ```

**Create a `.env` file:**

```bash
touch .env
```

**Contents of `.env`:**

```env
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://demouser:demopassword@localhost:5432/demodb
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

#### **7. Implementing User Authentication**

Install authentication libraries.

**Update `requirements.txt`:**

```text
passlib[bcrypt]==1.7.4
bcrypt==3.2.0
python-jose[cryptography]
```

**Install new dependencies:**

```bash
pip install -r requirements.txt
```

**Create Authentication Modules:**

- **`app/auth/hashing.py`:**

  ```python
  from passlib.context import CryptContext

  pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

  def hash_password(password: str) -> str:
      return pwd_context.hash(password)

  def verify_password(plain_password: str, hashed_password: str) -> bool:
      return pwd_context.verify(plain_password, hashed_password)
  ```

- **`app/auth/jwt_handler.py`:**

  ```python
  from datetime import datetime, timedelta
  from typing import Any, Dict
  from jose import jwt
  from app.config import settings

  SECRET_KEY = settings.SECRET_KEY
  ALGORITHM = settings.ALGORITHM
  ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES

  def create_access_token(data: Dict[str, Any]) -> str:
      to_encode = data.copy()
      expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
      to_encode.update({"exp": expire})
      encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
      return encoded_jwt
  ```

**Create Authentication Routes:**

- **`app/routers/auth.py`:**

  ```python
  from fastapi import APIRouter, HTTPException, Depends
  from sqlalchemy.orm import Session
  from app.database import get_db
  from app.models import User
  from app.auth.hashing import hash_password, verify_password
  from app.auth.jwt_handler import create_access_token
  from app.schemas import UserRegister, UserLogin, UserResponse

  router = APIRouter()

  @router.post("/api/auth/register", response_model=UserResponse)
  async def register(user: UserRegister, db: Session = Depends(get_db)):
      db_user = db.query(User).filter(User.username == user.username).first()
      if db_user:
          raise HTTPException(status_code=400, detail="Username already registered")
      hashed_pwd = hash_password(user.password)
      new_user = User(username=user.username, hashed_password=hashed_pwd)
      db.add(new_user)
      db.commit()
      db.refresh(new_user)
      return new_user

  @router.post("/api/auth/login")
  async def login(user_credentials: UserLogin, db: Session = Depends(get_db)):
      user = db.query(User).filter(User.username == user_credentials.username).first()
      if not user or not verify_password(user_credentials.password, user.hashed_password):
          raise HTTPException(status_code=400, detail="Invalid credentials")
      access_token = create_access_token(data={"sub": user.username})
      return {"access_token": access_token, "token_type": "bearer"}
  ```

- **Update `app/main.py`:**

  ```python
  from fastapi import FastAPI
  from app.routers import auth
  from fastapi.middleware.cors import CORSMiddleware

  app = FastAPI()

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

  @app.get("/")
  def read_root():
      return {"message": "Welcome to the Finance Research API"}
  ```

#### **8. Adding Alembic for Migrations**

Initialize Alembic to handle database migrations.

```bash
alembic init alembic
```

**Configure Alembic:**

- **Edit `alembic.ini`:**

  ```ini
  sqlalchemy.url = ${DATABASE_URL}
  ```

- **Edit `alembic/env.py`:**

  ```python
  import os
  from app.models import Base  # Import your models
  config.set_main_option('sqlalchemy.url', os.environ.get('DATABASE_URL'))
  target_metadata = Base.metadata
  ```

**Create Initial Migration Script:**

```bash
alembic revision --autogenerate -m "Initial migration"
```

**Apply Migrations:**

```bash
alembic upgrade head
```

#### **9. Dockerizing the Backend**

Create a `Dockerfile` and `docker-compose.yml` to containerize the backend.

- **`Dockerfile`:**

  ```dockerfile
  FROM python:3.9-slim

  WORKDIR /app

  COPY requirements.txt .
  RUN pip install --no-cache-dir -r requirements.txt

  COPY . .

  CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
  ```

- **`docker-compose.yml`:**

  ```yaml
  version: '3.8'

  services:
    backend:
      build: .
      volumes:
        - .:/app
      ports:
        - "8000:8000"
      depends_on:
        - db
      env_file:
        - .env

    db:
      image: postgres:14
      volumes:
        - postgres_data:/var/lib/postgresql/data/
      environment:
        - POSTGRES_USER=demouser
        - POSTGRES_PASSWORD=demopassword
        - POSTGRES_DB=demodb
      ports:
        - "5432:5432"

  volumes:
    postgres_data:
  ```

**Build and Run Containers:**

```bash
docker-compose build
docker-compose up -d
```

**Run Migrations Inside Docker:**

```bash
docker-compose exec backend alembic upgrade head
```

---

### **Frontend Development**

#### **1. Setting Up the Next.js Project**

Navigate to the parent directory and create the frontend project.

```bash
cd ..
npx create-next-app@latest frontend --typescript
cd frontend
```

#### **2. Installing Dependencies**

Install necessary libraries for the frontend.

```bash
npm install next-auth axios
```

#### **3. Implementing Authentication with NextAuth.js**

Create the authentication configuration.

- **Create `pages/api/auth/[...nextauth].ts`:**

  ```typescript
  import NextAuth from 'next-auth';
  import CredentialsProvider from 'next-auth/providers/credentials';
  import axios from 'axios';

  export default NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          try {
            if (!credentials) {
              throw new Error('No credentials provided');
            }

            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;

            const res = await axios.post(
              url,
              {
                username: credentials.username,
                password: credentials.password,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );

            const user = res.data;

            if (user && user.access_token) {
              return { ...user, username: credentials.username };
            }
            return null;
          } catch (error: any) {
            throw new Error(
              error.response?.data?.detail || 'Invalid credentials'
            );
          }
        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.accessToken = user.access_token;
          token.username = user.username;
        }
        return token;
      },
      session: async ({ session, token }) => {
        session.accessToken = token.accessToken;
        session.user = {
          username: token.username,
        };
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
    },
    debug: true,
  });
  ```

**Set Up Environment Variables:**

Create a `.env.local` file in the `frontend` directory.

```bash
touch .env.local
```

**Contents of `.env.local`:**

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

#### **4. Creating UI Components**

Implement login and registration pages.

- **Create `pages/login.tsx`:**

  ```tsx
  import { signIn } from 'next-auth/react';
  import { useState } from 'react';

  export default function LoginPage() {
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      const username = (event.target as any).username.value;
      const password = (event.target as any).password.value;

      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Redirect to home page or dashboard
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" required />
          <input name="password" type="password" required />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
  ```

#### **5. Integrating Backend API**

Use Axios to make API requests to the backend.

- **Install Axios:**

  ```bash
  npm install axios
  ```

- **Create an API Utility:**

  - **`utils/api.ts`:**

    ```typescript
    import axios from 'axios';

    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    export default api;
    ```

#### **6. Handling Protected Routes**

Implement client-side protection for routes that require authentication.

- **Create a Higher-Order Component (HOC) for Protection:**

  - **`components/withAuth.tsx`:**

    ```tsx
    import { useSession, signIn } from 'next-auth/react';
    import { useEffect } from 'react';

    const withAuth = (WrappedComponent: any) => {
      return (props: any) => {
        const { data: session, status } = useSession();

        useEffect(() => {
          if (status === 'unauthenticated') {
            signIn();
          }
        }, [status]);

        if (status === 'authenticated') {
          return <WrappedComponent {...props} />;
        }

        return <div>Loading...</div>;
      };
    };

    export default withAuth;
    ```

- **Use the HOC in Protected Pages:**

  - **`pages/dashboard.tsx`:**

    ```tsx
    import withAuth from '../components/withAuth';

    function Dashboard() {
      return <div>Welcome to your dashboard!</div>;
    }

    export default withAuth(Dashboard);
    ```

---

### **Common Development Issues and Solutions**

- **Issue:** `AttributeError: module 'bcrypt' has no attribute '__about__'`
  - **Solution:** Ensure `passlib` and `bcrypt` versions are compatible in `requirements.txt`.

- **Issue:** Frontend shows "Invalid credentials" upon login.
  - **Solution:** Verify that the `authorize` function correctly communicates with the backend and that environment variables are properly set.

- **Issue:** `TypeError [ERR_INVALID_URL]` due to invalid URL.
  - **Solution:** Use backticks for string interpolation when constructing URLs.

---

## **Conclusion**

This documentation has outlined the steps taken during the development of the Finance Research App. By following this guide, you should have a clear understanding of how to set up the development environment, install necessary libraries, and build both the backend and frontend components.

Remember to keep your environment variables secure and not commit sensitive information to version control systems. Always test your application thoroughly to ensure all components work together seamlessly.

Happy coding!

---

**Note:** This documentation assumes familiarity with web development concepts, Docker, and the technologies used in the application. If you encounter any issues not covered here, consider consulting the official documentation of the respective technologies or seeking help from the developer community.