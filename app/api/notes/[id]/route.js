import connectDB from "@/utils/dbconnect";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

// GET a single note by ID
export async function GET(req, context) {
  try {
    const { params } = await context;
    await connectDB();

    const note = await Note.findById(params.id);
    if (!note)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json(note);
  } catch (error) {
    console.error("GET /api/notes/[id] error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// PUT to update a note
export async function PUT(req, context) {
  try {
    const { params } = await context;
    await connectDB();

    const { title, content } = await req.json();
    const updatedNote = await Note.findByIdAndUpdate(
      params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json(updatedNote);
  } catch (error) {
    console.error("PUT /api/notes/[id] error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// DELETE a note
export async function DELETE(req, context) {
  try {
    const { params } = await context;
    await connectDB();

    await Note.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Note deleted" });
  } catch (error) {
    console.error("DELETE /api/notes/[id] error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
