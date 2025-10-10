import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: ServiceFeature[];
  icon?: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  image,
  features,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative h-64">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {Icon && <Icon className="text-blue-600" size={28} />}
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle
                className="text-green-500 flex-shrink-0 mt-1"
                size={18}
              />
              <span>{feature.text}</span>
            </li>
          ))}
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
  );
}

