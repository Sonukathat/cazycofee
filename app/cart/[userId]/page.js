import CartItemList from "@/app/components/cart/CartItemList";
import CartTotals from "@/app/components/cart/CartTotals";

async function getCart(userId) {
  const res = await fetch(`http://localhost:3000/api/cart/${userId}`, {
    cache: "no-store"
  });
  return res.json();
}

export default async function CartPage({ params }) {
  const { userId } = await params;
  const cartData = await getCart(userId);

  const items = cartData.items || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* CART ITEMS */}
      <CartItemList items={items} />

      {/* TOTAL BILL */}
      <CartTotals items={items} />
    </div>
  );
}
