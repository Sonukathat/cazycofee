function OfferBanner() {
  return (
    <div
      className="w-full py-14 px-6 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/40 backdrop-blur-sm px-8 py-10 rounded-2xl text-center text-white max-w-xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get 20% OFF on Cold Coffee Today!
        </h2>

        <p className="text-lg md:text-xl mb-6">
          Buy 1 Get 1 Free – Cappuccino
        </p>

        <button className="px-6 py-3 bg-[#D7B899] text-black rounded-full font-medium text-lg shadow">
          Grab Offer
        </button>

      </div>
    </div>
  );
}

export default OfferBanner;
