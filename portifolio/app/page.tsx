import { HomeSection } from "./sections/home";
import { Projetos } from "./sections/projetos";
import { ProjetosEmExecucao } from "./sections/projetosEx";
export default function Home() {
  return (
    <main>
      <HomeSection/>
      <Projetos/>
      <ProjetosEmExecucao/>
    </main>
  );
}
