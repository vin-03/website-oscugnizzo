import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Container from "@/components/layout/Container/Container";

const geistSans = Geist({
    variable: "--font-primary",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-secondary",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Il tuo sito",
        template: "%s | Il tuo sito",
    },
    description: "Descrizione più accurata del tuo progetto",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <main>
                    <Container>{children}</Container>
                </main>
                <Footer />
            </body>
        </html>
    );
}
