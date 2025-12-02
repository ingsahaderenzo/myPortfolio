import { translations, type Language } from "../../i18n/translations";
import styles from "./Hero.module.css";

export default function Hero({ language }: { language: Language }) {
    const t = translations[language].hero;

    return (
        <article className={styles.hero} id="hero">
            {/* Presentation */}
            <section className={styles.textBlock}>
                <h1 className={styles.title}>
                    Renzo <span className={styles.highlight}>Sahade</span>
                </h1>

                <p className={styles.subtitle}>
                    {t.presentation}{" "}
                    <span className={styles.welcome}>{t.welcome}</span>
                </p>

                <a
                    href="/assets/CV-Renzo-Sahade.pdf"
                    download
                    className={styles.cvButton}
                >
                    {t.cvButton}
                </a>
            </section>

            {/* Photo */}
            <figure className={styles.photoWrapper}>
                <img
                    src="/assets/renzoSahade.jpg"
                    alt={t.alt}
                    className={styles.photo}
                />
            </figure>
        </article>
    );
}
