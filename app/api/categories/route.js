import { connectDB } from "@/lib/db";
import Category from "@/lib/models/Category";
import { NextResponse } from "next/server";

// GET all categories
export async function GET() {
  await connectDB();
  const categories = await Category.find();
  return NextResponse.json(categories);
}

// POST Create category
export async function POST(req) {
  await connectDB();
  const { name } = await req.json();
  const newCat = await Category.create({ name });
  return NextResponse.json(newCat);
}
