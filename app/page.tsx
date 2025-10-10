import { Sparkles, Clock, Shield, Users, Scissors } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import SectionHeader from "@/components/home/SectionHeader";
import FeatureCard from "@/components/home/FeatureCard";
import ServiceCard from "@/components/home/ServiceCard";
import StepCard from "@/components/home/StepCard";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Sparkles,
    title: "Quality Service",
    description:
      "Professional cleaners using top-quality products and equipment for spotless results.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book at your convenience with same-day and emergency cleaning services available.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "All our staff are fully vetted, trained, and insured for your peace of mind.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Over 10 years of experience serving residential and commercial clients across the UK.",
  },
];

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Keep your home spotless with our regular or one-time house cleaning services. We handle everything from dusting to deep cleaning.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070",
    features: [
      { text: "Regular weekly or bi-weekly cleaning" },
      { text: "Deep cleaning services" },
      { text: "Kitchen and bathroom sanitization" },
    ],
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional office and commercial space cleaning to maintain a pristine work environment for your employees and clients.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    features: [
      { text: "Office and workspace cleaning" },
      { text: "Retail and restaurant cleaning" },
      { text: "After-hours service available" },
    ],
  },
  {
    title: "Specialized Cleaning",
    description:
      "From carpet cleaning to move-in/out services, we offer specialized cleaning solutions for every unique situation.",
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070",
    features: [
      { text: "Carpet and upholstery cleaning" },
      { text: "Move-in/move-out cleaning" },
      { text: "Window and gutter cleaning" },
    ],
  },
];

const steps = [
  {
    step: 1,
    title: "Book Online",
    description: "Choose your service and schedule online or call us directly.",
  },
  {
    step: 2,
    title: "Get a Quote",
    description: "Receive a transparent quote based on your specific needs.",
  },
  {
    step: 3,
    title: "We Clean",
    description: "Our professional team arrives on time and cleans thoroughly.",
  },
  {
    step: 4,
    title: "Enjoy Results",
    description: "Relax and enjoy your spotless, fresh-smelling space.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Dominion Cleaning?"
            description="We are committed to delivering exceptional cleaning services with attention to detail and customer satisfaction."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            description="Comprehensive cleaning solutions tailored to your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How It Works"
            description="Simple steps to get your space sparkling clean"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Book your cleaning service today and experience the Dominion difference. Professional, reliable, and affordable."
        primaryButtonText="Book Now"
        primaryButtonHref="/booking"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
