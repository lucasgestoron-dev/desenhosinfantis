import { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="text-xl font-fredoka font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );
}
