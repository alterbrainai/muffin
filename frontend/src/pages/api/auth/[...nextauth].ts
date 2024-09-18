// frontend/src/pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Enter your username'},
        password: { label: 'Password', type: 'password',  placeholder: 'Enter your password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            // console message
            console.error('No credentials provided')
            throw new Error('No credentials provided');
          }
          console.log('sending request to backend API...')
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
            {
              username: credentials.username,
              password: credentials.password,
            },
            {
              headers:{
                'Content-Type': 'application/json',
              },
            },
          );
          // console message
          console.log('Received response from backend:', res.data)
          const user = res.data;
          if (user && user.access_token) {
            return {...user, username: credentials.username};
          }
          console.error('Authentication failed')
          return null;
        } catch (error: any) {
          console.error('Error during Authentication', error)
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
        username: token.username as string,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // maxAge: 30 * 60, // 30 minutes
    strategy: 'jwt',
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },
  
  // pages: {
  //   signIn: '/',
  // },
  debug: true,
});