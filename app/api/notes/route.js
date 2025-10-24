import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/dbconnect";
import Note from "@/models/Note";

export async function GET(req) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const notes = await Note.find({ userId: session.user.id }).sort({
    createdAt: -1,
  });
  return Response.json(notes);
}

export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { title, content } = await req.json();

  if (!title || !content)
    return new Response("Missing fields", { status: 400 });

  const newNote = await Note.create({
    title,
    content,
    userId: session.user.id,
  });

  return Response.json(newNote);
}
