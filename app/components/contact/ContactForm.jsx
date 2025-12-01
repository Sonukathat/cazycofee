function ContactForm() {
  return (
    <div className="w-full py-16 px-6 bg-[#FFF3E4]">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-[#4A2C2A] mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-xl outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-xl outline-none"
          ></textarea>

          <button className="px-6 py-3 bg-[#4A2C2A] text-white rounded-full font-medium text-lg shadow w-full">
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactForm;
