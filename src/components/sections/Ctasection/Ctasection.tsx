import Link from "next/link";
import styles from "./Ctasection.module.scss";

export default function Ctasection() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.grain} />
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Vuoi assaporare la vera tradizione?
                    </h2>
                    <p className={styles.description}>
                        Siamo aperti tutte le sere a Lancusi. Consigliamo la
                        prenotazione specialmente nel fine settimana per
                        assicurarvi un posto vicino al cuore del nostro forno.
                    </p>
                    <div className={styles.actions}>
                        <a href="tel:089954750" className={styles.btnPrimary}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            Chiama 089 954750
                        </a>
                        <Link href="/menu" className={styles.btnSecondary}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                            </svg>
                            Vedi Menu Online
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
