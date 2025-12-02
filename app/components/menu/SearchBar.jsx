export default function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-2xl mx-auto w-full mb-6 text-gray-600">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search coffee, pizza..."
        className="w-full p-3 rounded-full border px-5"
      />
    </div>
  );
}
