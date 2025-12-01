import Link from "next/link";

const photos = [
  {
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80"
  },
  {
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
  },
  {
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
  },
  {
    img: "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?auto=format&fit=crop&w=900&q=80"
  },
  {
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80"
  }
];

function Photogallery() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">
      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {photos.slice(0, 6).map((p, index) => (
          <Link
            key={index}
            href="/gallery"
            className="block overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={p.img}
              className="w-full h-56 object-cover rounded-2xl"
              alt="Cafe Photo"
            />
          </Link>
        ))}

      </div>

      <div className="text-center mt-10">
        <Link
          href="/gallery"
          className="px-6 py-3 bg-[#4A2C2A] text-white rounded-full text-lg font-medium shadow"
        >
          View Full Gallery
        </Link>
      </div>
    </div>
  );
}

export default Photogallery;
