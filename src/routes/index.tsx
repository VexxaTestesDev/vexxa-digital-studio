import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { TechStack } from "@/components/site/TechStack";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vexxa Desenvolvimento — Landing pages, sistemas e gestão digital" },
      {
        name: "description",
        content:
          "Criação e gestão de projetos digitais: landing pages, sistemas sob medida e coordenação de produtos com foco em performance e crescimento.",
      },
      { property: "og:title", content: "Vexxa Desenvolvimento" },
      {
        property: "og:description",
        content:
          "Transformamos ideias em experiências digitais que geram resultado. Landing pages, sistemas e gestão de desenvolvimento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vexxa Desenvolvimento",
          founder: { "@type": "Person", name: "Vitor Hugo Thomaz Leal" },
          description:
            "Criação e gestão de projetos digitais: landing pages, sistemas e gestão de desenvolvimento.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="dark min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Process />
        <TechStack />
        <Differentials />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
