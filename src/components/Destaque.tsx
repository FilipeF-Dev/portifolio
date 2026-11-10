import { destaque } from "@/content/dados";
import { Secao } from "./Secao";

function Fluxo() {
  return (
    <ol className="grid gap-3 sm:grid-cols-5">
      {destaque.fluxo.map((etapa, i) => (
        <li
          key={etapa.passo}
          className="relative rounded-lg border border-borda bg-superficie p-4"
        >
          <span className="font-mono text-xs text-destaque">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-1 font-medium">{etapa.passo}</p>
          <p className="mt-1 text-sm text-suave">{etapa.detalhe}</p>
          {i < destaque.fluxo.length - 1 && (
            <span
              aria-hidden
              className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-suave sm:block"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Destaque() {
  return (
    <Secao id="destaque" titulo={destaque.titulo} subtitulo="Projeto em destaque · em produção · código aberto">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-suave">O problema</h3>
          <p className="mt-2 leading-relaxed">{destaque.problema}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-suave">A solução</h3>
          <p className="mt-2 leading-relaxed">{destaque.solucao}</p>
        </div>
      </div>

      <div className="mt-10">
        <Fluxo />
      </div>

      <dl className="mt-10 grid gap-6 sm:grid-cols-3">
        {destaque.numeros.map((n) => (
          <div key={n.valor} className="border-l-2 border-destaque pl-4">
            <dt className="text-3xl font-semibold tracking-tight">{n.valor}</dt>
            <dd className="mt-1 text-sm text-suave">{n.rotulo}</dd>
          </div>
        ))}
      </dl>

      <blockquote className="mt-10 rounded-lg bg-destaque-fundo p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-destaque">O que aprendi</p>
        <p className="mt-2 leading-relaxed">{destaque.licao}</p>
      </blockquote>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={destaque.repositorio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-destaque underline-offset-4 hover:underline"
        >
          Ver o repositório →
        </a>
        <ul className="flex flex-wrap gap-2">
          {destaque.stack.map((s) => (
            <li key={s} className="rounded-md border border-borda px-2 py-0.5 font-mono text-xs text-suave">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  );
}
