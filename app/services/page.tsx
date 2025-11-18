import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Building2,
  Sparkles,
  MoveRight,
  Wind,
  Scissors,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Our Services - Dominion Cleaning Agency",
  description:
    "Professional cleaning services including residential, commercial, deep cleaning, and specialized cleaning services across the UK.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-blue-900">
        <Image
          src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070"
          alt="Professional cleaning services"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl">
              Comprehensive cleaning solutions for every need. Professional,
              reliable, and tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Residential Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070"
                  alt="Residential cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold">Residential Cleaning</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Transform your home into a spotless sanctuary. Our residential
                  cleaning services are designed to keep your living space
                  fresh, clean, and healthy for you and your family.
                </p>

                <h3 className="font-semibold text-lg mb-3">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Dusting all surfaces</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Vacuuming & mopping floors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Kitchen deep cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Bathroom sanitization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Bedroom organization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Trash removal</span>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
                >
                  Book This Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Commercial Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold">Commercial Cleaning</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Maintain a professional image with our comprehensive
                  commercial cleaning services. Perfect for offices, retail
                  spaces, restaurants, and more.
                </p>

                <h3 className="font-semibold text-lg mb-3">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Office workspace cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Restroom sanitization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Break room cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Floor care & maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Window cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>After-hours service</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold mb-2">Custom pricing available</p>
                  <p className="text-sm text-gray-600">
                    Daily, weekly, or monthly contracts • Flexible scheduling
                  </p>
                </div>

                <Link
                  href="/booking"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="relative h-80 md:h-auto order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="Commercial cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Deep Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070"
                  alt="Deep cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold">Deep Cleaning</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Our deep cleaning service goes beyond regular maintenance,
                  tackling every corner and crevice to eliminate built-up dirt,
                  grime, and bacteria.
                </p>

                <h3 className="font-semibold text-lg mb-3">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Behind appliances cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Grout & tile scrubbing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Cabinet cleaning (inside & out)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Baseboards & door frames</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Light fixtures & ceiling fans</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Detailed bathroom sanitization</span>
                  </div>
                </div>
                <Link
                  href="/booking"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
                >
                  Book This Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Domestic Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070"
                  alt="Domestic cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">Domestic Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional cleaning services for your home. Regular or
                one-time cleaning tailored to your schedule and needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Regular maintenance cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Customized service plans</span>
                </li>
              </ul>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Standard Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070"
                  alt="Standard cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">Standard Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Essential cleaning services covering all basic areas of your
                property. Perfect for regular maintenance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Surface cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Floor care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Bathroom & kitchen cleaning</span>
                </li>
              </ul>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* End of Tenancy Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                  alt="End of tenancy cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">End of Tenancy Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ensure your property is spotless for the next occupant or ready
                for your arrival. Comprehensive cleaning from top to bottom.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Complete property cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Appliance cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Deposit return guarantee</span>
                </li>
              </ul>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Warehouse Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                  alt="Warehouse cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">Warehouse Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized cleaning services for warehouses and industrial
                spaces. Keep your facility clean and safe for operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Floor sweeping & scrubbing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Equipment cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Waste management</span>
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mb-4">Custom Quote</p>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Nursing Home Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070"
                  alt="Nursing home cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">Nursing Home Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized cleaning services for healthcare facilities.
                Maintaining the highest standards of hygiene and sanitation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Sanitization & disinfection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Medical-grade cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">
                    Compliance with health standards
                  </span>
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mb-4">Custom Quote</p>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Housing Association-Communal Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070"
                  alt="Communal cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">
                  Housing Association-Communal Cleaning
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Regular cleaning services for shared spaces, corridors, and
                common areas in housing associations and apartment buildings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Corridor & hallway cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Lift & stairwell maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Reception & common areas</span>
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mb-4">Custom Quote</p>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* School Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
                  alt="School cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">School Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive cleaning services for educational facilities.
                Creating a clean and healthy environment for students and staff.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Classroom cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Restroom sanitization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Cafeteria & common areas</span>
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mb-4">Custom Quote</p>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Rug Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069"
                  alt="Rug cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">Rug Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional cleaning for rugs and carpets. Remove stains,
                odors, and allergens with our specialized rug cleaning service.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Deep steam cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Stain removal treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Odor elimination</span>
                </li>
              </ul>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Gardening */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070"
                  alt="Gardening service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">Gardening</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional gardening and landscaping services to keep your
                outdoor spaces beautiful and well-maintained.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Lawn mowing & trimming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Weed removal & pruning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-sm">Seasonal maintenance</span>
                </li>
              </ul>
              <Link
                href="/booking"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Need urgent cleaning? We offer same-day and emergency cleaning
                services when you need them most.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-gray-600">
                Not happy with our service? We'll come back and re-clean at no
                additional cost.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Experienced Professionals
              </h3>
              <p className="text-gray-600">
                All our cleaners are background-checked, trained, and
                experienced in providing top-quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book a Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and see why hundreds of customers trust
            Dominion Cleaning Agency.
          </p>
          <Link
            href="/booking"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Get Your Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
