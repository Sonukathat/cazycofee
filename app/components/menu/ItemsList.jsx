"use client";

export default function ItemsList({ items }) {
  const userId = "692e451e204faebb90265a7c"; // demo user

  async function addToCart(itemId) {
    const res = await fetch(`/api/cart/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemId }),
    });

    const data = await res.json();
    console.log("Added to Cart:", data);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 p-4">
      {items.map((item) => (
        <div key={item._id} className="bg-white shadow rounded p-3">
          <img
            src={item.image}
            className="w-full h-44 object-cover rounded"
          />

          <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>

          <button
            onClick={() => addToCart(item._id)}
            className="mt-3 bg-black text-white px-4 py-2 rounded w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
