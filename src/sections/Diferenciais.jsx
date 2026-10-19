import Container from "../components/Container";
import Reveal from "../components/Reveal";

const items = [
  {
    title: "Horários flexíveis",
    description:
      "Agenda pensada para a sua rotina, com horários pela manhã, à tarde e aos sábados.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </>
    ),
  },
  {
    title: "Atendimento individualizado",
    description:
      "Cada corpo responde de um jeito. O plano de tratamento é montado para o seu caso, não para um protocolo padrão.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </>
    ),
  },
  {
    title: "Equipe especializada",
    description:
      "Fisioterapeutas com formação contínua, dedicados a acompanhar você do início ao fim do tratamento.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Abordagem completa",
    description:
      "Cuidamos da recuperação além do alívio imediato: postura, força e prevenção de novas lesões.",
    icon: (
      <>
        <path d="M20.8 8.6c0 4.9-8.8 10.4-8.8 10.4S3.2 13.5 3.2 8.6a4.6 4.6 0 0 1 8.4-2.6 4.6 4.6 0 0 1 9.2 2.6Z" />
      </>
    ),
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-sage-light py-24">
      <Container>
        <Reveal as="div" className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[460px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.12] text-ink">
            Por que escolher a FisioCariri?
          </h2>
          <p className="max-w-[46ch] text-base text-ink-soft">
            Nosso compromisso vai além do alívio da dor nas sessões. Veja o que
            torna o acompanhamento na FisioCariri diferente.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const highlighted = index === 0;
            return (
              <Reveal
                key={item.title}
                delay={index * 90}
                className={`flex flex-col rounded-3xl p-7 ${highlighted
                    ? "bg-forest text-paper"
                    : "border border-ink/8 bg-card text-ink"
                  }`}
              >
                <span
                  className={`mb-6 flex h-11 w-11 items-center justify-center rounded-full ${highlighted ? "bg-paper/10 text-paper" : "bg-sage-light text-forest"
                    }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {item.icon}
                  </svg>
                </span>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p
                  className={`mt-2.5 text-[15px] leading-relaxed ${highlighted ? "text-paper/70" : "text-ink-soft"
                    }`}
                >
                  {item.description}
                </p>
                <a
                  href="#agendamento"
                  className={`mt-auto inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${highlighted
                      ? "bg-paper text-forest hover:bg-sage-light"
                      : "bg-sage-light text-forest hover:bg-forest hover:text-paper"
                    }`}
                >
                  Agendar
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
