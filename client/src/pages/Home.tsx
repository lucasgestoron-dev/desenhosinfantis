import { Button } from "@/components/ui/button";
import BenefitCard from "@/components/BenefitCard";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import {
  BookOpen,
  Lightbulb,
  Heart,
  Users,
  Download,
  Printer,
  Palette,
  Zap,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Para que idade é recomendado?",
      answer:
        "Os desenhos são ideais para crianças de 4 a 12 anos. Os traços são claros e bem definidos, adequados para diferentes níveis de habilidade artística.",
    },
    {
      question: "Quantos desenhos tem?",
      answer:
        "O eBook contém 20 desenhos exclusivos, cada um representando uma história bíblica diferente.",
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer:
        "Sim! Após a compra, você recebe o arquivo em PDF e pode imprimir quantas vezes desejar para uso pessoal.",
    },
    {
      question: "Qual é o formato do arquivo?",
      answer:
        "O arquivo é entregue em formato PDF de alta qualidade, pronto para imprimir em papel A4.",
    },
    {
      question: "Como recebo o arquivo?",
      answer:
        "Após a compra, você receberá um link de download imediato. O arquivo será enviado também por e-mail.",
    },
    {
      question: "Há garantia?",
      answer:
        "Sim! Oferecemos garantia de satisfação de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-fredoka font-bold text-foreground leading-tight">
                Desperte a Criatividade e a Fé das Crianças
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                20 desenhos bíblicos para colorir e imprimir em casa. Uma forma divertida e
                educativa de ensinar as histórias da Bíblia!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-accent hover:bg-accent/90 text-white font-fredoka font-bold text-lg px-8 py-6"
                >
                  Baixar Agora
                </Button>
                <Button
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-fredoka font-bold text-lg px-8 py-6"
                >
                  Ver Amostra
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src="/images/hero-banner.png"
                alt="Crianças colorindo com lápis coloridos"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-foreground mb-4">
              Por Que as Crianças Vão Amar?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Combine aprendizado espiritual, criatividade e momentos especiais em família
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon="📖"
              title="Aprendizado Espiritual"
              description="Conheça as histórias bíblicas clássicas de forma divertida e memorável. Cada desenho conta uma história importante da Bíblia, ajudando as crianças a compreender e internalizar valores espirituais."
            />
            <BenefitCard
              icon="🎨"
              title="Criatividade e Diversão"
              description="Estimule a criatividade e a coordenação motora. Colorir é uma atividade relaxante que desenvolve habilidades artísticas enquanto as crianças se divertem com desenhos lindos e bem detalhados."
            />
            <BenefitCard
              icon="❤️"
              title="Tempo em Família"
              description="Crie momentos especiais com seus filhos. Colorir juntos é uma oportunidade perfeita para conversar, compartilhar valores e criar memórias inesquecíveis em família."
            />
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-fredoka font-bold text-foreground mb-4">
              Veja Alguns Desenhos
            </h2>
            <p className="text-lg text-foreground/70">
              Cada página é cuidadosamente desenhada com traços claros e bem definidos, perfeita
              para crianças de todas as idades
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <img
              src="/images/coloring-samples.png"
              alt="Amostra de desenhos para colorir"
              className="w-full rounded-lg"
            />
            <p className="text-center text-foreground/70 mt-6 text-sm">
              Fácil de imprimir em casa no tamanho A4 • Qualidade de impressão profissional •
              Instruções incluídas
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-foreground mb-4">
              O Que Você Recebe?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen />}
              title="20 Desenhos Exclusivos"
              description="Histórias bíblicas clássicas e envolventes. Cada desenho é uma oportunidade de aprendizado."
            />
            <FeatureCard
              icon={<Printer />}
              title="Formato A4 para Imprimir"
              description="Pronto para imprimir em casa. Qualidade de impressão profissional. Instruções incluídas."
            />
            <FeatureCard
              icon={<Palette />}
              title="Traços Claros e Definidos"
              description="Ideal para crianças de 4 a 12 anos. Perfeito para desenvolver habilidades artísticas."
            />
            <FeatureCard
              icon={<Zap />}
              title="Acesso Imediato"
              description="Download instantâneo após a compra. Arquivo PDF de alta qualidade. Use quantas vezes quiser."
            />
          </div>
        </div>
      </section>

      {/* PRINTING INSTRUCTIONS SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-fredoka font-bold text-foreground mb-4">
                Como Imprimir em Casa?
              </h2>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-fredoka font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-foreground">Formato: A4</h4>
                  <p className="text-foreground/70">Ou selecione "Ajustar à página" nas opções de impressão</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-fredoka font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-foreground">Melhor resultado: "Tamanho real / 100%"</h4>
                  <p className="text-foreground/70">Garante que o desenho saia no tamanho correto</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-fredoka font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-foreground">Para economizar tinta: "Preto e branco / Rascunho"</h4>
                  <p className="text-foreground/70">Reduz o consumo de tinta sem perder qualidade</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-fredoka font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-foreground">Papel recomendado: Sulfite 90g ou 120g</h4>
                  <p className="text-foreground/70">Fica mais firme e é melhor para colorir</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-fredoka font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-foreground">Dica: Imprima 1 página de teste</h4>
                  <p className="text-foreground/70">Antes de imprimir tudo para verificar qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-fredoka font-bold text-foreground mb-4">
              O Que Pais Dizem?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Minha filha adorou! Ficou horas colorindo e aprendendo sobre a Bíblia. Recomendo!",
                author: "Maria S.",
              },
              {
                text: "Perfeito para ocupar as crianças de forma educativa. Excelente qualidade dos desenhos.",
                author: "João P.",
              },
              {
                text: "Excelente custo-benefício. Muito fácil de imprimir e os desenhos são lindos. Vale cada centavo!",
                author: "Ana C.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border-l-4 border-accent">
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-fredoka font-bold text-foreground">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-white">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-white/90">
              Baixe agora e comece a criar momentos especiais com suas crianças. Acesso imediato
              ao arquivo PDF.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-fredoka font-bold text-lg py-6">
                <Download className="w-5 h-5 mr-2" />
                Baixar Agora - R$ 29,90
              </Button>
              <p className="text-white/80 text-sm">
                ✓ Satisfação garantida ou seu dinheiro de volta em 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-fredoka font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors"
                >
                  <h3 className="font-fredoka font-bold text-foreground text-left">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-foreground/80">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-fredoka font-bold mb-4">Livro de Colorir Bíblico</h4>
              <p className="text-white/70">
                Desenhos bíblicos para crianças aprenderem e se divertirem colorindo.
              </p>
            </div>
            <div>
              <h4 className="font-fredoka font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-fredoka font-bold mb-4">Contato</h4>
              <p className="text-white/70">Email: contato@colorirbiblico.com</p>
              <p className="text-white/70">Whatsapp: (11) 9999-9999</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 Livro de Colorir Bíblico. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
