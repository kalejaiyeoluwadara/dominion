import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070"
        alt="Professional cleaning service"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-2xl md:block flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-start text-center md:text-6xl font-bold mb-6">
            Professional Cleaning Services You Can Trust
          </h1>
          <p className="text-xl mb-8 text-center md:text-start">
            Top-tier cleaning for homes, offices, and commercial spaces
            throughout the UK. Experience the difference with Dominion Cleaning
            Agency.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/booking"
              className="bg-blue-600 text-white px-8 md:px-12 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-900 px-8 md:px-12 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

