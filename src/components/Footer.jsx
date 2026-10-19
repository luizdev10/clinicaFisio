import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { href: "#topo", label: "Início" },
  { href: "#diferenciais", label: "Por que a FisioCariri" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#agendamento", label: "Agendar" },
];

const socials = [
  {
    label: "Instagram da FisioCariri",
    href: "#",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook da FisioCariri",
    href: "#",
    path: (
      <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V12H8v3h2.5v6h3v-6H16l0.5-3h-3v-2c0-0.6 0.4-1 1-1z" />
    ),
  },
  {
    label: "WhatsApp da FisioCariri",
    href: "https://wa.me/5511999999999",
    external: true,
    path: <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.6L4 20Z" />,
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Informe um e-mail válido.");
      return;
    }
    setError("");
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <p className="text-[14px] text-paper/80">
        Inscrição recebida. Em breve você passa a receber nossas novidades.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <div className="flex items-stretch gap-2">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Seu e-mail"
          aria-label="Seu e-mail"
          maxLength={100}
          className="min-w-0 flex-1 rounded-full border border-paper/20 bg-transparent px-4 py-2.5 text-[14px] text-paper placeholder:text-paper/40 focus:border-paper/50"
        />
        <button
          type="submit"
          aria-label="Inscrever-se"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-forest-dark transition-colors duration-150 hover:bg-sage-light"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
      {error && <span className="text-[13px] text-terracotta">{error}</span>}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest-dark pb-8 pt-18 text-paper/70">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
        <div>
          <a href="#topo" className="inline-flex rounded-xl bg-paper p-1.5">
            <img
              src={`${import.meta.env.BASE_URL}logo-fisiocariri.jpg`}
              alt="FisioCariri — Fisioterapia em Geral e Pilates"
              className="h-12 w-12 rounded-lg"
            />
          </a>
          <p className="mt-3.5 max-w-[32ch] text-[15px]">
            Fisioterapia, pilates e estética avançada, com atendimento próximo e personalizado.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors duration-150 hover:border-paper/40"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                  {social.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] font-semibold text-paper">Navegação</h4>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[15px] transition-colors duration-150 hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] font-semibold text-paper">Contato</h4>
          <ul className="flex flex-col gap-2.5 text-[15px]">
            <li>
              <a href="tel:+551140028900" className="transition-colors duration-150 hover:text-paper">
                (11) 4002-8900
              </a>
            </li>
            <li>
              <a href="mailto:contato@fisiocariri.com.br" className="transition-colors duration-150 hover:text-paper">
                contato@fisiocariri.com.br
              </a>
            </li>
            <li>Av. Paulista, 1100 — SP</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] font-semibold text-paper">Novidades</h4>
          <p className="mb-4 text-[14px]">Receba dicas de movimento e cuidado postural.</p>
          <NewsletterForm />
        </div>
      </Container>

      <Container className="mt-14 flex flex-wrap justify-between gap-2 border-t border-paper/10 pt-6 text-[13px]">
        <span>© {new Date().getFullYear()} FisioCariri. Todos os direitos reservados.</span>
        <span>Responsável técnico: Dra. Ana Lima — CREFITO-3 00000-F</span>
      </Container>
    </footer>
  );
}
