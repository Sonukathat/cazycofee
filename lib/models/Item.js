import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export default mongoose.models.Item ||
 mongoose.model("Item", ItemSchema);
