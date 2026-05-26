import { ArrowUpRight } from "lucide-react";
import landing from "@/assets/project-landing.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import management from "@/assets/project-management.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import crm from "@/assets/project-crm.jpg";
import restaurant from "@/assets/project-restaurant.jpg";

type Project = {
  title: string;
  category: "Landing Pages" | "Sistemas" | "Gestão de Desenvolvimento";
  description: string;
  tech: string[];
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Plataforma Analytics Pro",
    category: "Sistemas",
    description: "Dashboard de métricas em tempo real para times comerciais.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: dashboard,
    featured: true,
  },
  {
    title: "Landing Capta+",
    category: "Landing Pages",
    description: "Página de alta conversão para captação de leads B2B.",
    tech: ["Next.js", "Tailwind", "Analytics"],
    image: landing,
    featured: true,
  },
  {
    title: "Coordenação Produto SaaS",
    category: "Gestão de Desenvolvimento",
    description: "Liderança técnica e organização de squad em projeto SaaS.",
    tech: ["Scrum", "Linear", "Discovery"],
    image: management,
  },
  {
    title: "App Loja Conecta",
    category: "Sistemas",
    description: "Aplicativo mobile de e-commerce com checkout otimizado.",
    tech: ["React Native", "Stripe"],
    image: ecommerce,
  },
  {
    title: "CRM Pipeline360",
    category: "Sistemas",
    description: "Gestão de funil de vendas com automações inteligentes.",
    tech: ["TypeScript", "Supabase"],
    image: crm,
  },
  {
    title: "Restaurante Atelier",
    category: "Landing Pages",
    description: "Site institucional com sistema de reservas integrado.",
    tech: ["Astro", "Tailwind"],
    image: restaurant,
  },
];

const filters = ["Todos", "Landing Pages", "Sistemas", "Gestão de Desenvolvimento"] as const;

import { useState } from "react";

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const list = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              Portfólio
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight max-w-xl">
              Projetos selecionados que entregaram resultado.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all border ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "surface-glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[minmax(0,auto)]">
          {list.map((p, idx) => {
            const span = p.featured ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <article
                key={p.title}
                className={`reveal group ${span} surface-glass rounded-3xl overflow-hidden hover-lift`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-wider text-primary border border-primary/20">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-muted-foreground rounded-full border border-border px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
