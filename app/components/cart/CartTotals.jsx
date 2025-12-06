export default function CartTotals({ items }) {
  const total = items.reduce((sum, i) => sum + (i.itemId.price * i.quantity), 0);

  return (
    <div className="text-right mt-6">
      <h2 className="text-2xl font-bold">Total: ₹{total}</h2>
    </div>
  );
}
