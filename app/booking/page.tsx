"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    serviceType: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    date: "",
    time: "",
    frequency: "",
    additionalServices: [] as string[],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (service: string) => {
    setFormData({
      ...formData,
      additionalServices: formData.additionalServices.includes(service)
        ? formData.additionalServices.filter((s) => s !== service)
        : [...formData.additionalServices, service],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Here you would normally send the data to your backend
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Booking Request Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Dominion Cleaning Agency. We've received your
            booking request and will contact you within 24 hours to confirm your
            appointment and provide a detailed quote.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              Booking Reference: #{Math.floor(Math.random() * 100000)}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center bg-blue-900">
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070"
          alt="Book cleaning service"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Book Your Cleaning
            </h1>
            <p className="text-xl">
              Fill out the form below and we'll get back to you with a
              personalized quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+44 78026682398"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="SW1A 1AA"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">
                          Full Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="123 Main Street, London"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property & Service Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Property & Service Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Service Type *
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="residential">
                            Residential Cleaning
                          </option>
                          <option value="commercial">
                            Commercial Cleaning
                          </option>
                          <option value="deep">Deep Cleaning</option>
                          <option value="move">Move In/Out Cleaning</option>
                          <option value="carpet">Carpet Cleaning</option>
                          <option value="window">Window Cleaning</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Property Type *
                        </label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select property type</option>
                          <option value="apartment">Apartment</option>
                          <option value="house">House</option>
                          <option value="office">Office</option>
                          <option value="retail">Retail Space</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Number of Bedrooms
                        </label>
                        <select
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select</option>
                          <option value="1">1 Bedroom</option>
                          <option value="2">2 Bedrooms</option>
                          <option value="3">3 Bedrooms</option>
                          <option value="4">4 Bedrooms</option>
                          <option value="5+">5+ Bedrooms</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Number of Bathrooms
                        </label>
                        <select
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select</option>
                          <option value="1">1 Bathroom</option>
                          <option value="2">2 Bathrooms</option>
                          <option value="3">3 Bathrooms</option>
                          <option value="4+">4+ Bathrooms</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="8-10">8:00 AM - 10:00 AM</option>
                          <option value="10-12">10:00 AM - 12:00 PM</option>
                          <option value="12-14">12:00 PM - 2:00 PM</option>
                          <option value="14-16">2:00 PM - 4:00 PM</option>
                          <option value="16-18">4:00 PM - 6:00 PM</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">
                          Cleaning Frequency
                        </label>
                        <select
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select frequency</option>
                          <option value="one-time">One-time cleaning</option>
                          <option value="weekly">Weekly</option>
                          <option value="bi-weekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Additional Services (Optional)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Oven Cleaning",
                        "Fridge Cleaning",
                        "Inside Cabinets",
                        "Laundry",
                        "Ironing",
                        "Organize Closets",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.additionalServices.includes(
                              service
                            )}
                            onChange={() => handleCheckboxChange(service)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any specific requirements or areas you'd like us to focus on?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Request Your Free Quote
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our team is here to help you book the perfect cleaning
                  service.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+441234567890"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                  >
                    <Phone size={20} className="text-blue-600" />
                    <span>+44 78026682398</span>
                  </a>
                  <a
                    href="mailto:bookings@dominioncleaning.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                  >
                    <Mail size={20} className="text-blue-600" />
                    <span>bookings@dominioncleaning.co.uk</span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock
                      size={20}
                      className="text-blue-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <p className="font-semibold">Opening Hours</p>
                      <p className="text-sm">Mon - Sat: 8:00 AM - 8:00 PM</p>
                      <p className="text-sm">Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-sm">Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-sm">Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-sm">Satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-sm">
                      Fully insured & vetted staff
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-sm">
                      Eco-friendly products available
                    </span>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold">Service Areas</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We proudly serve London and surrounding areas including
                  Westminster, Camden, Islington, Kensington, Chelsea, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
