import { translations, type Language } from "../../i18n/translations";
import styles from "./Experience.module.css";

export default function Experience({ language }: { language: Language }) {
    const t = translations[language].experience;

    return (
        <section id="experience" className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.title}</h2>
            {/*This could be a component byself, but right now I just got one experience, so it doesn't have sense*/}
            <article className={styles.experienceBox}>
                <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceTitle}>{t.lsgTitle}</h3>
                    <p className={styles.experienceTime}>{t.lsgTime}</p>
                </div>
                <p className={styles.experienceExplanation}>
                    {t.lsgExplanation}
                </p>
                <h4 className={styles.experienceSubTitle}>
                    {t.lsgTaskRealized}
                </h4>
                <ul>
                    <li className={styles.listDetail}>{t.lsgFirstPoint}</li>
                    <li className={styles.listDetail}>{t.lsgSecondPoint}</li>
                    <li className={styles.listDetail}>{t.lsgThirdPoint}</li>
                    <li className={styles.listDetail}>{t.lsgFourthPoint}</li>
                    <li className={styles.listDetail}>{t.lsgFifthPoint}</li>
                </ul>
                <h4 className={styles.experienceSubTitle}>
                    {t.lsgAchievementsTitle}
                </h4>
                <ul>
                    {t.lsgAchievements.map((achievement, index) => (
                        <li key={index} className={styles.listDetail}>
                            {achievement}
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}
