import Link from "next/link";

function AboutCafe() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">
      <div className="max-w-4xl mx-auto text-center bg-white p-10 rounded-2xl shadow-xl">

        <h2 className="text-3xl md:text-4xl font-bold text-[#4A2C2A] mb-5">
          About Our Café
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our café has been serving premium handcrafted coffee for years.  
          We focus on creating a cozy environment where people can relax,  
          work, and enjoy freshly brewed drinks.
        </p>

        <div className="text-left text-gray-800 space-y-3 mb-8">
          <p><span className="font-semibold text-[#4A2C2A]">• Café History:</span> Started with a passion for coffee and hospitality.</p>
          <p><span className="font-semibold text-[#4A2C2A]">• Environment:</span> Warm, cozy, and perfect for conversations.</p>
          <p><span className="font-semibold text-[#4A2C2A]">• Quality:</span> Premium beans sourced from trusted farms.</p>
          <p><span className="font-semibold text-[#4A2C2A]">• Ingredients:</span> Only fresh and natural ingredients used.</p>
        </div>

        <Link
          href="/about"
          className="px-6 py-3 bg-[#4A2C2A] text-white rounded-full text-lg font-medium shadow hover:bg-[#351f1d] transition"
        >
          Know More
        </Link>

      </div>
    </div>
  );
}

export default AboutCafe;
