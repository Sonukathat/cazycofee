function VisitUs() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">

      <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-10">
        Visit Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4315495833607!2d75.78727097526325!3d26.86003556281243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50b4bbd2f9f%3A0x2590e1f5a1f6ad4c!2sCafe!5e0!3m2!1sen!2sin!4v1712848578034!5m2!1sen!2sin"
          className="w-full h-80 rounded-2xl shadow-xl"
          loading="lazy"
        ></iframe>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">

          <h3 className="text-2xl font-semibold text-[#4A2C2A]">
            Our Café Location
          </h3>

          <p className="text-gray-700">
            📍 123 Coffee Street, Jaipur, Rajasthan, India
          </p>

          <p className="text-gray-700">
            ⏰ Opening Hours:  
            <br /> Monday – Sunday: 8:00 AM – 10:00 PM
          </p>

          <p className="text-gray-700">
            📞 Contact: +91 98765 43210
          </p>

          <p className="text-gray-700">
            ✉ Email: info@cafeshop.com
          </p>

        </div>

      </div>

    </div>
  );
}

export default VisitUs;
