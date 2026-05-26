import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative surface-glass rounded-[2rem] p-10 sm:p-16 text-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 70%)",
            }}
          />
          <h2 className="text-3xl sm:text-5xl font-semibold leading-tight text-gradient">
            Tem uma ideia ou projeto em mente?
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
            Vamos transformar sua ideia em uma solução digital.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={waLink("Olá Vitor, gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:shadow-[0_0_40px_-5px_var(--color-primary)] transition-all"
            >
              Solicitar orçamento
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full surface-glass px-7 py-4 text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <MessageCircle size={16} />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
