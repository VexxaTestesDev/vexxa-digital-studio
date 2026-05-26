const stats = [
  { value: "+40", label: "Projetos entregues" },
  { value: "+15", label: "Sistemas desenvolvidos" },
  { value: "+25", label: "Landing Pages criadas" },
  { value: "+30", label: "Clientes atendidos" },
];

export function About() {
  return (
    <section id="sobre" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              Sobre a Vexxa
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
              Desenvolvimento e gestão de projetos digitais sob medida.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A Vexxa Desenvolvimento atua na criação e condução de projetos
              digitais, desenvolvendo landing pages, sistemas e soluções sob
              medida para empresas que desejam crescer com tecnologia.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="surface-glass rounded-2xl p-5 hover-lift"
                >
                  <div className="text-3xl font-display font-semibold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="surface-glass rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-5">
                <div
                  aria-hidden
                  className="size-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center text-2xl font-display font-semibold text-primary"
                >
                  VH
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Fundador
                  </div>
                  <div className="mt-1 text-xl font-semibold">
                    Vitor Hugo Thomaz Leal
                  </div>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Especialista em desenvolvimento e gestão de projetos digitais,
                atuando desde a estratégia até a entrega final, conectando
                tecnologia, experiência e resultado.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {["Estratégia", "Desenvolvimento", "Gestão"].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-border bg-surface/60 px-3 py-3 text-xs text-muted-foreground"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
