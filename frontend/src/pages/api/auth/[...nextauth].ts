// frontend/src/pages/api/auth/[...nextauth].ts

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
          const res = await axios.post(
            '${process.env.NEXT_PUBLIC_API_URL}/api/auth/login',
            {
              username: credentials.username,
              password: credentials.password,
            }
          );
          const user = res.data;
          if (user && user.access_token) {
            return user;
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
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 30 * 60, // 30 minutes
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.access_token;
        token.username = user.username as string;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.user = {
        ...session.user,
        username: token.username as string,
      };
      return session;
    },
  },
  pages: {
    signIn: '/',
  },
});