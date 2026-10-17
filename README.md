# FisioCariri

Site institucional da FisioCariri, construído em React + Vite com Tailwind CSS.

## Estrutura

```
src/
  components/   Header, Footer e peças compartilhadas (Button, Container, SectionHeading, Reveal, VisualPanel)
  sections/     Uma seção da página por arquivo (Inicio, Diferenciais, Servicos, Sobre, Localizacao, Agendamento)
  App.jsx       Composição das seções na ordem em que aparecem na página
```

## Scripts

```
npm install   instala as dependências
npm run dev   inicia o servidor de desenvolvimento
npm run build inicia o build de produção em dist/
```

## Pendências antes de publicar

Telefone, WhatsApp, e-mail, endereço e o responsável técnico ainda são placeholders — procure por essas informações em `src/sections/Agendamento.jsx`, `src/sections/Localizacao.jsx` e `src/components/Footer.jsx` antes de publicar o site.
