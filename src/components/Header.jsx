import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const links = [
  { href: "#topo", label: "Início" },
  { href: "#diferenciais", label: "Por que a FisioCariri" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#topo" className="flex items-center">
          <img
            src="/logo-fisiocariri.jpg"
            alt="FisioCariri — Fisioterapia em Geral e Pilates"
            className="h-14 w-14 mix-blend-multiply"
          />
        </a>

        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-ink-soft transition-colors duration-150 hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button as="a" href="#agendamento" variant="primary" className="hidden lg:inline-flex">
            Agendar avaliação
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/10 lg:hidden"
          >
            <span
              className={`block h-[2px] w-4 bg-ink transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-4 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-4 bg-ink transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </Container>

      <div
        className={`fixed inset-x-0 top-20 border-b border-rule bg-paper transition-all duration-200 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <Container className="flex flex-col py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-rule py-3.5 text-[15px] font-medium text-ink-soft"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="#agendamento" variant="primary" className="my-4 justify-center" onClick={() => setOpen(false)}>
            Agendar avaliação
          </Button>
        </Container>
      </div>
    </header>
  );
}
