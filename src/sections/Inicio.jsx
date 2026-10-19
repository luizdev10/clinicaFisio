import Container from "../components/Container";
import Button from "../components/Button";
import VisualPanel from "../components/VisualPanel";
import Reveal from "../components/Reveal";

const stats = [
  { value: "12 anos", label: "de atuação clínica" },
  { value: "3.400+", label: "pacientes atendidos" },
  { value: "94%", label: "concluem o tratamento" },
];

export default function Inicio() {
  return (
    <section id="topo" className="overflow-hidden bg-forest py-20 sm:py-24">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow rise-in">
            <span className="eyebrow-dot" aria-hidden="true" />
            Fisioterapia individualizada
          </span>

          <h1
            className="rise-in mt-6 font-display text-[clamp(36px,5vw,58px)] font-semibold leading-[1.08] tracking-[-0.01em] text-paper"
            style={{ animationDelay: "90ms" }}
          >
            Alívio da dor, retorno ao movimento.
          </h1>
          <p
            className="rise-in mt-3 font-display text-2xl italic text-sage-light/90"
            style={{ animationDelay: "160ms" }}
          >
            Equilíbrio do corpo, no seu tempo.
          </p>

          <p
            className="rise-in mt-6 max-w-[46ch] text-lg leading-relaxed text-paper/75"
            style={{ animationDelay: "220ms" }}
          >
            Avaliação funcional completa e acompanhamento direto do mesmo
            fisioterapeuta do início ao fim do tratamento.
          </p>

          <div
            className="rise-in mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "280ms" }}
          >
            <Button as="a" href="#agendamento" variant="inverse">
              Agendar avaliação
            </Button>
            <Button
              as="a"
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="border-paper/25 text-paper hover:border-paper/60"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        <Reveal delay={200} className="relative">
          <VisualPanel
            tone="sage"
            motif="pulse"
            className="aspect-4/5 lg:aspect-4/5 max-lg:aspect-16/10"
          />

          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-ink/5 bg-card px-4 py-3 shadow-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span className="text-[13px] font-medium leading-tight text-ink">
              Avaliação funcional
              <br />
              reconhecida
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
