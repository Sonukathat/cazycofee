import { connectDB } from "@/lib/db";
import Item from "@/lib/models/Item";
import Category from "@/lib/models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const items = await Item.find().populate({
      path: "categoryId",
      model: Category,
      select: "name"
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Items GET Error =>", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newItem = await Item.create(data);
  return NextResponse.json(newItem);
}
