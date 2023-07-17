import getCurrentUser from "@/domain/core/actions/user/getCurrentUser";
import {NextResponse} from "next/server";
import prismadb from "@/domain/core/lib/prismadb";

export async function POST(req: Request, res: Response) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await req.json();

  const { description } = body;

  const project = await prismadb.project.create({
    data: {
      description: description,
      userId: currentUser.id
    }
  });

  return NextResponse.json(project);
}
