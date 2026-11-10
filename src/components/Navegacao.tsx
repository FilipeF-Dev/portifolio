"use client";

import { useEffect, useState } from "react";
import { perfil, secoes } from "@/content/dados";

/** Menu fixo que marca a seção visível. */
export function Navegacao() {
  const [ativa, setAtiva] = useState<string>("");

  useEffect(() => {
    const alvos = secoes
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setAtiva(entrada.target.id);
        }
      },
      // A seção "ativa" é a que ocupa a faixa logo abaixo do menu.
      { rootMargin: "-30% 0px -60% 0px" },
    );
    alvos.forEach((el) => observador.observe(el));

    // A última seção é curta e nunca sobe até a faixa acima: no fim da
    // página, ela é a ativa.
    const noFim = () => {
      const fim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (fim) setAtiva(secoes[secoes.length - 1].id);
    };
    window.addEventListener("scroll", noFim, { passive: true });

    return () => {
      observador.disconnect();
      window.removeEventListener("scroll", noFim);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-borda bg-fundo/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <a href="#inicio" className="text-sm font-semibold tracking-tight">
          {perfil.nome}
        </a>
        <ul className="hidden gap-1 md:flex">
          {secoes.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={ativa === s.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  ativa === s.id ? "bg-destaque-fundo text-destaque" : "text-suave hover:text-texto"
                }`}
              >
                {s.rotulo}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={perfil.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-suave hover:text-texto md:hidden"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
