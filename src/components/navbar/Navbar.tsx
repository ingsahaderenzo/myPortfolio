import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({
    onToggleTheme,
    theme,
}: {
    onToggleTheme: () => void;
    theme: string;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.left}>
                <span className={styles.logo}>RS</span>
            </div>

            {/* Desktop menu */}
            <ul className={styles.center}>
                <li>
                    <a href="#about">Acerca</a>
                </li>
                <li>
                    <a href="#experience">Experiencia</a>
                </li>
                <li>
                    <a href="#skills">Habilidades</a>
                </li>
                <li>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>

            <div className={styles.right}>
                {/* Switch solo en desktop */}
                <button
                    className={`${styles.themeToggle} ${styles.desktopOnly}`}
                    onClick={onToggleTheme}
                    aria-label="Toggle theme"
                >
                    <div className={styles.toggleTrack}>
                        <div className={styles.toggleThumb}></div>
                    </div>
                </button>

                {/* Botón hamburguesa */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={isMenuOpen ? styles.open : ""}></span>
                    <span className={isMenuOpen ? styles.open : ""}></span>
                    <span className={isMenuOpen ? styles.open : ""}></span>
                </button>
            </div>

            {/* Menú móvil */}
            <div
                className={`${styles.mobileMenu} ${
                    isMenuOpen ? styles.active : ""
                }`}
            >
                {/* Switch en móvil */}
                <div className={styles.mobileThemeToggle}>
                    <span>Tema</span>
                    <button
                        className={styles.themeToggle}
                        onClick={onToggleTheme}
                        aria-label="Toggle theme"
                    >
                        <div className={styles.toggleTrack}>
                            <div className={styles.toggleThumb}></div>
                        </div>
                    </button>
                </div>

                <ul>
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            Acerca
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={closeMenu}>
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>

            {/* Overlay para cerrar el menú al hacer click fuera */}
            {isMenuOpen && (
                <div className={styles.overlay} onClick={closeMenu}></div>
            )}
        </nav>
    );
}
