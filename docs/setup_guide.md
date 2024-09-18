# **Muffin - App Setup Guide**

Welcome to the Finance Research App Setup Guide! This document will walk you through the steps to set up and run the application, including both the backend and frontend components. We'll cover everything from the directory structure to common issues and their solutions.

---

## **Table of Contents**

- [**Muffin - App Setup Guide**](#muffin---app-setup-guide)
  - [**Table of Contents**](#table-of-contents)
  - [**Introduction**](#introduction)
  - [**Directory Structure**](#directory-structure)
    - [**Backend Directory Structure**](#backend-directory-structure)
    - [**Frontend Directory Structure**](#frontend-directory-structure)
  - [**Prerequisites**](#prerequisites)
  - [**Setting Up the Backend**](#setting-up-the-backend)
    - [**1. Clone the Repository**](#1-clone-the-repository)
    - [**2. Navigate to the Backend Directory**](#2-navigate-to-the-backend-directory)
    - [**3. Set Up Environment Variables**](#3-set-up-environment-variables)
    - [**4. Update `requirements.txt`**](#4-update-requirementstxt)
    - [**5. Create the Dockerfile**](#5-create-the-dockerfile)
    - [**6. Create `docker-compose.yml`**](#6-create-docker-composeyml)
    - [**7. Initialize Alembic for Database Migrations**](#7-initialize-alembic-for-database-migrations)
    - [**8. Update Alembic Configuration**](#8-update-alembic-configuration)
    - [**9. Create Initial Migration Script**](#9-create-initial-migration-script)
    - [**10. Build and Run Docker Containers**](#10-build-and-run-docker-containers)
    - [**11. Run Database Migrations**](#11-run-database-migrations)
    - [**12. Test the Backend API**](#12-test-the-backend-api)
  - [**Setting Up the Frontend**](#setting-up-the-frontend)
    - [**1. Navigate to the Frontend Directory**](#1-navigate-to-the-frontend-directory)
    - [**2. Install Frontend Dependencies**](#2-install-frontend-dependencies)
    - [**3. Set Up Environment Variables**](#3-set-up-environment-variables-1)
    - [**4. Update NextAuth.js Configuration**](#4-update-nextauthjs-configuration)
    - [**5. Run the Frontend Application**](#5-run-the-frontend-application)
  - [**Testing the Application**](#testing-the-application)
    - [**1. Register a New User**](#1-register-a-new-user)
    - [**2. Log In with the Registered User**](#2-log-in-with-the-registered-user)
  - [**Common Issues and Solutions**](#common-issues-and-solutions)
    - [**Issue 1: 404 Not Found Error**](#issue-1-404-not-found-error)
    - [**Issue 2: Alembic Path Doesn't Exist Error**](#issue-2-alembic-path-doesnt-exist-error)
    - [**Issue 3: DuplicateTable Error in Alembic Migrations**](#issue-3-duplicatetable-error-in-alembic-migrations)
    - [**Issue 4: Bcrypt `AttributeError`**](#issue-4-bcrypt-attributeerror)
    - [**Issue 5: Invalid Credentials on Login**](#issue-5-invalid-credentials-on-login)
    - [**Issue 6: Docker Compose Exec Command Issues**](#issue-6-docker-compose-exec-command-issues)
    - [**Issue 7: TypeError `[ERR_INVALID_URL]`**](#issue-7-typeerror-err_invalid_url)
  - [**Conclusion**](#conclusion)
- [**Appendix**](#appendix)

---

## **Introduction**

This guide provides a comprehensive walkthrough for setting up and running the Finance Research App, which includes a FastAPI backend and a Next.js frontend. The application allows users to register, log in, and access protected routes, leveraging technologies like Docker, PostgreSQL, Alembic, and NextAuth.js.

---

## **Directory Structure**

### **Backend Directory Structure**

```
backend/
├── alembic/
│   ├── env.py
│   ├── README
│   ├── script.py.mako
│   └── versions/
│       └── [timestamp]_initial_migration.py
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── config.py
│   ├── database.py
│   ├── auth/
│   │   ├── hashing.py
│   │   └── jwt_handler.py
│   └── routers/
│       ├── auth.py
│       └── users.py
├── Dockerfile
├── requirements.txt
├── docker-compose.yml
├── .env
└── other files...
```

### **Frontend Directory Structure**

```
frontend/
├── pages/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth].ts
│   ├── index.tsx
│   ├── login.tsx
│   └── other pages...
├── components/
│   ├── Navbar.tsx
│   └── other components...
├── styles/
│   └── globals.css
├── public/
├── .env.local
├── package.json
├── tsconfig.json
└── other configuration files...
```

---

## **Prerequisites**

Before you begin, ensure you have the following installed on your machine:

- **Docker** and **Docker Compose**
- **Node.js** (version 14.x or higher) and **npm**
- **Python** (version 3.8 or higher)
- **Git** (optional, if cloning from a repository)

---

## **Setting Up the Backend**

### **1. Clone the Repository**

If you have a Git repository, clone it. Otherwise, create a new directory for your backend project.

```bash
git clone https://github.com/yourusername/finance-research-app.git
```

### **2. Navigate to the Backend Directory**

```bash
cd finance-research-app/backend
```

### **3. Set Up Environment Variables**

Create a `.env` file in the `backend` directory.

```bash
touch .env
```

**Contents of `.env`:**

```env
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://demouser:demopassword@db:5432/demodb
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

- Replace `your-secret-key` with a secure random string.

### **4. Update `requirements.txt`**

Ensure your `requirements.txt` includes the correct dependencies.

```text
fastapi
uvicorn[standard]
python-dotenv
sqlalchemy
alembic
psycopg2-binary
passlib[bcrypt]==1.7.4
bcrypt==3.2.0
python-jose[cryptography]
pydantic==1.10.9
httpx
pytest
pytest-asyncio
bandit
```

### **5. Create the Dockerfile**

Create a `Dockerfile` in the `backend` directory.

```dockerfile
# backend/Dockerfile

FROM python:3.9-slim

WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### **6. Create `docker-compose.yml`**

Create a `docker-compose.yml` file in the `backend` directory.

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

### **7. Initialize Alembic for Database Migrations**

Initialize Alembic in the `backend` directory.

```bash
alembic init alembic
```

### **8. Update Alembic Configuration**

- **Edit `alembic.ini`:** Set the database URL to read from the environment variable.

```ini
# In alembic.ini
sqlalchemy.url = ${DATABASE_URL}
```

- **Edit `alembic/env.py`:**

```python
# alembic/env.py

from logging.config import fileConfig
from sqlalchemy import engine_from_config
from sqlalchemy import pool
from alembic import context
import os
import sys

# Add your app directory to sys.path
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from app.models import Base  # Import your models here

config = context.config

# Interpret the config file for Python logging.
fileConfig(config.config_file_name)

# Get the database URL from the environment variable
config.set_main_option('sqlalchemy.url', os.environ.get('DATABASE_URL'))

target_metadata = Base.metadata
```

### **9. Create Initial Migration Script**

Generate the initial migration script.

```bash
alembic revision --autogenerate -m "Initial migration"
```

### **10. Build and Run Docker Containers**

Build and start the Docker containers.

```bash
docker-compose build --no-cache
docker-compose up -d
```

### **11. Run Database Migrations**

Apply the migrations to the database.

```bash
docker-compose exec backend alembic upgrade head
```

### **12. Test the Backend API**

- **Access the API Documentation:**

  Visit `http://localhost:8000/docs` in your browser.

- **Test the Root Endpoint:**

  ```bash
  curl http://localhost:8000/
  ```

  **Expected Response:**

  ```json
  {
    "message": "Welcome to the Finance Research API"
  }
  ```

---

## **Setting Up the Frontend**

### **1. Navigate to the Frontend Directory**

```bash
cd ../frontend
```

### **2. Install Frontend Dependencies**

Install the necessary packages using npm.

```bash
npm install
```

### **3. Set Up Environment Variables**

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

- Ensure `NEXTAUTH_SECRET` matches `SECRET_KEY` in the backend `.env` file.

### **4. Update NextAuth.js Configuration**

Edit `frontend/pages/api/auth/[...nextauth].ts`.

```typescript
// frontend/pages/api/auth/[...nextauth].ts

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
  debug: true, // Enable debug mode for detailed logs
});
```

### **5. Run the Frontend Application**

Start the Next.js development server.

```bash
npm run dev
```

- The application should be running at `http://localhost:3000`.

---

## **Testing the Application**

### **1. Register a New User**

- **Using the Frontend:**
  - Navigate to the registration page (if implemented).
  - Fill in the username and password fields.
  - Submit the form.

- **Using `curl`:**

  ```bash
  curl -X POST "http://localhost:8000/api/auth/register" \
    -H "Content-Type: application/json" \
    -d '{"username": "testuser", "password": "testpassword"}'
  ```

  **Expected Response:**

  ```json
  {
    "id": 1,
    "username": "testuser"
  }
  ```

### **2. Log In with the Registered User**

- **Using the Frontend:**
  - Navigate to the login page.
  - Enter the username and password.
  - Submit the form.

- **Using `curl`:**

  ```bash
  curl -X POST "http://localhost:8000/api/auth/login" \
    -H "Content-Type: application/json" \
    -d '{"username": "testuser", "password": "testpassword"}'
  ```

  **Expected Response:**

  ```json
  {
    "access_token": "your_jwt_token",
    "token_type": "bearer"
  }
 

### **3. Access Protected Routes**

- **Using the Frontend:**
  - After logging in, attempt to access protected pages that require authentication.

- **Using `curl`:**

  ```bash
  curl -X GET "http://localhost:8000/api/protected-route" \
    -H "Authorization: Bearer your_jwt_token"
  ```

  **Replace `your_jwt_token` with the actual token received during login.**

---

## **Common Issues and Solutions**

### **Issue 1: 404 Not Found Error**

**Problem:** Accessing `http://localhost:8000/` returns a 404 error.

**Solution:**

- **Add a Root Endpoint in `app/main.py`:**

  ```python
  @app.get("/", tags=["Root"])
  def read_root():
      return {"message": "Welcome to the Finance Research API"}
  ```

### **Issue 2: Alembic Path Doesn't Exist Error**

**Problem:** Alembic cannot find the `alembic` directory inside the Docker container.

**Solution:**

- **Ensure the `alembic` Directory Is Included in the Docker Image:**
  - Use `COPY . .` in your `Dockerfile`.
  - Ensure `.dockerignore` doesn't exclude the `alembic` directory.

### **Issue 3: DuplicateTable Error in Alembic Migrations**

**Problem:** Alembic raises a `DuplicateTable` error when running migrations.

**Solution:**

- **Remove `Base.metadata.create_all()` from `app/main.py`:**

  ```python
  # Remove or comment out the following line
  # Base.metadata.create_all(bind=engine)
  ```

- **Drop Existing Tables if Safe:**

  ```bash
  docker-compose exec db psql -U demouser -d demodb
  ```

  ```sql
  DROP TABLE IF EXISTS users CASCADE;
  \q
  ```

### **Issue 4: Bcrypt `AttributeError`**

**Problem:** `AttributeError: module 'bcrypt' has no attribute '__about__'`

**Solution:**

- **Ensure Compatible Versions in `requirements.txt`:**

  ```text
  passlib[bcrypt]==1.7.4
  bcrypt==3.2.0
  ```

- **Rebuild Docker Containers:**

  ```bash
  docker-compose down
  docker-compose build --no-cache
  docker-compose up -d
  ```

### **Issue 5: Invalid Credentials on Login**

**Problem:** Unable to log in; the frontend shows "Invalid credentials."

**Solution:**

- **Ensure the Frontend Sends the Correct Data Format:**
  - The `authorize` function in NextAuth.js should send JSON payloads.

- **Update `authorize` Function:**

  ```typescript
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
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
  ```

- **Check NextAuth.js Callbacks and Configuration.**

### **Issue 6: Docker Compose Exec Command Issues**

**Problem:** Unable to run `docker-compose exec` commands; "No configuration file provided: not found."

**Solution:**

- **Ensure You're in the Correct Directory:**
  - Navigate to the directory containing `docker-compose.yml`.

- **Use the Correct Command:**
  - Use `docker-compose` (with a hyphen) if using Docker Compose v1.

### **Issue 7: TypeError `[ERR_INVALID_URL]`**

**Problem:** `TypeError [ERR_INVALID_URL]` due to invalid URL in the `authorize` function.

**Solution:**

- **Use Backticks for String Interpolation:**

  ```typescript
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;
  ```

---

## **Conclusion**

By following this guide, you should have a fully functional Finance Research App with both the backend and frontend running seamlessly. We've covered setting up the environment, configuring Docker and Docker Compose, handling database migrations with Alembic, and integrating authentication using NextAuth.js.

If you encounter any further issues or have questions about any of the steps, feel free to revisit the relevant sections in this guide. Happy coding!

---

**Note:** Always ensure your environment variables are kept secure and not exposed in version control systems. Use tools like `.gitignore` to prevent sensitive files from being committed.

# **Appendix**

- **Useful Commands:**

  - **View Docker Logs:**

    ```bash
    docker-compose logs backend
    ```

  - **Access Backend Container Shell:**

    ```bash
    docker-compose exec backend bash
    ```

  - **Check Installed Python Packages in Container:**

    ```bash
    pip show passlib
    pip show bcrypt
    ```

- **Helpful Links:**

  - [FastAPI Documentation](https://fastapi.tiangolo.com/)
  - [Next.js Documentation](https://nextjs.org/docs)
  - [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
  - [Docker Documentation](https://docs.docker.com/)
  - [Alembic Documentation](https://alembic.sqlalchemy.org/en/latest/)

---

Happy developing!