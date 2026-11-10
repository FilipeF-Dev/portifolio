import { Abertura } from "@/components/Abertura";
import { Competencias, Contato, Metodo, Trajetoria } from "@/components/Demais";
import { Destaque } from "@/components/Destaque";
import { Navegacao } from "@/components/Navegacao";
import { Projetos } from "@/components/Projetos";
import { Secao } from "@/components/Secao";

export default function Home() {
  return (
    <>
      <Navegacao />
      <main>
        <Abertura />
        <Destaque />
        <Secao
          id="projetos"
          titulo="Projetos"
          subtitulo="Produtos que construí do zero. Abra um card para ver as decisões que fazem a diferença."
        >
          <Projetos />
        </Secao>
        <Metodo />
        <Competencias />
        <Trajetoria />
        <Contato />
      </main>
    </>
  );
}
