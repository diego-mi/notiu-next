import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import prismadb from '@/domain/core/lib/prismadb';
import { User } from '@prisma/client';

interface UserSession extends Session {
  user: User;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }: any) {
      session = {
        ...session,
        user: {
          id: token.user.id,
          ...session.user,
        },
      } as UserSession;
      return session;
    },
  },
};

export default NextAuth(authOptions);
