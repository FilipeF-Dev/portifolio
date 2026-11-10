import Image from "next/image";
import { perfil } from "@/content/dados";
import { Revelar } from "./Revelar";

function Foto() {
  if (perfil.foto) {
    return (
      <Image
        src={perfil.foto}
        alt={`Foto de ${perfil.nome}`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-1 ring-borda"
      />
    );
  }
  const iniciais = perfil.nome
    .split(" ")
    .map((p) => p[0])
    .join("");
  return (
    <div
      aria-hidden
      className="flex h-28 w-28 items-center justify-center rounded-full bg-destaque-fundo text-3xl font-semibold text-destaque ring-1 ring-borda"
    >
      {iniciais}
    </div>
  );
}

export function Abertura() {
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <Revelar className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Foto />
        <div>
          <p className="text-sm text-suave">{perfil.local}</p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">{perfil.nome}</h1>
          <p className="mt-2 text-lg text-destaque">{perfil.cargo}</p>
        </div>
      </Revelar>
      <Revelar>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-suave">{perfil.resumo}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#destaque"
            className="rounded-md bg-texto px-4 py-2 text-sm font-medium text-fundo transition-opacity hover:opacity-85"
          >
            Ver projetos
          </a>
          <a
            href={perfil.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-borda px-4 py-2 text-sm font-medium hover:bg-superficie"
          >
            GitHub
          </a>
          <a
            href={perfil.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-borda px-4 py-2 text-sm font-medium hover:bg-superficie"
          >
            LinkedIn
          </a>
        </div>
      </Revelar>
    </section>
  );
}
