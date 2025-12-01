import Link from "next/link";

const gallery = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
];

function MiniGallery() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">
      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Our Café Moments
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {gallery.map((g, index) => (
          <Link href="/gallery" key={index}>
            <img
              src={g}
              className="w-full h-60 object-cover rounded-2xl shadow-xl hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MiniGallery;
