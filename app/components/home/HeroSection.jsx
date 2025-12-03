function HeroSection() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="text-center text-white max-w-2xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fresh Coffee. Happy Moments.
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Experience the best handcrafted coffee.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <button className="px-6 py-3 bg-[#D7B899] text-black rounded-full font-medium">
            View Menu
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-full font-medium">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
