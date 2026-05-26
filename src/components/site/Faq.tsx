import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês desenvolvem apenas landing pages?",
    a: "Não. Além de landing pages de alta conversão, criamos sistemas web sob medida, dashboards, aplicativos e plataformas completas.",
  },
  {
    q: "Também gerenciam projetos?",
    a: "Sim. Atuamos na gestão e coordenação de projetos digitais, conduzindo squads e organizando entregas do início ao fim.",
  },
  {
    q: "Trabalham com sistemas personalizados?",
    a: "Sim. Desenvolvemos soluções totalmente sob medida, com arquitetura escalável e foco no negócio do cliente.",
  },
  {
    q: "Como funciona o processo?",
    a: "Seguimos cinco etapas: Estratégia, Planejamento, Design, Desenvolvimento e Entrega/Evolução, com comunicação constante.",
  },
  {
    q: "Qual o prazo médio?",
    a: "Landing pages: 1 a 3 semanas. Sistemas completos: a partir de 6 semanas. O prazo final é definido após o discovery.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-28 relative">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            Perguntas frequentes.
          </h2>
        </div>

        <div className="mt-12 reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="surface-glass rounded-2xl px-5 border-0"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
