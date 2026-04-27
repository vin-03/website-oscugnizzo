import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Container from "@/components/layout/Container/Container";

const notoSerif = Noto_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    variable: "--font-noto-serif",
    display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-plus-jakarta",
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
            <body className={`${notoSerif.variable} ${plusJakarta.variable}`}>
                <Header />
                <main>
                    <Container>{children}</Container>
                </main>
                <Footer />
            </body>
        </html>
    );
}
