import Image from "next/image";
import styles from "./About.module.scss";

export default function About() {
    return (
        <section className={styles.about} id="about">
            {/* IMAGE column */}
            <div className={styles.gallery}>
                <div className={styles.galleryMain}>
                    <Image
                        src="/images/gallery1.jpg"
                        alt="Lo staff di O' Scugnizzo"
                        fill
                        className={styles.image}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                <div className={styles.gallerySub}>
                    <div className={styles.galleryThumbWrapper}>
                        <Image
                            src="/images/gallery2.jpg"
                            alt="Dettaglio pizza margherita"
                            fill
                            className={styles.image}
                            sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                    </div>
                    <div className={styles.galleryThumbWrapper}>
                        <Image
                            src="/images/gallery3.jpg"
                            alt="Pizza gourmet con ingredienti freschi"
                            fill
                            className={styles.image}
                            sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                    </div>
                </div>
            </div>
            {/* TEXT column */}
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Una Storia di <br />
                    <span className={styles.titleAccent}>
                        Tradizione e Passione
                    </span>
                </h2>
                <div className={styles.paragraph}>
                    <p>
                        A Lancusi, O&apos; Scugnizzo non è solo una pizzeria, ma
                        un punto di incontro dove il tempo sembra essersi
                        fermato. La nostra storia inizia anni fa, tra il profumo
                        del lievito madre e il calore del focolare domestico.
                    </p>
                    <p>
                        Ogni ingrediente è scelto personalmente dai mercati
                        locali: dai pomodori San Marzano DOP alla mozzarella di
                        bufala campana, fino all&apos;olio extravergine delle
                        nostre colline. Seguiamo la tradizione della pizza
                        tradizionale, con un cornicione croccante e un cuore
                        morbido.
                    </p>
                    <p className={styles.quote}>
                        &ldquo;Portiamo in tavola l&apos;autenticità di Salerno,
                        una pizza alla volta.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
}
