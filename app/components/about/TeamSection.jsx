const team = [
  {
    name: "Arjun Mehta",
    role: "Head Barista",
    img: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Senior Barista",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Kunal Singh",
    role: "Coffee Expert",
    img: "https://randomuser.me/api/portraits/men/28.jpg"
  }
];

function TeamSection() {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Meet Our Baristas
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {team.map((t, i) => (
          <div key={i} className="text-center bg-white p-6 rounded-2xl shadow-xl">
            <img
              src={t.img}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#4A2C2A]">{t.name}</h3>
            <p className="text-gray-700">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
