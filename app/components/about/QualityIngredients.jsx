function QualityIngredients() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold text-[#4A2C2A] mb-4">
            Quality Ingredients, Better Taste
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            We use premium coffee beans, fresh milk, natural flavors,
            and carefully selected ingredients to ensure every sip is rich,
            smooth, and delicious.
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed text-lg">
            No preservatives. No artificial additives. Just pure goodness.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
          className="w-full rounded-2xl shadow-xl"
        />

      </div>
    </div>
  );
}

export default QualityIngredients;
