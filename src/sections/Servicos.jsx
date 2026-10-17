import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const mainServices = [
  {
    title: "Fisioterapia em Geral",
    description:
      "Avaliação funcional completa e tratamento individualizado para dores, lesões e recuperação de movimento.",
    icon: (
      <>
        <path d="M4 20 L20 20" />
        <path d="M4 20 L15 6" />
        <path d="M12 20a8 8 0 0 1 3.4-11.7" />
      </>
    ),
  },
  {
    title: "Pilates",
    description:
      "Fortalecimento, postura e estabilização em aulas individuais ou em grupo, com acompanhamento próximo.",
    icon: <path d="M4 12c2-4 4-4 6 0s4 4 6 0 4-4 4 0" />,
  },
];

const estetica = [
  "Harmonização Facial",
  "Bioestimuladores",
  "Preenchimentos",
  "Fotodepilação",
  "Limpeza de pele",
  "Microagulhamento",
  "Acupuntura",
  "Peeling",
  "Botox",
  "e outros",
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-paper py-24">
      <Container>
        <Reveal className="mb-14">
          <SectionHeading
            eyebrow="Tratamentos"
            title="Fisioterapia, pilates e estética avançada em um só lugar."
            description="Cada plano parte de um diagnóstico funcional. Os serviços abaixo se combinam conforme a necessidade de cada caso."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {mainServices.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 90}
              className="rounded-3xl border border-ink/8 bg-card p-7 transition-colors duration-150 hover:border-forest/25"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-forest">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {service.icon}
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180} className="mt-6 rounded-3xl border border-ink/8 bg-card p-7 sm:p-9">
          <h3 className="font-display text-lg font-semibold text-ink">
            Estética Avançada
          </h3>
          <p className="mt-2 max-w-[56ch] text-[15px] leading-relaxed text-ink-soft">
            Procedimentos de harmonização facial e cuidados estéticos, realizados com avaliação prévia.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {estetica.map((item) => (
              <li
                key={item}
                className="rounded-full bg-sage-light px-4 py-2 text-[14px] font-medium text-forest"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
