import { useRef, useState } from "react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const contactItems = [
  {
    label: "E-mail",
    value: "contato@fisiocariri.com.br",
    href: "mailto:contato@fisiocariri.com.br",
  },
  {
    label: "Telefone / WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
    external: true,
  },
  {
    label: "Endereço",
    value: "R. Padre Cícero, 853 - Centro, Juazeiro do Norte - CE",
  },
  {
    label: "Horário",
    value: "Seg a sex, 7h–20h · Sáb, 8h–12h",
  },
];

const dorOptions = [
  { value: "", label: "Selecione uma opção" },
  { value: "cervical", label: "Coluna cervical / pescoço" },
  { value: "lombar", label: "Coluna lombar" },
  { value: "ombro", label: "Ombro" },
  { value: "cotovelo", label: "Cotovelo" },
  { value: "punho", label: "Punho / mão" },
  { value: "quadril", label: "Quadril" },
  { value: "joelho", label: "Joelho" },
  { value: "tornozelo", label: "Tornozelo / pé" },
  { value: "outro", label: "Outro" },
];

const initialForm = {
  nome: "",
  idade: "",
  telefone: "",
  localDor: "",
  localDorOutro: "",
  causaDor: "",
};

const errorMessages = {
  nome: "Informe seu nome completo.",
  idade: "Informe uma idade válida (0–120).",
  telefone: "Informe um telefone com DDD.",
  localDor: "Selecione o local da dor.",
  localDorOutro: "Descreva o local da dor.",
  causaDor: "Descreva brevemente a causa ou o motivo da dor.",
};

function getRequiredFields(form) {
  const fields = ["nome", "idade", "telefone", "localDor", "causaDor"];
  if (form.localDor === "outro") fields.push("localDorOutro");
  return fields;
}

function validateField(name, value) {
  const trimmed = value.trim();

  if (name === "idade") {
    const age = Number(trimmed);
    return trimmed && Number.isFinite(age) && age > 0 && age <= 120
      ? ""
      : errorMessages.idade;
  }

  if (name === "telefone") {
    const digits = trimmed.replace(/\D/g, "");
    return digits.length >= 10 ? "" : errorMessages.telefone;
  }

  if (name === "causaDor") {
    return trimmed.length >= 5 ? "" : errorMessages.causaDor;
  }

  return trimmed ? "" : errorMessages[name] || "";
}

export default function Agendamento() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  const fieldRefs = {
    nome: useRef(null),
    idade: useRef(null),
    telefone: useRef(null),
    localDor: useRef(null),
    localDorOutro: useRef(null),
    causaDor: useRef(null),
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "localDor" && value !== "outro") next.localDorOutro = "";
      return next;
    });
    if (name === "localDor" && value !== "outro") {
      setErrors((prev) => ({ ...prev, localDorOutro: "" }));
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const requiredFields = getRequiredFields(form);
    const nextErrors = {};
    requiredFields.forEach((name) => {
      nextErrors[name] = validateField(name, form[name]);
    });
    setErrors(nextErrors);

    const firstInvalid = requiredFields.find((name) => nextErrors[name]);
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      successRef.current?.focus();
    }, 500);
  }

  return (
    <section id="agendamento" className="bg-forest py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos cuidar da sua recuperação."
            description="Preencha o pré-agendamento com o motivo da dor. Confirmamos o melhor horário pelo WhatsApp em até 1 dia útil."
            tone="inverse"
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={150} className="grid overflow-hidden rounded-3xl border border-paper/10 bg-card lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between gap-10 border-b border-ink/8 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="flex flex-col gap-6">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <div className="text-[13px] text-ink-soft">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-[17px] font-semibold text-ink transition-colors duration-150 hover:text-forest"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[17px] font-semibold text-ink">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
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
                  label: "Facebook",
                  href: "#",
                  path: <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V12H8v3h2.5v6h3v-6H16l0.5-3h-3v-2c0-0.6 0.4-1 1-1z" />,
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/5511999999999",
                  external: true,
                  path: <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.6L4 20Z" />,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors duration-150 hover:border-forest hover:text-forest"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10">
            {!submitted ? (
              <form noValidate onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Nome completo"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.nome}
                    inputRef={fieldRefs.nome}
                    autoComplete="name"
                    required
                  />
                  <Field
                    label="Idade"
                    name="idade"
                    type="number"
                    min={0}
                    max={120}
                    value={form.idade}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.idade}
                    inputRef={fieldRefs.idade}
                    required
                  />
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="WhatsApp / telefone"
                    name="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.telefone}
                    inputRef={fieldRefs.telefone}
                    autoComplete="tel"
                    placeholder="(11) 90000-0000"
                    required
                  />
                  <div>
                    <label htmlFor="localDor" className="mb-2 block text-sm font-semibold text-ink">
                      Local da dor
                      <span className="ml-0.5 text-danger">*</span>
                    </label>
                    <select
                      ref={fieldRefs.localDor}
                      id="localDor"
                      name="localDor"
                      value={form.localDor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={Boolean(errors.localDor)}
                      className={`w-full rounded-xl border bg-paper px-3.5 py-3 text-[15px] text-ink shadow-xs transition-colors duration-150 focus:border-forest focus:ring-2 focus:ring-forest/15 ${
                        errors.localDor ? "border-danger" : "border-ink/15"
                      }`}
                    >
                      {dorOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="mt-1.5 min-h-4 text-[13px] text-danger">{errors.localDor}</div>
                  </div>
                </div>

                {form.localDor === "outro" && (
                  <div className="mt-5">
                    <Field
                      label="Qual é o local da dor?"
                      name="localDorOutro"
                      value={form.localDorOutro}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.localDorOutro}
                      inputRef={fieldRefs.localDorOutro}
                      placeholder="Ex.: mandíbula, costela, panturrilha..."
                      required
                    />
                  </div>
                )}

                <div className="mt-5">
                  <label htmlFor="causaDor" className="mb-2 block text-sm font-semibold text-ink">
                    Causa ou motivo da dor
                    <span className="ml-0.5 text-danger">*</span>
                  </label>
                  <textarea
                    ref={fieldRefs.causaDor}
                    id="causaDor"
                    name="causaDor"
                    value={form.causaDor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={400}
                    aria-required="true"
                    aria-invalid={Boolean(errors.causaDor)}
                    placeholder="Ex.: dor lombar há 3 semanas, após esforço físico"
                    className={`min-h-24 w-full resize-y rounded-xl border bg-paper px-3.5 py-3 text-[15px] text-ink shadow-xs transition-colors duration-150 focus:border-forest focus:ring-2 focus:ring-forest/15 ${
                      errors.causaDor ? "border-danger" : "border-ink/15"
                    }`}
                  />
                  <div className="mt-1.5 min-h-4 text-[13px] text-danger">{errors.causaDor}</div>
                </div>

                <hr className="my-6 border-rule" />

                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="w-full disabled:opacity-60"
                >
                  {submitting ? "Enviando..." : "Enviar pré-agendamento"}
                </Button>
                <p className="mt-4 text-[13px] text-ink-soft">
                  Nenhuma cobrança é feita no envio. A confirmação acontece por WhatsApp.
                </p>
              </form>
            ) : (
              <div ref={successRef} tabIndex={-1}>
                <span className="eyebrow mb-5 w-fit">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  Recebido
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Pré-agendamento recebido.
                </h3>
                <p className="mt-3 text-base text-ink-soft">
                  Vamos confirmar o melhor horário pelo WhatsApp em até 1 dia útil.
                  Se preferir, fale com a gente agora mesmo.
                </p>
                <Button
                  as="a"
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="mt-5"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  inputRef,
  autoComplete,
  placeholder,
  min,
  max,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-danger">*</span>}
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={80}
        aria-required={required}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border bg-paper px-3.5 py-3 text-[15px] text-ink shadow-xs transition-colors duration-150 focus:border-forest focus:ring-2 focus:ring-forest/15 ${
          error ? "border-danger" : "border-ink/15"
        }`}
      />
      <div className="mt-1.5 min-h-4 text-[13px] text-danger">{error}</div>
    </div>
  );
}
