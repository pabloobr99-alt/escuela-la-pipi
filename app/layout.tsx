import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Escuela de Danza Sara Ruiz "La Pipi"',
  description:
    'Escuela de danza en Montequinto, Sevilla. Flamenco, danza española, sevillanas y formación EFA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
