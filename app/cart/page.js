"use client";
import { useApp } from "@/context/AppContext";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useApp();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-[#FFF3E4] px-6 py-10">
      <h1 className="text-4xl font-bold text-[#4A2C2A] text-center mb-10">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <h2 className="font-semibold text-[#4A2C2A]">{item.name}</h2>
                  <p className="text-gray-600 text-sm">₹{item.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-full"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-lg text-[#4A2C2A] mb-2">
                  ₹{item.price * item.qty}
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-sm underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-10 p-5 bg-white rounded-xl shadow">
            <span className="text-xl font-bold text-[#4A2C2A]">Total:</span>
            <span className="text-xl font-bold text-[#4A2C2A]">₹{total}</span>
          </div>

          <button className="w-full bg-[#4A2C2A] text-white py-3 rounded-full mt-6 text-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
