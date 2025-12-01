import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#4A2C2A] to-[#2E1A18] text-white pt-14 pb-6 px-6">

      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Café Delight</h2>
        <p className="text-white/70 max-w-xl mx-auto">
          Brewed with passion. Served with love.  
          Enjoy the finest coffee blends and cozy vibes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-12">

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-lg font-semibold">Quick Links</p>
          <div className="flex gap-6 text-white/80">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex gap-5">
            <a className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition text-xl">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition text-xl">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-lg font-semibold">Support</p>
          <p className="text-white/80">support@cafe.com</p>
          <p className="text-white/80">+91 98765 43210</p>
        </div>

      </div>

      <div className="text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Café Delight — All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
