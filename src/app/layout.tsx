import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

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
        default: "O'Scugnizzo | Pizzeria a Fisciano - Pizza Italiana",
        template: "%s | O'Scugnizzo Fisciano",
    },
    description:
        "O'Scugnizzo è una pizzeria a Fisciano specializzata in pizza della tradizione, ingredienti freschi e impasto a lunga lievitazione. Vieni a trovarci o ordina da asporto.",
    keywords: [
        "pizzeria Fisciano",
        "pizza Italiana Fisciano",
        "O'Scugnizzo",
        "pizzeria vicino Salerno",
        "pizza da asporto Fisciano",
        "migliore pizzeria Fisciano",
    ],
    openGraph: {
        title: "O'Scugnizzo - Pizzeria a Fisciano",
        description:
            "Pizza napoletana autentica a Fisciano. Ingredienti freschi e qualità artigianale.",
        locale: "it_IT",
        type: "website",
    },
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
                {children}
                <Footer />
            </body>
        </html>
    );
}
