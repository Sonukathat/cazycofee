function ContactInfo() {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl space-y-4">

        <h2 className="text-3xl font-bold text-[#4A2C2A] text-center mb-4">
          Contact Details
        </h2>

        <p className="text-gray-700">
          📍 <strong>Address:</strong> 123 Coffee Street, Jaipur, Rajasthan
        </p>

        <p className="text-gray-700">
          📞 <strong>Phone:</strong> +91 98765 43210
        </p>

        <p className="text-gray-700">
          ✉ <strong>Email:</strong> support@cafe.com
        </p>

        <p className="text-gray-700">
          ⏰ <strong>Opening Hours:</strong> Mon – Sun: 8:00 AM – 10:00 PM
        </p>

      </div>
    </div>
  );
}

export default ContactInfo;
