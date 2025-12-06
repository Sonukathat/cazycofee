export default function CartItemList({ items }) {
  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        items.map((c) => (
          <div key={c.itemId._id} className="flex justify-between bg-white shadow p-3 rounded">
            {/* Image */}
            <img
              src={c.itemId.image}
              className="w-20 h-20 object-cover rounded"
            />

            {/* Details */}
            <div className="flex-1 px-4">
              <h2 className="text-xl font-semibold">{c.itemId.name}</h2>
              <p className="text-gray-600">₹{c.itemId.price}</p>
            </div>

            {/* Quantity */}
            <div className="font-semibold">
              Qty: {c.quantity}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
