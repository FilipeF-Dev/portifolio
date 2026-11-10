"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Aparece com um fade curto quando entra na tela, uma vez só.
 *
 * O conteúdo nasce visível: só o que ainda está abaixo da tela é escondido,
 * e só depois que o JavaScript carregou. Sem JS, ou num celular lento, nada
 * fica em branco esperando.
 */
export function Revelar({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("revelar");
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add("visivel");
          observador.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
