import { connectDB } from "@/lib/db";
import Category from "@/lib/models/Category";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  await connectDB();
  const { id } = await context.params; // 👈 REQUIRED in Next 14

  const category = await Category.findById(id);
  if (!category) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(category);
}

export async function PUT(req, context) {
  await connectDB();
  const { id } = await context.params; 
  const { name } = await req.json();

  const updated = await Category.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );
  return NextResponse.json(updated);
}

export async function DELETE(req, context) {
  await connectDB();
  const { id } = await context.params; 

  const deleted = await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted", deleted });
}
