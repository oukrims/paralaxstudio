import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const centuryGothic = localFont({
  src: "../../public/century-gothic-bold.ttf",
  variable: "--font-century-gothic",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parallax Stud.io",
  description:
    "Visualisations architecturales 3D photo-réalistes par Parallax Stud.io, agence franco-marocaine.",
  metadataBase: new URL("https://parallax-stud.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${centuryGothic.variable} antialiased bg-[#050505] text-[#f4f4f5] font-[family-name:var(--font-century-gothic)]`}
      >
        {children}
      </body>
    </html>
  );
}
