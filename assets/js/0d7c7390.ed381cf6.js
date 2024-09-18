"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[212],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,c=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(c,i(i({ref:n},g),{},{components:t})):a.createElement(c,i({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},121:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(8168),r=(t(6540),t(5680));const o={},i="**Finance Research App Development Documentation**",s={unversionedId:"frontend/frontend-dev-docs",id:"frontend/frontend-dev-docs",isDocsHomePage:!1,title:"**Finance Research App Development Documentation**",description:"Welcome to the development documentation for the Finance Research App. This document outlines the steps taken during the development of the application, including setting up virtual environments, installing necessary libraries, and configuring both the backend and frontend components. The aim is to provide a comprehensive guide that can help you understand the development process and replicate it if needed.",source:"@site/docs/frontend/frontend-dev-docs.md",sourceDirName:"frontend",slug:"/frontend/frontend-dev-docs",permalink:"/muffin/docs/docs/frontend/frontend-dev-docs",editUrl:"https://github.com/alterbrainai/muffin/edit/main/docs/docs/frontend/frontend-dev-docs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"**Muffin - App Setup Guide**",permalink:"/muffin/docs/docs/backend/backend-dev-docs"}},p=[{value:"<strong>Table of Contents</strong>",id:"table-of-contents",children:[]},{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Project Overview</strong>",id:"project-overview",children:[]},{value:"<strong>Development Steps</strong>",id:"development-steps",children:[{value:"<strong>Backend Development</strong>",id:"backend-development",children:[]},{value:"<strong>Frontend Development</strong>",id:"frontend-development",children:[]},{value:"<strong>Common Development Issues and Solutions</strong>",id:"common-development-issues-and-solutions",children:[]}]},{value:"<strong>Conclusion</strong>",id:"conclusion",children:[]}],l={toc:p},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"finance-research-app-development-documentation"},(0,r.yg)("strong",{parentName:"h1"},"Finance Research App Development Documentation")),(0,r.yg)("p",null,"Welcome to the development documentation for the Finance Research App. This document outlines the steps taken during the development of the application, including setting up virtual environments, installing necessary libraries, and configuring both the backend and frontend components. The aim is to provide a comprehensive guide that can help you understand the development process and replicate it if needed."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"table-of-contents"},(0,r.yg)("strong",{parentName:"h2"},"Table of Contents")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#finance-research-app-development-documentation"},(0,r.yg)("strong",{parentName:"a"},"Finance Research App Development Documentation")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#table-of-contents"},(0,r.yg)("strong",{parentName:"a"},"Table of Contents"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#introduction"},(0,r.yg)("strong",{parentName:"a"},"Introduction"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#project-overview"},(0,r.yg)("strong",{parentName:"a"},"Project Overview"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#development-steps"},(0,r.yg)("strong",{parentName:"a"},"Development Steps")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#backend-development"},(0,r.yg)("strong",{parentName:"a"},"Backend Development")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#1-setting-up-the-project-structure"},(0,r.yg)("strong",{parentName:"a"},"1. Setting Up the Project Structure"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#2-creating-a-virtual-environment"},(0,r.yg)("strong",{parentName:"a"},"2. Creating a Virtual Environment"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#3-initializing-git-repository"},(0,r.yg)("strong",{parentName:"a"},"3. Initializing Git Repository"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#4-installing-dependencies"},(0,r.yg)("strong",{parentName:"a"},"4. Installing Dependencies"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#5-setting-up-the-fastapi-application"},(0,r.yg)("strong",{parentName:"a"},"5. Setting Up the FastAPI Application"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#6-configuring-database-with-sqlalchemy"},(0,r.yg)("strong",{parentName:"a"},"6. Configuring Database with SQLAlchemy"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#7-implementing-user-authentication"},(0,r.yg)("strong",{parentName:"a"},"7. Implementing User Authentication"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#8-adding-alembic-for-migrations"},(0,r.yg)("strong",{parentName:"a"},"8. Adding Alembic for Migrations"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#9-dockerizing-the-backend"},(0,r.yg)("strong",{parentName:"a"},"9. Dockerizing the Backend"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#frontend-development"},(0,r.yg)("strong",{parentName:"a"},"Frontend Development")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#1-setting-up-the-nextjs-project"},(0,r.yg)("strong",{parentName:"a"},"1. Setting Up the Next.js Project"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#2-installing-dependencies"},(0,r.yg)("strong",{parentName:"a"},"2. Installing Dependencies"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#3-implementing-authentication-with-nextauthjs"},(0,r.yg)("strong",{parentName:"a"},"3. Implementing Authentication with NextAuth.js"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#4-creating-ui-components"},(0,r.yg)("strong",{parentName:"a"},"4. Creating UI Components"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#5-integrating-backend-api"},(0,r.yg)("strong",{parentName:"a"},"5. Integrating Backend API"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#6-handling-protected-routes"},(0,r.yg)("strong",{parentName:"a"},"6. Handling Protected Routes"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#common-development-issues-and-solutions"},(0,r.yg)("strong",{parentName:"a"},"Common Development Issues and Solutions"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#conclusion"},(0,r.yg)("strong",{parentName:"a"},"Conclusion")))))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"introduction"},(0,r.yg)("strong",{parentName:"h2"},"Introduction")),(0,r.yg)("p",null,"This documentation provides a step-by-step guide on how the Finance Research App was developed. It includes detailed instructions on setting up the development environment, installing necessary libraries, configuring both backend and frontend, and addressing common issues encountered during development."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"project-overview"},(0,r.yg)("strong",{parentName:"h2"},"Project Overview")),(0,r.yg)("p",null,"The Finance Research App is a web application that allows users to register, log in, and access financial data and research tools. It comprises:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Backend"),": Built with FastAPI, it handles authentication, user management, and provides APIs for frontend consumption."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Frontend"),": Developed with Next.js, it offers a responsive user interface, handles authentication via NextAuth.js, and communicates with the backend APIs.")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"development-steps"},(0,r.yg)("strong",{parentName:"h2"},"Development Steps")),(0,r.yg)("h3",{id:"backend-development"},(0,r.yg)("strong",{parentName:"h3"},"Backend Development")),(0,r.yg)("h4",{id:"1-setting-up-the-project-structure"},(0,r.yg)("strong",{parentName:"h4"},"1. Setting Up the Project Structure")),(0,r.yg)("p",null,"Create a directory for the backend project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir finance-research-app\ncd finance-research-app\nmkdir backend\ncd backend\n")),(0,r.yg)("h4",{id:"2-creating-a-virtual-environment"},(0,r.yg)("strong",{parentName:"h4"},"2. Creating a Virtual Environment")),(0,r.yg)("p",null,"Set up a Python virtual environment to isolate project dependencies."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,r.yg)("h4",{id:"3-initializing-git-repository"},(0,r.yg)("strong",{parentName:"h4"},"3. Initializing Git Repository")),(0,r.yg)("p",null,"Initialize a Git repository to track changes."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,r.yg)("h4",{id:"4-installing-dependencies"},(0,r.yg)("strong",{parentName:"h4"},"4. Installing Dependencies")),(0,r.yg)("p",null,"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},"requirements.txt")," file and install initial dependencies."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"touch requirements.txt\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Add the following to ",(0,r.yg)("inlineCode",{parentName:"strong"},"requirements.txt"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"fastapi\nuvicorn[standard]\npython-dotenv\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Install the dependencies:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.yg)("h4",{id:"5-setting-up-the-fastapi-application"},(0,r.yg)("strong",{parentName:"h4"},"5. Setting Up the FastAPI Application")),(0,r.yg)("p",null,"Create the main application file and directory structure."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir app\ntouch app/__init__.py\ntouch app/main.py\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Content of ",(0,r.yg)("inlineCode",{parentName:"strong"},"app/main.py"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"message": "Welcome to the Finance Research API"}\n')),(0,r.yg)("h4",{id:"6-configuring-database-with-sqlalchemy"},(0,r.yg)("strong",{parentName:"h4"},"6. Configuring Database with SQLAlchemy")),(0,r.yg)("p",null,"Install SQLAlchemy and configure the database."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Update ",(0,r.yg)("inlineCode",{parentName:"strong"},"requirements.txt"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"sqlalchemy\npsycopg2-binary\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Install new dependencies:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Create database configuration files:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create ",(0,r.yg)("inlineCode",{parentName:"strong"},"app/database.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from sqlalchemy import create_engine\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\nfrom app.config import settings\n\nSQLALCHEMY_DATABASE_URL = settings.DATABASE_URL\n\nengine = create_engine(SQLALCHEMY_DATABASE_URL)\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\nBase = declarative_base()\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create ",(0,r.yg)("inlineCode",{parentName:"strong"},"app/models.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from sqlalchemy import Column, Integer, String\nfrom app.database import Base\n\nclass User(Base):\n    __tablename__ = "users"\n    id = Column(Integer, primary_key=True, index=True)\n    username = Column(String, unique=True, index=True)\n    hashed_password = Column(String)\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create ",(0,r.yg)("inlineCode",{parentName:"strong"},"app/config.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseSettings\n\nclass Settings(BaseSettings):\n    DATABASE_URL: str\n    SECRET_KEY: str\n    ALGORITHM: str = "HS256"\n    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30\n\n    class Config:\n        env_file = ".env"\n\nsettings = Settings()\n')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Create a ",(0,r.yg)("inlineCode",{parentName:"strong"},".env")," file:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Contents of ",(0,r.yg)("inlineCode",{parentName:"strong"},".env"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-env"},"SECRET_KEY=your-secret-key\nDATABASE_URL=postgresql://demouser:demopassword@localhost:5432/demodb\nALGORITHM=HS256\nACCESS_TOKEN_EXPIRE_MINUTES=30\n")),(0,r.yg)("h4",{id:"7-implementing-user-authentication"},(0,r.yg)("strong",{parentName:"h4"},"7. Implementing User Authentication")),(0,r.yg)("p",null,"Install authentication libraries."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Update ",(0,r.yg)("inlineCode",{parentName:"strong"},"requirements.txt"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"passlib[bcrypt]==1.7.4\nbcrypt==3.2.0\npython-jose[cryptography]\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Install new dependencies:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Create Authentication Modules:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"app/auth/hashing.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from passlib.context import CryptContext\n\npwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")\n\ndef hash_password(password: str) -> str:\n    return pwd_context.hash(password)\n\ndef verify_password(plain_password: str, hashed_password: str) -> bool:\n    return pwd_context.verify(plain_password, hashed_password)\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"app/auth/jwt_handler.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timedelta\nfrom typing import Any, Dict\nfrom jose import jwt\nfrom app.config import settings\n\nSECRET_KEY = settings.SECRET_KEY\nALGORITHM = settings.ALGORITHM\nACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES\n\ndef create_access_token(data: Dict[str, Any]) -> str:\n    to_encode = data.copy()\n    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)\n    to_encode.update({"exp": expire})\n    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\n    return encoded_jwt\n')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Create Authentication Routes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"app/routers/auth.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from fastapi import APIRouter, HTTPException, Depends\nfrom sqlalchemy.orm import Session\nfrom app.database import get_db\nfrom app.models import User\nfrom app.auth.hashing import hash_password, verify_password\nfrom app.auth.jwt_handler import create_access_token\nfrom app.schemas import UserRegister, UserLogin, UserResponse\n\nrouter = APIRouter()\n\n@router.post("/api/auth/register", response_model=UserResponse)\nasync def register(user: UserRegister, db: Session = Depends(get_db)):\n    db_user = db.query(User).filter(User.username == user.username).first()\n    if db_user:\n        raise HTTPException(status_code=400, detail="Username already registered")\n    hashed_pwd = hash_password(user.password)\n    new_user = User(username=user.username, hashed_password=hashed_pwd)\n    db.add(new_user)\n    db.commit()\n    db.refresh(new_user)\n    return new_user\n\n@router.post("/api/auth/login")\nasync def login(user_credentials: UserLogin, db: Session = Depends(get_db)):\n    user = db.query(User).filter(User.username == user_credentials.username).first()\n    if not user or not verify_password(user_credentials.password, user.hashed_password):\n        raise HTTPException(status_code=400, detail="Invalid credentials")\n    access_token = create_access_token(data={"sub": user.username})\n    return {"access_token": access_token, "token_type": "bearer"}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Update ",(0,r.yg)("inlineCode",{parentName:"strong"},"app/main.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\nfrom app.routers import auth\nfrom fastapi.middleware.cors import CORSMiddleware\n\napp = FastAPI()\n\norigins = [\n    "http://localhost:3000",\n]\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=origins,\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)\n\napp.include_router(auth.router)\n\n@app.get("/")\ndef read_root():\n    return {"message": "Welcome to the Finance Research API"}\n')))),(0,r.yg)("h4",{id:"8-adding-alembic-for-migrations"},(0,r.yg)("strong",{parentName:"h4"},"8. Adding Alembic for Migrations")),(0,r.yg)("p",null,"Initialize Alembic to handle database migrations."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"alembic init alembic\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Configure Alembic:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Edit ",(0,r.yg)("inlineCode",{parentName:"strong"},"alembic.ini"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ini"},"sqlalchemy.url = ${DATABASE_URL}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Edit ",(0,r.yg)("inlineCode",{parentName:"strong"},"alembic/env.py"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"import os\nfrom app.models import Base  # Import your models\nconfig.set_main_option('sqlalchemy.url', os.environ.get('DATABASE_URL'))\ntarget_metadata = Base.metadata\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Create Initial Migration Script:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'alembic revision --autogenerate -m "Initial migration"\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Apply Migrations:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"alembic upgrade head\n")),(0,r.yg)("h4",{id:"9-dockerizing-the-backend"},(0,r.yg)("strong",{parentName:"h4"},"9. Dockerizing the Backend")),(0,r.yg)("p",null,"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," to containerize the backend."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Dockerfile"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-dockerfile"},'FROM python:3.9-slim\n\nWORKDIR /app\n\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\nCOPY . .\n\nCMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"docker-compose.yml"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nservices:\n  backend:\n    build: .\n    volumes:\n      - .:/app\n    ports:\n      - "8000:8000"\n    depends_on:\n      - db\n    env_file:\n      - .env\n\n  db:\n    image: postgres:14\n    volumes:\n      - postgres_data:/var/lib/postgresql/data/\n    environment:\n      - POSTGRES_USER=demouser\n      - POSTGRES_PASSWORD=demopassword\n      - POSTGRES_DB=demodb\n    ports:\n      - "5432:5432"\n\nvolumes:\n  postgres_data:\n')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Build and Run Containers:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose build\ndocker-compose up -d\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Run Migrations Inside Docker:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec backend alembic upgrade head\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"frontend-development"},(0,r.yg)("strong",{parentName:"h3"},"Frontend Development")),(0,r.yg)("h4",{id:"1-setting-up-the-nextjs-project"},(0,r.yg)("strong",{parentName:"h4"},"1. Setting Up the Next.js Project")),(0,r.yg)("p",null,"Navigate to the parent directory and create the frontend project."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd ..\nnpx create-next-app@latest frontend --typescript\ncd frontend\n")),(0,r.yg)("h4",{id:"2-installing-dependencies"},(0,r.yg)("strong",{parentName:"h4"},"2. Installing Dependencies")),(0,r.yg)("p",null,"Install necessary libraries for the frontend."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install next-auth axios\n")),(0,r.yg)("h4",{id:"3-implementing-authentication-with-nextauthjs"},(0,r.yg)("strong",{parentName:"h4"},"3. Implementing Authentication with NextAuth.js")),(0,r.yg)("p",null,"Create the authentication configuration."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create ",(0,r.yg)("inlineCode",{parentName:"strong"},"pages/api/auth/[...nextauth].ts"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import NextAuth from 'next-auth';\nimport CredentialsProvider from 'next-auth/providers/credentials';\nimport axios from 'axios';\n\nexport default NextAuth({\n  providers: [\n    CredentialsProvider({\n      name: 'Credentials',\n      credentials: {\n        username: { label: 'Username', type: 'text' },\n        password: { label: 'Password', type: 'password' },\n      },\n      async authorize(credentials) {\n        try {\n          if (!credentials) {\n            throw new Error('No credentials provided');\n          }\n\n          const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;\n\n          const res = await axios.post(\n            url,\n            {\n              username: credentials.username,\n              password: credentials.password,\n            },\n            {\n              headers: {\n                'Content-Type': 'application/json',\n              },\n            }\n          );\n\n          const user = res.data;\n\n          if (user && user.access_token) {\n            return { ...user, username: credentials.username };\n          }\n          return null;\n        } catch (error: any) {\n          throw new Error(\n            error.response?.data?.detail || 'Invalid credentials'\n          );\n        }\n      },\n    }),\n  ],\n  callbacks: {\n    jwt: async ({ token, user }) => {\n      if (user) {\n        token.accessToken = user.access_token;\n        token.username = user.username;\n      }\n      return token;\n    },\n    session: async ({ session, token }) => {\n      session.accessToken = token.accessToken;\n      session.user = {\n        username: token.username,\n      };\n      return session;\n    },\n  },\n  secret: process.env.NEXTAUTH_SECRET,\n  session: {\n    strategy: 'jwt',\n  },\n  debug: true,\n});\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Set Up Environment Variables:")),(0,r.yg)("p",null,"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},".env.local")," file in the ",(0,r.yg)("inlineCode",{parentName:"p"},"frontend")," directory."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"touch .env.local\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Contents of ",(0,r.yg)("inlineCode",{parentName:"strong"},".env.local"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-env"},"NEXT_PUBLIC_API_URL=http://localhost:8000\nNEXTAUTH_SECRET=your-secret-key\nNEXTAUTH_URL=http://localhost:3000\n")),(0,r.yg)("h4",{id:"4-creating-ui-components"},(0,r.yg)("strong",{parentName:"h4"},"4. Creating UI Components")),(0,r.yg)("p",null,"Implement login and registration pages."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create ",(0,r.yg)("inlineCode",{parentName:"strong"},"pages/login.tsx"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { signIn } from 'next-auth/react';\nimport { useState } from 'react';\n\nexport default function LoginPage() {\n  const [error, setError] = useState('');\n\n  const handleSubmit = async (event: React.FormEvent) => {\n    event.preventDefault();\n    const username = (event.target as any).username.value;\n    const password = (event.target as any).password.value;\n\n    const result = await signIn('credentials', {\n      redirect: false,\n      username,\n      password,\n    });\n\n    if (result?.error) {\n      setError(result.error);\n    } else {\n      // Redirect to home page or dashboard\n    }\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input name=\"username\" type=\"text\" required />\n        <input name=\"password\" type=\"password\" required />\n        <button type=\"submit\">Login</button>\n      </form>\n      {error && <p style={{ color: 'red' }}>{error}</p>}\n    </div>\n  );\n}\n")))),(0,r.yg)("h4",{id:"5-integrating-backend-api"},(0,r.yg)("strong",{parentName:"h4"},"5. Integrating Backend API")),(0,r.yg)("p",null,"Use Axios to make API requests to the backend."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Install Axios:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create an API Utility:")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"utils/api.ts"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\n\nconst api = axios.create({\n  baseURL: process.env.NEXT_PUBLIC_API_URL,\n});\n\nexport default api;\n")))))),(0,r.yg)("h4",{id:"6-handling-protected-routes"},(0,r.yg)("strong",{parentName:"h4"},"6. Handling Protected Routes")),(0,r.yg)("p",null,"Implement client-side protection for routes that require authentication."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create a Higher-Order Component (HOC) for Protection:")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"components/withAuth.tsx"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { useSession, signIn } from 'next-auth/react';\nimport { useEffect } from 'react';\n\nconst withAuth = (WrappedComponent: any) => {\n  return (props: any) => {\n    const { data: session, status } = useSession();\n\n    useEffect(() => {\n      if (status === 'unauthenticated') {\n        signIn();\n      }\n    }, [status]);\n\n    if (status === 'authenticated') {\n      return <WrappedComponent {...props} />;\n    }\n\n    return <div>Loading...</div>;\n  };\n};\n\nexport default withAuth;\n"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Use the HOC in Protected Pages:")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"pages/dashboard.tsx"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import withAuth from '../components/withAuth';\n\nfunction Dashboard() {\n  return <div>Welcome to your dashboard!</div>;\n}\n\nexport default withAuth(Dashboard);\n")))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"common-development-issues-and-solutions"},(0,r.yg)("strong",{parentName:"h3"},"Common Development Issues and Solutions")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Issue:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"AttributeError: module 'bcrypt' has no attribute '__about__'")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Solution:")," Ensure ",(0,r.yg)("inlineCode",{parentName:"li"},"passlib")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"bcrypt")," versions are compatible in ",(0,r.yg)("inlineCode",{parentName:"li"},"requirements.txt"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Issue:"),' Frontend shows "Invalid credentials" upon login.'),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Solution:")," Verify that the ",(0,r.yg)("inlineCode",{parentName:"li"},"authorize")," function correctly communicates with the backend and that environment variables are properly set."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Issue:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"TypeError [ERR_INVALID_URL]")," due to invalid URL."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Solution:")," Use backticks for string interpolation when constructing URLs.")))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"conclusion"},(0,r.yg)("strong",{parentName:"h2"},"Conclusion")),(0,r.yg)("p",null,"This documentation has outlined the steps taken during the development of the Finance Research App. By following this guide, you should have a clear understanding of how to set up the development environment, install necessary libraries, and build both the backend and frontend components."),(0,r.yg)("p",null,"Remember to keep your environment variables secure and not commit sensitive information to version control systems. Always test your application thoroughly to ensure all components work together seamlessly."),(0,r.yg)("p",null,"Happy coding!"),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," This documentation assumes familiarity with web development concepts, Docker, and the technologies used in the application. If you encounter any issues not covered here, consider consulting the official documentation of the respective technologies or seeking help from the developer community."))}m.isMDXComponent=!0}}]);