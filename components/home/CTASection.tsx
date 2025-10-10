import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primaryButtonHref}
            className="bg-white text-blue-900 px-12 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonHref}
            className="border-2 border-white text-white px-12 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

