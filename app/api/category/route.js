import { connectDB } from "@/lib/db";
import Category from "@/lib/models/Category";

export async function POST(req) {
  await connectDB();
  const { name, image, description } = await req.json();

  if (!name || !image) {
    return Response.json(
      { error: "Name and Image are required" },
      { status: 400 }
    );
  }

  const exists = await Category.findOne({ name });
  if (exists) {
    return Response.json(
      { error: "Category already exists" },
      { status: 400 }
    );
  }

  const category = await Category.create({
    name,
    image,
    description,
  });

  return Response.json(
    { message: "Category Created", category },
    { status: 201 }
  );
}

export async function GET() {
  await connectDB();
  const categories = await Category.find();
  return Response.json(categories);
}
