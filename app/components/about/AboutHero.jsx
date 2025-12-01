function AboutHero() {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/50 px-10 py-8 rounded-2xl backdrop-blur-sm text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Our Café
        </h1>
        <p className="text-white/80 mt-3 text-lg">
          Brewing happiness since 2015
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
