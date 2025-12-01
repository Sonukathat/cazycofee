function CafeEnvironment() {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?auto=format&fit=crop&w=900&q=80"
          className="w-full rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#4A2C2A] mb-4">
            Cozy & Peaceful Environment
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you're working, reading, or enjoying a conversation,
            our café offers the perfect environment. Soft music, ambient lighting,
            and comfortable seating make every visit memorable.
          </p>
        </div>

      </div>
    </div>
  );
}

export default CafeEnvironment;
