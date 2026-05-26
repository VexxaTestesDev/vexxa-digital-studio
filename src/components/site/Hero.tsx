import { ArrowRight, MessageCircle, MouseIcon } from "lucide-react";
import heroImg from "@/assets/hero-composition.jpg";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-24 overflow-hidden">
      {/* decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full surface-glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Disponível para novos projetos
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-gradient">
            Transformamos ideias em experiências digitais que geram resultado.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Landing pages, sistemas e gestão de desenvolvimento com foco em
            performance, experiência e crescimento.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_var(--color-primary)]"
            >
              Ver Projetos
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full surface-glass px-6 py-3.5 text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden surface-glass p-1 animate-float">
            <img
              src={heroImg}
              alt="Composição de interfaces digitais desenvolvidas pela Vexxa"
              className="w-full h-auto rounded-[1.4rem]"
              width={1536}
              height={1280}
            />
          </div>
          <div className="absolute -inset-6 -z-10 rounded-[2rem] glow" />
        </div>
      </div>

      <div className="mt-20 flex justify-center text-muted-foreground/70">
        <div className="flex flex-col items-center gap-2">
          <MouseIcon size={18} />
          <div className="h-6 w-px bg-gradient-to-b from-primary/60 to-transparent animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
