import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#4A2C2A] text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#D7B899]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#D7B899]">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <p>Email: support@cafeshop.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="text-center mt-10 text-sm text-white/80">
        © {new Date().getFullYear()} Cafe Shop. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
