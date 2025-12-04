"use client";
import axios from "axios";
import { toast } from "react-toastify";

export default function ItemCard({ item }) {

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  async function add() {
    if (!userId) {
      toast.error("Please login first");
      return;
    }

    try {
      await axios.post("/api/cart", {
        userId,
        item: {
          _id: item._id,
          name: item.name,
          price: item.price,
          image: item.image,
        },
      });

      toast.success("Added to cart!");
    } catch (err) {
      console.log(err);
      toast.error("Server Error");
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img src={item.image} className="w-full h-40 object-cover rounded-lg" />

      <h3 className="mt-3 text-lg font-semibold text-[#4A2C2A]">
        {item.name}
      </h3>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="mt-2 text-xl font-bold text-[#4A2C2A]">₹{item.price}</p>

      <button
        onClick={add}
        className="w-full bg-[#4A2C2A] text-white py-2 rounded-full mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
}
