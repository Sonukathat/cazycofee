import { connectDB } from "@/lib/db";
import Cart from "@/lib/models/Cart";

export async function POST(req) {
  await connectDB();

  const { userId, item } = await req.json();

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ ...item, itemId: item._id, qty: 1 }],
    });
    return Response.json(cart);
  }

  const exist = cart.items.find((i) => i.itemId.toString() === item._id);

  if (exist) {
    exist.qty += 1;
  } else {
    cart.items.push({ ...item, itemId: item._id, qty: 1 });
  }

  await cart.save();
  return Response.json(cart);
}

export async function DELETE(req) {
  await connectDB();

  const { userId, itemId } = await req.json();

  const cart = await Cart.findOne({ userId });
  if (!cart) return Response.json({ error: "Cart empty" }, { status: 404 });

  cart.items = cart.items.filter(
    (i) => i.itemId.toString() !== itemId
  );

  await cart.save();
  return Response.json(cart);
}
