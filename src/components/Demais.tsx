import { competencias, metodo, perfil, trajetoria } from "@/content/dados";
import { Secao } from "./Secao";

export function Metodo() {
  return (
    <Secao
      id="metodo"
      titulo="Como trabalho"
      subtitulo="Especificação primeiro. A IA implementa a partir dela, e eu respondo pelas decisões."
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metodo.map((m, i) => (
          <li key={m.passo} className="rounded-lg border border-borda bg-superficie p-5">
            <span className="font-mono text-xs text-destaque">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-1 font-medium">{m.passo}</p>
            <p className="mt-2 text-sm leading-relaxed text-suave">{m.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}

export function Competencias() {
  return (
    <Secao
      id="competencias"
      titulo="Competências"
      subtitulo="Cada uma aponta para onde ela aparece de verdade."
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {competencias.map((g) => (
          <div key={g.grupo}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-suave">{g.grupo}</h3>
            <ul className="mt-3 space-y-2">
              {g.itens.map((item) => (
                <li key={item.nome} className="flex items-baseline justify-between gap-4 border-b border-borda pb-2">
                  <span>{item.nome}</span>
                  {item.onde && (
                    <a
                      href={item.onde === "destaque" ? "#destaque" : `#projeto-${item.onde}`}
                      className="shrink-0 text-xs text-destaque underline-offset-4 hover:underline"
                    >
                      ver onde
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Secao>
  );
}

export function Trajetoria() {
  return (
    <Secao id="trajetoria" titulo="Trajetória">
      <ol className="relative space-y-8 border-l border-borda pl-6">
        {trajetoria.map((t) => (
          <li key={t.titulo} className="relative">
            <span aria-hidden className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-destaque" />
            <p className="font-mono text-xs text-suave">{t.periodo}</p>
            <p className="mt-1 font-medium">
              {t.titulo} <span className="font-normal text-suave">· {t.lugar}</span>
            </p>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-suave">{t.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}

export function Contato() {
  return (
    <Secao id="contato" titulo="Contato" subtitulo="Respondo por qualquer um destes.">
      <dl className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-borda bg-superficie p-5">
          <dt className="text-sm text-suave">E-mail</dt>
          <dd className="mt-1">
            <a
              href={`mailto:${perfil.contato.email}`}
              className="font-medium text-destaque underline-offset-4 hover:underline"
            >
              {perfil.contato.email}
            </a>
          </dd>
        </div>
        <div className="rounded-lg border border-borda bg-superficie p-5">
          <dt className="text-sm text-suave">WhatsApp</dt>
          <dd className="mt-1">
            <a
              href={`https://wa.me/${perfil.contato.whatsapp.numero}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-destaque underline-offset-4 hover:underline"
            >
              {perfil.contato.whatsapp.exibido}
            </a>
          </dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={perfil.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-texto px-4 py-2 text-sm font-medium text-fundo transition-opacity hover:opacity-85"
        >
          LinkedIn
        </a>
        <a
          href={perfil.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-borda px-4 py-2 text-sm font-medium hover:bg-superficie"
        >
          GitHub
        </a>
      </div>
      <p className="mt-16 text-xs text-suave">
        Feito com Next.js · 2026 · {perfil.nome}
      </p>
    </Secao>
  );
}
