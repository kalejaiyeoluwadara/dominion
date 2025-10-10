import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Dominion Cleaning Agency
            </h3>
            <p className="mb-4">
              Your trusted cleaning experts in the UK. We provide professional,
              reliable, and affordable cleaning services for homes and
              businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-blue-400 transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-blue-400 transition"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move In/Out Cleaning</li>
              <li>Carpet Cleaning</li>
              <li>Window Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>12 Regent Street, London SW1Y 4PE, UK</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+441234567890" className="hover:text-blue-400">
                  +44 1234 567890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <a
                  href="mailto:info@dominioncleaning.co.uk"
                  className="hover:text-blue-400"
                >
                  info@dominioncleaning.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Dominion Cleaning Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
