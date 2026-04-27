// Hero.tsx
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.background}>
                <Image
                    src="/images/hero.jpg"
                    alt="Pizza casereccia O' Scugnizzo"
                    fill
                    className={styles.backgroundImage}
                    priority
                />
                <div className={styles.overlay} />
                <div className={styles.grain} />
            </div>

            <div className={styles.content}>
                <span className={styles.badge}>Tradizione Salernitana</span>

                <h1 className={styles.title}>
                    O'Scugnizzo <br /> a Lancusi
                </h1>

                <p className={styles.description}>
                    Pizzeria O' Scugnizzo, pizze gustose in ambiente conviviale
                    e amichevole. Il locale perfetto per una cena in compagnia
                    di amici e famiglia.
                </p>

                <div className={styles.actions}>
                    <button className={styles.buttonPrimary}>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>
                        Esplora il Menu
                    </button>
                    <button className={styles.buttonOutline}>
                        <span className="material-symbols-outlined">call</span>
                        Prenota Ora
                    </button>
                </div>
            </div>
        </section>
    );
}
