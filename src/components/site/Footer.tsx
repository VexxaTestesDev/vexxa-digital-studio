import { Instagram, Linkedin, Github } from "lucide-react";
import logo from "@/assets/vexxa-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Vexxa" className="h-8 w-8" width={32} height={32} />
            <span className="font-display font-semibold tracking-tight text-lg">
              Vexxa<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Criação e gestão de produtos digitais com foco em performance e
            crescimento.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Navegação
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#top", "Início"],
              ["#sobre", "Sobre"],
              ["#projetos", "Projetos"],
              ["#faq", "Contato"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contato
          </div>
          <div className="mt-4 text-sm">
            <div className="font-medium">Vitor Hugo Thomaz Leal</div>
            <div className="text-muted-foreground">Vexxa Desenvolvimento</div>
          </div>
          <div className="mt-5 flex gap-2">
            {[Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="size-9 rounded-full surface-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Vexxa Desenvolvimento. Todos os direitos reservados.</div>
        <div>Feito com cuidado em cada detalhe.</div>
      </div>
    </footer>
  );
}
