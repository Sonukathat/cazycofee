"use client";
import { useApp } from "@/context/AppContext";

export default function CartSidebar() {
  const { cart } = useApp();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-sm sticky top-6">
      <h2 className="text-xl font-bold text-[#4A2C2A]">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">Cart is empty</p>
      ) : (
        <>
          <div className="mt-4 space-y-3">
            {cart.map((c) => (
              <div key={c._id} className="flex justify-between">
                <span>{c.name}</span>
                <span>₹{c.price} × {c.qty}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        </>
      )}
    </div>
  );
}
