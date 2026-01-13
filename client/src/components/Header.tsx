import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" />
          <span className="font-fredoka font-bold text-xl text-foreground">
            Colorir Bíblico
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-foreground/70 hover:text-foreground transition-colors font-poppins"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-foreground/70 hover:text-foreground transition-colors font-poppins"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-foreground/70 hover:text-foreground transition-colors font-poppins"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-foreground/70 hover:text-foreground transition-colors font-poppins"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection("cta")}
          className="bg-accent hover:bg-accent/90 text-white font-fredoka font-bold"
        >
          Baixar Agora
        </Button>
      </div>
    </header>
  );
}
