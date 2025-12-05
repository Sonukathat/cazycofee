import { connectDB } from "@/lib/db";
import Item from "@/lib/models/Item";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  await connectDB();
  const { id } = await context.params;
  const item = await Item.findById(id);
  return NextResponse.json(item);
}

export async function PUT(req, context) {
  await connectDB();
  const { id } = await context.params;
  const body = await req.json();
  const updated = await Item.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req, context) {
  await connectDB();
  const { id } = await context.params;
  const deleted = await Item.findByIdAndDelete(id);
  return NextResponse.json({ message: "deleted", deleted });
}
