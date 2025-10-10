"use client";

import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="tel:+441234567890"
                className="flex items-center text-sm gap-1 hover:text-blue-200"
              >
                <Phone size={16} />
                <span>+44 1234 567890</span>
              </Link>
              <Link
                href="mailto:info@dominioncleaning.co.uk"
                className="flex items-center text-sm gap-1 hover:text-blue-200"
              >
                <Mail size={14} />
                <span>info@dominioncleaning.co.uk</span>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Dominion Cleaning Agency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-900 font-medium"
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="block text-gray-700 hover:text-blue-900 font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-900 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
