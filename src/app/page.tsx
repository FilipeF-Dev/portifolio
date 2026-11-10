import { Abertura } from "@/components/Abertura";
import { Competencias, Contato, Metodo, Trajetoria } from "@/components/Demais";
import { Destaque } from "@/components/Destaque";
import { Navegacao } from "@/components/Navegacao";
import { Projetos } from "@/components/Projetos";
import { Secao } from "@/components/Secao";
import { textos } from "@/content/dados";

export default function Home() {
  return (
    <>
      <Navegacao />
      <main className="relative isolate">
        <div aria-hidden className="fundo-topo" />
        <Abertura />
        <Destaque />
        <Secao
          id="projetos"
          titulo="Projetos"
          subtitulo={textos.projetos}
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
