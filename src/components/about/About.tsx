import { translations, type Language } from "../../i18n/translations";
import styles from "./About.module.css";

export default function About({ language }: { language: Language }) {
    const t = translations[language].about;

    return (
        <section className={styles.section} id="about">
            <h2 className={styles.sectionTitle}>
                {language === "en" ? "About Me" : "Sobre Mí"}
            </h2>
            <article className={styles.sectionContent}>
                {/*About me*/}
                <p className={styles.principalText}>{t.me}</p>

                {/*Metrics*/}
                <article className={styles.metricsContainer}>
                    <div className={styles.metricBox}>
                        <h3 className={styles.metricTitle}>{t.years}</h3>
                        <p className={styles.secondaryText}>{t.textYears}</p>
                    </div>
                    <div className={styles.metricBox}>
                        <h3 className={styles.metricTitle}>{t.languages}</h3>
                        <p className={styles.secondaryText}>
                            {t.textLanguages}
                        </p>
                    </div>
                    <div className={styles.metricBox}>
                        <h3 className={styles.metricTitle}>{t.specilitys}</h3>
                        <p className={styles.secondaryText}>
                            {t.textSpecialitys}
                        </p>
                    </div>
                    <div className={styles.metricBox}>
                        <h3 className={styles.metricTitle}>{t.nextSkill}</h3>
                        <p className={styles.secondaryText}>
                            {t.textNextSkill}
                        </p>
                    </div>
                </article>
            </article>
        </section>
    );
}
