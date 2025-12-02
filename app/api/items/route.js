import { connectDB } from "@/lib/db";
import Item from "@/lib/models/Item";
import Category from "@/lib/models/Category";

export async function GET() {
  await connectDB();
  const items = await Item.find().populate("categoryId");
  return Response.json(items);
}

export async function POST(req) {
  await connectDB();

  const { categoryName, name, description, price, image } = await req.json();

  if (!categoryName || !name || !price) {
    return Response.json(
      { error: "categoryName, name, price required" },
      { status: 400 }
    );
  }

  const category = await Category.findOne({ name: categoryName });
  if (!category) {
    return Response.json({ error: "Category not found" }, { status: 404 });
  }

  const item = await Item.create({
    categoryId: category._id,
    name,
    description,
    price,
    image,
  });

  return Response.json({ message: "Item Added", item });
}
