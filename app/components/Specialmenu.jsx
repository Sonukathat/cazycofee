function Specialmenu() {
  return (
    <div className="w-full py-12 px-6 bg-[#FFF3E4]">

      <h2 className="text-3xl font-bold text-[#4A2C2A] mb-6">
        Most Loved Items
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">

        <div className="min-w-[260px] bg-white rounded-2xl shadow-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
            className="w-full h-40 object-cover rounded-xl"
            alt=""
          />
          <h3 className="text-xl font-semibold text-[#4A2C2A] mt-3">Cappuccino</h3>
          <p className="text-gray-700 text-sm mt-1">
            Smooth espresso with steamed milk foam.
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-[#4A2C2A]">₹180</span>
            <button className="px-4 py-2 bg-[#4A2C2A] text-white rounded-full text-sm">
              Order
            </button>
          </div>
        </div>

        <div className="min-w-[260px] bg-white rounded-2xl shadow-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80"
            className="w-full h-40 object-cover rounded-xl"
            alt=""
          />
          <h3 className="text-xl font-semibold text-[#4A2C2A] mt-3">Cold Coffee</h3>
          <p className="text-gray-700 text-sm mt-1">
            Chilled creamy cold coffee blended perfectly.
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-[#4A2C2A]">₹150</span>
            <button className="px-4 py-2 bg-[#4A2C2A] text-white rounded-full text-sm">
              Order
            </button>
          </div>
        </div>

        <div className="min-w-[260px] bg-white rounded-2xl shadow-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80"
            className="w-full h-40 object-cover rounded-xl"
            alt=""
          />
          <h3 className="text-xl font-semibold text-[#4A2C2A] mt-3">Pizza</h3>
          <p className="text-gray-700 text-sm mt-1">
            Hot & cheesy pizza loaded with toppings.
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-[#4A2C2A]">₹220</span>
            <button className="px-4 py-2 bg-[#4A2C2A] text-white rounded-full text-sm">
              Order
            </button>
          </div>
        </div>

        <div className="min-w-[260px] bg-white rounded-2xl shadow-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
            className="w-full h-40 object-cover rounded-xl"
            alt=""
          />
          <h3 className="text-xl font-semibold text-[#4A2C2A] mt-3">Chocolate Shake</h3>
          <p className="text-gray-700 text-sm mt-1">
            Rich chocolate blended with fresh milk.
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-[#4A2C2A]">₹200</span>
            <button className="px-4 py-2 bg-[#4A2C2A] text-white rounded-full text-sm">
              Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Specialmenu;
