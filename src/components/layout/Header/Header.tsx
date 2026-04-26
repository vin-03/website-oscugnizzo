"use client";

import { useState } from "react";
import Container from "../Container/Container";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const phone = "3282774412";
    const message = "Ciao! Vorrei informazioni sulla disponibilità per stasera";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#about", label: "Chi Siamo" },
        { href: "#contatti", label: "Contatti" },
    ];

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.uiDesktop}>
                        {/* Logo */}
                        <Link className={styles.logo} href="/">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={36}
                                height={36}
                                className={styles.logoImg}
                            />

                            <span className={styles.logoTitle}>
                                Nome Attività
                            </span>
                        </Link>
                        {/* Link nav desktop */}
                        <nav className={styles.navDesktop}>
                            <ul className={styles.navDesktopUl}>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className={styles.navLink}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Header Btns */}

                        <div className={styles.headerBtns}>
                            <a
                                href={url}
                                aria-label="Scrivici su WhatsApp"
                                className={styles.whatsappBtn}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.text}>WhatsApp</span>
                                <svg viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                            <button
                                className={`${styles.burgerBtn} ${isOpen ? styles.open : ""}`}
                                onClick={toggleMenu}
                                aria-label="toggle menu"
                            >
                                <span className={styles.burgerBtnIcon}></span>
                            </button>
                        </div>
                    </div>
                    {/* Link Nav Mobile */}
                    <nav
                        className={`${styles.navMobile} ${isOpen ? styles.open : ""}`}
                    >
                        <ul className={styles.navMobileUl}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={styles.navLink}
                                        onClick={toggleMenu}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
