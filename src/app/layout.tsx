import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const descricao =
  "Analista de TI que constrói software e automações com IA: especificação primeiro, IA na implementação, testes antes de subir.";

export const metadata: Metadata = {
  // Endereço oficial: os links da prévia (Open Graph) saem a partir dele.
  metadataBase: new URL("https://filipef.dev.br"),
  title: "Filipe Ferreira · software e automações com IA",
  description: descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Filipe Ferreira",
    title: "Filipe Ferreira · software e automações com IA",
    description: descricao,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
