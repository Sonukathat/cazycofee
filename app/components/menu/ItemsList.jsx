export default function ItemsList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 p-4">
      {items.map((item) => (
        <div key={item._id} className="bg-white rounded shadow p-3">
          <img
            src={item.image}
            className="w-full h-44 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}
