import NextAuth from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prismadb from "@/domain/core/lib/prismadb";
import GoogleProvider from "next-auth/providers/google";
import {UserSession} from "@/app/lib/nextauth/authconfig";


const handler = NextAuth({
  adapter: PrismaAdapter(prismadb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/signin',
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
});

export { handler as GET, handler as POST }
