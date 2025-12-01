const items = [
  {
    name: "Cappuccino",
    desc: "Smooth espresso with steamed milk foam.",
    price: "₹180",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Cold Coffee",
    desc: "Chilled creamy cold coffee blended perfectly.",
    price: "₹150",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Pizza",
    desc: "Hot & cheesy pizza loaded with toppings.",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Chocolate Shake",
    desc: "Rich chocolate blended with fresh milk.",
    price: "₹200",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Latte",
    desc: "Creamy latte with smooth espresso.",
    price: "₹170",
    img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Garlic Bread",
    desc: "Crispy garlic bread with butter.",
    price: "₹120",
    img: "https://images.unsplash.com/photo-1604908812734-5d1e1c5c7010?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mocha",
    desc: "Chocolate-flavored coffee drink.",
    price: "₹190",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Pasta",
    desc: "Creamy white sauce pasta.",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1604908553828-4b46bcdc9d21?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Strawberry Shake",
    desc: "Fresh strawberry shake with ice cream.",
    price: "₹180",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80"
  }
];

function Specialmenu() {
  return (
    <div className="w-full py-12 px-6 bg-[#FFF3E4]">

      <h2 className="text-3xl font-bold text-[#4A2C2A] mb-10 text-center">
        Most Loved Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-5"
          >
            <img
              src={item.img}
              className="w-full h-48 object-cover rounded-xl mb-4"
              alt={item.name}
            />

            <h3 className="text-xl font-semibold text-[#4A2C2A]">
              {item.name}
            </h3>

            <p className="text-gray-700 text-sm mt-1">{item.desc}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-[#4A2C2A]">{item.price}</span>

              <button className="px-4 py-2 bg-[#4A2C2A] text-white rounded-full text-sm">
                Order
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Specialmenu;
