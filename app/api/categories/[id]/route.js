import { connectDB } from "@/lib/db";
import Category from "@/lib/models/Category";

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const category = await Category.findById(params.id);
  if (!category) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(category);
}

export async function PUT(req, { params }) {
  await connectDB();
  const { name } = await req.json();
  const updated = await Category.findByIdAndUpdate(
    params.id,
    { name },
    { new: true }
  );
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const deleted = await Category.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Category deleted", deleted });
}
