import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Cart from "@/lib/models/Cart";
import Item from "@/lib/models/Item";
import Category from "@/lib/models/Category";

export async function GET(req, { params }) {
  await connectDB();
  const { userId } = await params;

  const cart = await Cart.findOne({ userId }).populate({
    path: "items.itemId",
    model: Item,
    select: "name price image"
  });

  if (!cart) return NextResponse.json({ items: [] });

  return NextResponse.json(cart);
}

export async function POST(req, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    const { itemId } = await req.json();

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ itemId, quantity: 1 }],
      });
    } else {
      const exist = cart.items.find(
        (i) => i.itemId.toString() === itemId
      );

      if (exist) {
        exist.quantity += 1;
      } else {
        cart.items.push({ itemId, quantity: 1 });
      }

      await cart.save();
    }

    return NextResponse.json(cart);

  } catch (error) {
    console.error("Add to Cart ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}