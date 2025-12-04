import { connectDB } from "@/lib/db";
import Cart from "@/lib/models/Cart";

export async function POST(req) {
  try {
    await connectDB();

    const { userId, item } = await req.json();

    if (!userId) {
      return Response.json({ error: "UserId missing" }, { status: 400 });
    }

    if (!item || !item._id) {
      return Response.json({ error: "Invalid item" }, { status: 400 });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ itemId: item._id, name: item.name, price: item.price, image: item.image, qty: 1 }],
      });
      return Response.json(cart);
    }

    const exist = cart.items.find((i) => i.itemId.toString() === item._id);

    if (exist) {
      exist.qty += 1;
    } else {
      cart.items.push({
        itemId: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
      });
    }

    await cart.save();
    return Response.json(cart);

  } catch (error) {
    console.log("❌ CART ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
