import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const rows = [
  {
    label: "Endereço",
    lines: ["Avenida Paulista, 1100 — Conjunto 42", "Bela Vista, São Paulo – SP · CEP 01310-100"],
  },
  {
    label: "Como chegar",
    lines: ["Metrô Trianon-Masp (linha verde), saída Alameda Santos"],
  },
  {
    label: "Estacionamento",
    lines: ["Conveniado no edifício, com desconto para pacientes"],
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
                {row.lines.map((line, index) => (
                  <p
                    key={line}
                    className={
                      index === 0
                        ? "mt-1.5 text-[17px] font-semibold text-ink"
                        : "mt-0.5 text-[15px] text-ink-soft"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative aspect-4/3 overflow-hidden rounded-3xl border border-ink/8">
          <iframe
            title="Mapa de localização da FisioCariri"
            src="https://www.google.com/maps?q=Avenida+Paulista+1100,+S%C3%A3o+Paulo&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </Reveal>
      </Container>
    </section>
  );
}
