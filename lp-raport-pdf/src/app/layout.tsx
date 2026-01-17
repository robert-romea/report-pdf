import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ReportSwift - Rapoarte Profesionale în Secunde",
  description: "Transformă datele brute în rapoarte PDF profesionale automat. Economisește ore întregi săptămânal. Perfect pentru freelanceri și consultanți.",
  keywords: ["generator rapoarte", "PDF generator", "automatizare rapoarte", "freelancer tools", "consultant tools"],
  openGraph: {
    title: "ReportSwift - Rapoarte Profesionale în Secunde",
    description: "Transformă datele tale în rapoarte PDF profesionale în câteva secunde.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
