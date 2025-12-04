import { connectDB } from "@/lib/db";
import Cart from "@/lib/models/Cart";

export async function GET(_, { params }) {
  await connectDB();
  const cart = await Cart.findOne({ userId: params.userId });
  return Response.json(cart || { items: [] });
}
