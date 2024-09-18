// frontend/src/types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import { JWT as NextAuthJWT } from 'next-auth/jwt';

// Extend the default User interface
declare module 'next-auth' {
  interface User extends DefaultUser {
    access_token?: string;
    username?: string;
  }

  interface Session extends DefaultSession {
    accessToken?: string;
    user: {
      username: string;
    } & DefaultSession['user'];
  }
}

// Extend the default JWT interface
declare module 'next-auth/jwt' {
  interface JWT extends NextAuthJWT {
    accessToken?: string;
    username?: string;
  }
}