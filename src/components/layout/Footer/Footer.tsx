import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#about", label: "Chi Siamo" },
        { href: "#contatti", label: "Contatti" },
    ];

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    {/* Logo / Brand */}
                    <div className={styles.brand}>
                        <span className={styles.logo}>Nome Attività</span>
                        <p className={styles.copy}>
                            © {new Date().getFullYear()} Tutti i diritti
                            riservati
                        </p>
                    </div>

                    {/* Nav */}
                    <nav className={styles.nav}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={styles.footerNavLink}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
