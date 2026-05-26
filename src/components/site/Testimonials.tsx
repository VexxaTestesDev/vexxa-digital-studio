import { Quote } from "lucide-react";

const items = [
  {
    name: "Em breve",
    company: "Cliente Vexxa",
    text: "Espaço reservado para depoimentos de clientes. Em breve, histórias reais de projetos entregues com a Vexxa.",
  },
  {
    name: "Em breve",
    company: "Cliente Vexxa",
    text: "Aqui você encontrará avaliações que refletem nossa forma de trabalhar — clareza, técnica e resultado.",
  },
  {
    name: "Em breve",
    company: "Cliente Vexxa",
    text: "Estamos preparando este espaço com cuidado para apresentar experiências reais e mensuráveis.",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Depoimentos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            O que dizem sobre o nosso trabalho.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t, idx) => (
            <figure
              key={idx}
              className="reveal surface-glass rounded-2xl p-7 hover-lift flex flex-col"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Quote className="text-primary/60" size={26} />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
