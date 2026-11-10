"use client";

import { useEffect, useState } from "react";
import { projetos, temas, type Tema } from "@/content/dados";

export function Projetos() {
  const [filtro, setFiltro] = useState<Tema | "Todos">("Todos");
  const [aberto, setAberto] = useState<string | null>(null);

  // Um link para #projeto-<id> (vindo de Competências) abre o card certo.
  useEffect(() => {
    const abrirPeloHash = () => {
      const id = window.location.hash.replace("#projeto-", "");
      if (projetos.some((p) => p.id === id)) {
        setFiltro("Todos");
        setAberto(id);
      }
    };
    abrirPeloHash();
    window.addEventListener("hashchange", abrirPeloHash);
    return () => window.removeEventListener("hashchange", abrirPeloHash);
  }, []);

  const visiveis = filtro === "Todos" ? projetos : projetos.filter((p) => p.temas.includes(filtro));

  return (
    <div>
      <div role="group" aria-label="Filtrar projetos por tema" className="flex flex-wrap gap-2">
        {(["Todos", ...temas] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFiltro(t)}
            aria-pressed={filtro === t}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              filtro === t
                ? "border-destaque bg-destaque-fundo text-destaque"
                : "border-borda text-suave hover:text-texto"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid items-start gap-4 md:grid-cols-2">
        {visiveis.map((p) => {
          const estaAberto = aberto === p.id;
          return (
            <li
              key={p.id}
              id={`projeto-${p.id}`}
              className="flex flex-col rounded-lg border border-borda bg-superficie p-5"
            >
              <h3 className="text-lg font-semibold">{p.nome}</h3>
              <p className="mt-2 text-sm leading-relaxed text-suave">{p.resumo}</p>
              <p className="mt-3 text-sm">
                <span className="text-destaque">Mostra:</span> {p.mostra}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md border border-borda px-2 py-0.5 font-mono text-xs text-suave">
                    {s}
                  </li>
                ))}
              </ul>

              {estaAberto && (
                <ul id={`decisoes-${p.id}`} className="mt-5 space-y-2 border-t border-borda pt-4 text-sm">
                  {p.decisoes.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span aria-hidden className="text-destaque">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
                <button
                  type="button"
                  onClick={() => setAberto(estaAberto ? null : p.id)}
                  aria-expanded={estaAberto}
                  aria-controls={`decisoes-${p.id}`}
                  className="text-sm font-medium text-texto underline-offset-4 hover:underline"
                >
                  {estaAberto ? "Menos detalhes" : "Decisões do projeto"}
                </button>
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-destaque underline-offset-4 hover:underline"
                  >
                    {l.rotulo} →
                  </a>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
