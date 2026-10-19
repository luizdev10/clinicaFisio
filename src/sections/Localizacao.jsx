import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";



const rows = [
  {
    label: "Endereço",
    lines: "R. Padre Cícero, 853 - Centro, Juazeiro do Norte - CE",
  },
  {
    label: "Como chegar",
    lines: "Basta seguir seguir a R. Padre Cícero",
  },
  {
    label: "Estacionamento",
    lines: "Conveniado no edifício, com desconto para pacientes",
  },
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-sage-light py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Localização"
            title="Onde estamos."
            description="A duas quadras do metrô, com vagas de estacionamento conveniadas no prédio."
            className="mb-10"
          />

          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <div key={row.label} className="rounded-2xl border border-ink/8 bg-card p-5">
                <div className="text-[13px] text-ink-soft">{row.label}</div>
                <p className="mt-1.5 text-[17px] font-semibold text-ink">{row.lines}</p>
              </div>
            ))}
          </div>

          <Button
            as="a"
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(rows[0].lines)}`}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="mt-6 w-fit"
          >
            Como chegar
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
        </Reveal>

        <Reveal delay={150} className="relative aspect-4/3 overflow-hidden rounded-3xl border border-ink/8">
          <iframe
            title="Mapa de localização da FisioCariri"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.619308859731!2d-39.3201426!3d-7.205834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a178aa92aabde9%3A0x61f85dd846ea0419!2sFisiocariri+-+Fisioterapia+em+Geral+Pilates!5e0!3m2!1spt-BR!2sbr!4v1763519665920!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </Reveal>
      </Container>
    </section>
  );
}
