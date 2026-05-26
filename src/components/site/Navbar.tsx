import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vexxa-logo.png";
import { waLink } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "surface-glass shadow-card" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Vexxa" className="h-8 w-8" width={32} height={32} />
            <span className="font-display font-semibold tracking-tight text-lg">
              Vexxa<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Falar conosco
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 surface-glass rounded-2xl p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/40"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
