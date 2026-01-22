import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { roRO } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "ReportSwift Dashboard",
    description: "Administrează-ți rapoartele.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider localization={roRO}>
            <html lang="ro">
                <body className={`${inter.variable} font-sans antialiased bg-[#09090b]`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
