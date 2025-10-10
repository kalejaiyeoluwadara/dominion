import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Home,
  Building2,
  Scissors,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070"
          alt="Professional cleaning service"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="text-xl mb-8">
              Top-tier cleaning for homes, offices, and commercial spaces
              throughout the UK. Experience the difference with Dominion
              Cleaning Agency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Dominion Cleaning?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are committed to delivering exceptional cleaning services with
              attention to detail and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Service</h3>
              <p className="text-gray-600">
                Professional cleaners using top-quality products and equipment
                for spotless results.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Book at your convenience with same-day and emergency cleaning
                services available.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Insured</h3>
              <p className="text-gray-600">
                All our staff are fully vetted, trained, and insured for your
                peace of mind.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Over 10 years of experience serving residential and commercial
                clients across the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070"
                  alt="Residential cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Residential Cleaning
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Keep your home spotless with our regular or one-time house
                  cleaning services. We handle everything from dusting to deep
                  cleaning.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Regular weekly or bi-weekly cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Deep cleaning services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Kitchen and bathroom sanitization</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Commercial Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="Commercial cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Commercial Cleaning
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional office and commercial space cleaning to maintain
                  a pristine work environment for your employees and clients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Office and workspace cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Retail and restaurant cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>After-hours service available</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Specialized Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070"
                  alt="Specialized cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Scissors className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Specialized Cleaning
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  From carpet cleaning to move-in/out services, we offer
                  specialized cleaning solutions for every unique situation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Carpet and upholstery cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Move-in/move-out cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Window and gutter cleaning</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Simple steps to get your space sparkling clean
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">
                Choose your service and schedule online or call us directly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
              <p className="text-gray-600">
                Receive a transparent quote based on your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We Clean</h3>
              <p className="text-gray-600">
                Our professional team arrives on time and cleans thoroughly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Results</h3>
              <p className="text-gray-600">
                Relax and enjoy your spotless, fresh-smelling space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and experience the Dominion
            difference. Professional, reliable, and affordable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
