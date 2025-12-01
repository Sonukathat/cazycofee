import { FaLeaf, FaCouch, FaUserTie, FaTruck } from "react-icons/fa";

const points = [
  {
    icon: <FaLeaf size={28} />,
    title: "Fresh Beans",
    desc: "We use handpicked premium coffee beans."
  },
  {
    icon: <FaCouch size={28} />,
    title: "Cozy Environment",
    desc: "Relax in our warm and comfortable café space."
  },
  {
    icon: <FaUserTie size={28} />,
    title: "Skilled Baristas",
    desc: "Coffee crafted by experienced professionals."
  },
  {
    icon: <FaTruck size={28} />,
    title: "Fast Delivery",
    desc: "Hot coffee delivered quick to your doorstep."
  }
];

function Chooseus() {
  return (
    <div className="w-full py-14 px-6 bg-[#FFF3E4]">
      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {points.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-center"
          >
            <div className="flex justify-center text-[#4A2C2A] mb-3">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#4A2C2A]">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chooseus;
