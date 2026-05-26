import { Cpu } from "lucide-react";

const tools = [
  { name: "React", tag: "Frontend" },
  { name: "TypeScript", tag: "Tipagem" },
  { name: "Tailwind CSS", tag: "Styling" },
  { name: "Figma", tag: "Design" },
  { name: "Node.js", tag: "Backend" },
  { name: "Vite", tag: "Build" },
  { name: "Git", tag: "Versionamento" },
  { name: "IA & Automação", tag: "Produtividade" },
];

export function TechStack() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              Stack Tecnológico
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
              Ferramentas modernas que aceleram entregas.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Utilizamos um ecossistema de tecnologias de ponta — combinadas com
              processos inteligentes e, quando aplicável, automação assistida por IA —
              para reduzir prazos sem abrir mão da qualidade, da escalabilidade ou da
              experiência do usuário.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Menos retrabalho",
                "Maior padronização",
                "Entregas mais rápidas",
                "Código de qualidade",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="surface-glass rounded-2xl p-4 text-center hover-lift"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="mx-auto size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Cpu size={18} />
                  </div>
                  <div className="mt-3 text-sm font-medium">{tool.name}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground uppercase tracking-wider">
                    {tool.tag}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 surface-glass rounded-2xl p-5 flex items-center gap-4">
              <div className="size-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Qualidade mantida em cada entrega</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Velocidade não significa comprometer padrões — testamos, revisamos e validamos cada release.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
