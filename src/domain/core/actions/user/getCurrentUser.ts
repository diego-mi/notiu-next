import {getServerSession} from 'next-auth/next';
import prismadb from '@/domain/core/lib/prismadb';
import {SafeUser} from '@/domain/core/types';
import {authOptions} from "@/app/lib/nextauth/authconfig";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser(): Promise<SafeUser | null> {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    console.log('currentUser', currentUser)
    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    } as SafeUser;
  } catch (error: any) {
    return null;
  }
}
