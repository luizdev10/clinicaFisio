import Container from "../components/Container";
import VisualPanel from "../components/VisualPanel";
import Reveal from "../components/Reveal";

const rows = [
  {
    eyebrow: "Nosso espaço",
    title: "Um ambiente pensado para o seu tratamento",
    description:
      "Salas equipadas e organizadas para cada etapa da reabilitação, do primeiro atendimento ao retorno completo ao movimento.",
    bullets: [
      "Espaços integrados para avaliação e treino funcional",
      "Equipamentos para reabilitação e fortalecimento",
    ],
    link: { href: "#localizacao", label: "Conhecer a estrutura" },
    motif: "leaf",
    tone: "sage",
    badge: "Ambiente integrado",
    imageFirst: true,
  },
  {
    eyebrow: "Acompanhamento",
    title: "Planos personalizados, com acompanhamento dedicado",
    description:
      "Nossos fisioterapeutas acompanham cada paciente de perto, ajustando o plano de tratamento conforme a sua evolução.",
    bullets: [
      "Atendimento individual, sempre com o mesmo profissional",
      "Reavaliações periódicas do progresso",
    ],
    link: { href: "#servicos", label: "Conhecer os tratamentos" },
    motif: "arc",
    tone: "forest",
    badge: "Equipe dedicada",
    imageFirst: false,
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-paper py-24">
      <Container className="flex flex-col gap-24">
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={row.imageFirst ? "relative lg:order-1" : "relative lg:order-2"}>
              <VisualPanel tone={row.tone} motif={row.motif} className="aspect-4/3" />
              <div className="absolute -bottom-5 right-6 rounded-2xl border border-ink/5 bg-card px-4 py-2.5 text-[13px] font-semibold text-ink shadow-sm">
                {row.badge}
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className={row.imageFirst ? "lg:order-2" : "lg:order-1"}
            >
              <span className="eyebrow mb-5 w-fit">
                <span className="eyebrow-dot" aria-hidden="true" />
                {row.eyebrow}
              </span>
              <h3 className="font-display text-[clamp(26px,3vw,34px)] font-semibold leading-[1.15] text-ink">
                {row.title}
              </h3>
              <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-ink-soft">
                {row.description}
              </p>

              <ul className="mt-7 flex flex-col gap-3.5">
                {row.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[15px] text-ink">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href={row.link.href}
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-forest"
              >
                {row.link.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          </div>
        ))}
      </Container>
    </section>
  );
}
