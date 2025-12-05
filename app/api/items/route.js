import { connectDB } from "@/lib/db";
import Item from "@/lib/models/Item";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const items = await Item.find().populate("categoryId");
  return NextResponse.json(items);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newItem = await Item.create(data);
  return NextResponse.json(newItem);
}
