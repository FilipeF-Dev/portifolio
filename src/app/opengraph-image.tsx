import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { perfil } from "@/content/dados";

// A prévia que aparece quando o link é compartilhado (LinkedIn, WhatsApp).
// Gerada no build, a partir dos mesmos dados da página.

export const alt = `${perfil.nome} · ${perfil.cargo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const foto = perfil.foto
  ? `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public", perfil.foto))).toString("base64")}`
  : null;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0c0c0e",
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(94,234,212,0.16), transparent 55%)",
          color: "#ececee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {foto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={foto}
              width={200}
              height={200}
              alt=""
              style={{ borderRadius: 9999, border: "2px solid #27272a" }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{perfil.nome}</div>
            <div style={{ fontSize: 36, color: "#5eead4", marginTop: 12 }}>{perfil.cargo}</div>
          </div>
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 56, maxWidth: 980, lineHeight: 1.4 }}>
          Especificação primeiro, IA na implementação, testes antes de subir.
        </div>
        <div style={{ fontSize: 26, color: "#71717a", marginTop: 40 }}>filipef.dev.br</div>
      </div>
    ),
    { ...size },
  );
}
