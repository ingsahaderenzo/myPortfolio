import { translations, type Language } from "../../i18n/translations";
import styles from "./Footer.module.css";

export default function Footer({ language }: { language: Language }) {
    const t = translations[language].Footer;

    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>{t.copy}</p>
            <a href="#hero" className={styles.backToTop}>
                {t.backToTop}
            </a>
        </footer>
    );
}
