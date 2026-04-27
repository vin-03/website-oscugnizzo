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

    // const phone = "3282774412";
    // const message = "Ciao! Vorrei informazioni sulla disponibilità per stasera";
    // const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/#about", label: "Chi Siamo" },
        { href: "/#contatti", label: "Contatti" },
    ];

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.uiDesktop}>
                        {/* Logo */}
                        <Link className={styles.logo} href="/">
                            <Image
                                src="/images/scugnizzoboy.jpg"
                                alt="Logo"
                                width={50}
                                height={50}
                                className={styles.logoImg}
                            />

                            <span className={styles.logoTitle}>
                                O' Scugnizzo
                            </span>
                        </Link>
                        {/* Link nav desktop */}
                        <nav className={styles.navDesktop}>
                            <ul className={styles.navDesktopUl}>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={styles.navLink}
                                            scroll={
                                                link.href.includes("#") ?
                                                    false
                                                :   undefined
                                            }
                                            onClick={
                                                link.href.includes("#") ?
                                                    toggleMenu
                                                :   undefined
                                            }
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Header Btns */}

                        <div className={styles.headerBtns}>
                            <a
                                href="tel:+391234567890"
                                aria-label="Chiama la pizzeria per ordinare"
                                className={styles.phoneBtn}
                            >
                                <span className={styles.text}>Ordina Ora</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
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
                                    <Link
                                        href={link.href}
                                        className={styles.navLink}
                                        onClick={toggleMenu}
                                        scroll={
                                            link.href.includes("#") ?
                                                false
                                            :   undefined
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
