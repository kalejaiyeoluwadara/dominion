interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

