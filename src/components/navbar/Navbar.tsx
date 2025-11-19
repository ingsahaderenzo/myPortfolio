import { useState } from "react";
import styles from "./Navbar.module.css";
import { translations } from "../../i18n/translations"; // 👈 Solo importar translations
import type { Language } from "../../i18n/translations"; // 👈 Importar Language como tipo

export default function Navbar({
    onToggleTheme,
    language,
    onChangeLanguage,
}: {
    onToggleTheme: () => void;
    language: Language;
    onChangeLanguage: (lang: Language) => void;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleLangMenu = () => {
        setIsLangOpen(!isLangOpen);
    };

    const handleLanguageChange = (lang: Language) => {
        onChangeLanguage(lang);
        setIsLangOpen(false);
    };

    const t = translations[language].nav;

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.left}>
                <span className={styles.logo}>RS</span>
            </div>

            {/* Desktop menu */}
            <ul className={styles.center}>
                <li>
                    <a href="#about">{t.about}</a>
                </li>
                <li>
                    <a href="#experience">{t.experience}</a>
                </li>
                <li>
                    <a href="#skills">{t.skills}</a>
                </li>
                <li>
                    <a href="#contact">{t.contact}</a>
                </li>
            </ul>

            <div className={styles.right}>
                {/* Language selector - Desktop */}
                <div
                    className={`${styles.languageSelector} ${styles.desktopOnly}`}
                >
                    <button
                        className={styles.languageButton}
                        onClick={toggleLangMenu}
                        aria-label="Change language"
                    >
                        <span>{language.toUpperCase()}</span>
                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            className={isLangOpen ? styles.rotated : ""}
                        >
                            <path
                                d="M1 1L6 6L11 1"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    {isLangOpen && (
                        <div className={styles.languageDropdown}>
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={
                                    language === "en" ? styles.active : ""
                                }
                            >
                                English
                            </button>
                            <button
                                onClick={() => handleLanguageChange("es")}
                                className={
                                    language === "es" ? styles.active : ""
                                }
                            >
                                Español
                            </button>
                        </div>
                    )}
                </div>

                {/* Theme toggle - Desktop */}
                <button
                    className={`${styles.themeToggle} ${styles.desktopOnly}`}
                    onClick={onToggleTheme}
                    aria-label="Toggle theme"
                >
                    <div className={styles.toggleTrack}>
                        <div className={styles.toggleThumb}></div>
                    </div>
                </button>

                {/* Hamburger button */}
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

            {/* Mobile menu */}
            <div
                className={`${styles.mobileMenu} ${
                    isMenuOpen ? styles.active : ""
                }`}
            >
                {/* Language selector - Mobile */}
                <div className={styles.mobileThemeToggle}>
                    <span>Language</span>
                    <div className={styles.mobileLangButtons}>
                        <button
                            onClick={() => handleLanguageChange("en")}
                            className={
                                language === "en" ? styles.activeLang : ""
                            }
                        >
                            EN
                        </button>
                        <button
                            onClick={() => handleLanguageChange("es")}
                            className={
                                language === "es" ? styles.activeLang : ""
                            }
                        >
                            ES
                        </button>
                    </div>
                </div>

                {/* Theme toggle - Mobile */}
                <div className={styles.mobileThemeToggle}>
                    <span>{t.theme}</span>
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
                            {t.about}
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={closeMenu}>
                            {t.experience}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            {t.skills}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            {t.contact}
                        </a>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div className={styles.overlay} onClick={closeMenu}></div>
            )}

            {/* Language dropdown overlay */}
            {isLangOpen && (
                <div
                    className={styles.langOverlay}
                    onClick={() => setIsLangOpen(false)}
                ></div>
            )}
        </nav>
    );
}
