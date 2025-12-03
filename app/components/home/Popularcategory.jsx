import { FaCoffee, FaGlassWhiskey, FaCookieBite } from "react-icons/fa";
import { GiTeapot, GiMilkCarton } from "react-icons/gi";
import Link from "next/link";

const categories = [
  {
    name: "Coffee",
    icon: <FaCoffee size={32} />,
    link: "/menu"
  },
  {
    name: "Tea",
    icon: <GiTeapot size={32} />,
    link: "/menu"
  },
  {
    name: "Snacks",
    icon: <FaCookieBite size={32} />,
    link: "/menu"
  },
  {
    name: "Desserts",
    icon: <GiMilkCarton size={32} />,
    link: "/menu"
  },
  {
    name: "Special Drinks",
    icon: <FaGlassWhiskey size={32} />,
    link: "/menu"
  }
];

function Popularcategory() {
  return (
    <div className="w-full py-14 px-6 bg-[#FFF3E4]">
      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={cat.link}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-[#4A2C2A] mb-3">{cat.icon}</div>
            <h3 className="text-lg font-semibold text-[#4A2C2A]">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Popularcategory;
