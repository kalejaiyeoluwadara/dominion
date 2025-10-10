import Image from "next/image";
import { Star, Quote, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Testimonials - Dominion Cleaning Agency",
  description:
    "Read what our satisfied customers have to say about our professional cleaning services.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "Westminster, London",
      rating: 5,
      service: "Residential Cleaning",
      date: "January 2025",
      text: "Absolutely brilliant service! The team from Dominion Cleaning transformed my home. They were professional, thorough, and paid attention to every detail. I particularly appreciated how they handled my antique furniture with care. Will definitely be using them regularly!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    },
    {
      name: "Michael Chen",
      location: "Canary Wharf, London",
      rating: 5,
      service: "Commercial Cleaning",
      date: "December 2024",
      text: "We've been using Dominion Cleaning for our office for over a year now. Their consistency and quality are unmatched. They work after hours so they never disrupt our business, and the office always looks spotless in the morning. Highly recommend for any business!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    },
    {
      name: "Emma Richards",
      location: "Kensington, London",
      rating: 5,
      service: "Deep Cleaning",
      date: "January 2025",
      text: "I hired Dominion for a deep clean before hosting a family gathering. They exceeded my expectations! Every corner of my house was spotless, from the grout in the bathrooms to the inside of my kitchen cabinets. The team was friendly and efficient. Worth every penny!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
    {
      name: "James Wilson",
      location: "Camden, London",
      rating: 5,
      service: "Move-Out Cleaning",
      date: "November 2024",
      text: "Moving house is stressful enough, but Dominion Cleaning made the cleaning part effortless. They did a fantastic move-out clean that helped me get my full deposit back. The landlord was impressed! Professional service from start to finish.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    },
    {
      name: "Priya Patel",
      location: "Islington, London",
      rating: 5,
      service: "Carpet Cleaning",
      date: "December 2024",
      text: "Our carpets looked brand new after Dominion's carpet cleaning service! They removed stains I thought were permanent. The technician was knowledgeable and explained the whole process. Great value for money and exceptional results.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    },
    {
      name: "Robert Anderson",
      location: "Chelsea, London",
      rating: 5,
      service: "Window Cleaning",
      date: "January 2025",
      text: "I have large windows throughout my house and they were looking quite grimy. Dominion's window cleaning service was excellent - streak-free, crystal clear results. The team was punctual and worked efficiently. My house has never looked brighter!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-blue-900">
        <Image
          src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070"
          alt="Happy customers"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl">
              Don't just take our word for it - hear from our satisfied
              customers about their experience with Dominion Cleaning Agency.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real feedback from real customers who trust us with their cleaning
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {testimonial.date}
                  </span>
                </div>

                <div className="relative">
                  <Quote
                    className="absolute -top-2 -left-2 text-blue-200"
                    size={32}
                  />
                  <p className="text-gray-700 relative z-10 pl-6">
                    {testimonial.text}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle size={16} />
                  <span>Verified Customer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Customers Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Common themes from our customer reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Attention to Detail</h3>
              <p className="text-gray-600">
                Customers consistently praise our thorough approach and
                meticulous cleaning standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Professional Staff</h3>
              <p className="text-gray-600">
                Our team is trained, vetted, and consistently recognized for
                their professionalism.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                On-time arrivals, consistent quality, and dependable service you
                can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                4.9/5.0
              </div>
              <div className="flex gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Insured & Bonded</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Happy Customers</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the same exceptional service that our clients rave about.
            Book your cleaning today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/booking"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Your Cleaning
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
