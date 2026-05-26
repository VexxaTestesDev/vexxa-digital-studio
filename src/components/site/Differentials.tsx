import { Target, Smartphone, Layers, Zap, MessageSquare, TrendingUp } from "lucide-react";

const items = [
  { i: Target, t: "Orientado a resultado", d: "Cada decisão de desenvolvimento conecta-se a um objetivo de negócio." },
  { i: Smartphone, t: "Experiência moderna", d: "Interfaces responsivas, acessíveis e construídas para qualquer dispositivo." },
  { i: Layers, t: "Gestão organizada", d: "Roadmap claro, documentação e visibilidade total do projeto." },
  { i: Zap, t: "Performance e velocidade", d: "Otimização real de carregamento, SEO técnico e Core Web Vitals." },
  { i: MessageSquare, t: "Comunicação clara", d: "Atualizações constantes e linguagem direta — sem ruído técnico." },
  { i: TrendingUp, t: "Escalabilidade", d: "Arquitetura preparada para crescer junto com o seu produto." },
];

export function Differentials() {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Diferenciais</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            Tecnologia com responsabilidade e estratégia.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ i: Icon, t, d }, idx) => (
            <div
              key={t}
              className="reveal surface-glass rounded-2xl p-6 hover-lift"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
