import { connectDB } from "@/lib/db";
import Cart from "@/lib/models/Cart";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectDB();
  const { userId } = await params;
  const { itemId } = await req.json();

  const cart = await Cart.findOne({ userId });

  const item = cart.items.find(i => i.itemId.toString() === itemId);
  item.quantity -= 1;

  // agar qty 0 ho gayi -> remove item
  if (item.quantity <= 0) {
    cart.items = cart.items.filter(i => i.itemId.toString() !== itemId);
  }

  await cart.save();
  return NextResponse.json(cart);
}
