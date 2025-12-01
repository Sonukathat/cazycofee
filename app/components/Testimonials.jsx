const reviews = [
  {
    name: "Riya Sharma",
    photo:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "The coffee here is amazing! The ambiance is super cozy and relaxing. Highly recommended!"
  },
  {
    name: "Amit Verma",
    photo:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Best cappuccino I’ve ever had. Fresh, flavorful, and served perfectly every time."
  },
  {
    name: "Sneha Patel",
    photo:
      "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    text: "Loved the cold coffee and the desserts! The staff is friendly and the café vibe is perfect."
  }
];

function Testimonials() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">
      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.photo}
                className="w-14 h-14 rounded-full object-cover"
                alt={item.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-[#4A2C2A]">
                  {item.name}
                </h3>

                <div className="text-yellow-500">
                  {"⭐".repeat(item.rating)}
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Testimonials;
