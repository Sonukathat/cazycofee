import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      name: String,
      price: Number,
      image: String,
      qty: { type: Number, default: 1 },
    },
  ],
});

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
