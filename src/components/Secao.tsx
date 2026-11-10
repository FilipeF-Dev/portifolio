import type { ReactNode } from "react";
import { Revelar } from "./Revelar";

export function Secao({
  id,
  titulo,
  subtitulo,
  children,
}: {
  id: string;
  titulo: string;
  subtitulo?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-borda py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Revelar>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{titulo}</h2>
          {subtitulo && <p className="mt-3 max-w-2xl text-suave">{subtitulo}</p>}
          <div className="mt-10">{children}</div>
        </Revelar>
      </div>
    </section>
  );
}
