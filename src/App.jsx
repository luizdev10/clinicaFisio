import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./sections/Inicio";
import Diferenciais from "./sections/Diferenciais";
import Servicos from "./sections/Servicos";
import Sobre from "./sections/Sobre";
import Localizacao from "./sections/Localizacao";
import Agendamento from "./sections/Agendamento";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Diferenciais />
        <Servicos />
        <Sobre />
        <Localizacao />
        <Agendamento />
      </main>
      <Footer />
    </>
  );
}
