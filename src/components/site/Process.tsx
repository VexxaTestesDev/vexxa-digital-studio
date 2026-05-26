const steps = [
  { n: "01", t: "Estratégia", d: "Entendemos o negócio, o público e os objetivos antes de qualquer linha de código." },
  { n: "02", t: "Planejamento", d: "Definimos escopo, arquitetura e o roadmap claro de entregas." },
  { n: "03", t: "Design", d: "Interfaces modernas, responsivas e focadas em conversão." },
  { n: "04", t: "Desenvolvimento", d: "Código limpo, performance e escalabilidade desde a primeira release." },
  { n: "05", t: "Entrega e Evolução", d: "Acompanhamento, melhorias contínuas e suporte estratégico." },
];

export function Process() {
  return (
    <section id="processo" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Processo</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            Como conduzimos cada projeto.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal relative surface-glass rounded-2xl p-6 hover-lift"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="size-9 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold flex items-center justify-center font-display">
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
