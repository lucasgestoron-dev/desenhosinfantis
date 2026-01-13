import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border-2 border-primary/20 hover:border-primary transition-colors duration-300">
      <div className="mb-4 text-4xl text-primary">{icon}</div>
      <h4 className="text-lg font-fredoka font-bold text-foreground mb-2">{title}</h4>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
