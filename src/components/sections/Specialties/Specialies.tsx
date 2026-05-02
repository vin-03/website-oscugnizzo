// Specialties.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Specialties.module.scss";

interface Pizza {
    src: string;
    alt: string;
    price: string;
    name: string;
    description: string;
}

const pizzas: Pizza[] = [
    {
        src: "/images/specialpizza1.jpg",
        alt: "Pizza Regina Margherita",
        price: "€7.50",
        name: "Regina Margherita",
        description:
            "Pomodoro San Marzano DOP, Mozzarella di Bufala Campana, Basilico fresco, Olio EVO.",
    },
    {
        src: "/images/specialpizza2.jpg",
        alt: "Pizza L'Anima di Lancusi",
        price: "€9.00",
        name: "L'Anima di Lancusi",
        description:
            "Crema di zucca locale, Provola affumicata, Salsiccia di maialino nero, Granella di nocciole.",
    },
    {
        src: "/images/specialpizza3.jpg",
        alt: "Pizza 4 Formaggi di Grotta",
        price: "€8.50",
        name: "4 Formaggi di Grotta",
        description:
            "Fior di latte, Gorgonzola DOP, Pecorino Romano, Scamorza affumicata in paglia.",
    },
];

export default function Specialties() {
    return (
        <section className={styles.specialties}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerTitleContainer}>
                    <div className={styles.headerTitle}>
                        <span className={styles.eyebrow}>
                            Il Nostro Orgoglio
                        </span>
                        <h2 className={styles.title}>Le Nostre Specialità</h2>
                    </div>
                </div>
                <Link href="/menu" className={styles.menuLink}>
                    Vedi tutto il Menu
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-3v2z" />
                    </svg>
                </Link>
            </div>

            {/* Cards */}
            <div className={styles.cards}>
                {pizzas.map((pizza) => (
                    <div key={pizza.name} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={pizza.src}
                                alt={pizza.alt}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <span className={styles.price}>{pizza.price}</span>
                        </div>
                        <div className={styles.cardBody}>
                            <h3 className={styles.pizzaName}>{pizza.name}</h3>
                            <p className={styles.pizzaDesc}>
                                {pizza.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
