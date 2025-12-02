import { translations, type Language } from "../../i18n/translations";
import styles from "./Skills.module.css";

export default function Skills({ language }: { language: Language }) {
    const t = translations[language].Skills;

    return (
        <section id="skills" className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.title}</h2>
            {/*Artcile of technicals skills*/}
            <article className={styles.techSkills}>
                {/*This sections could be an unique component but for now it's fine */}

                {/*Section of frontend languages*/}
                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTittle}>{t.frontendTitle}</h3>
                    <ul>
                        {t.frontend.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/*Section of backend languages*/}
                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTittle}>{t.backendTitle}</h3>
                    <ul>
                        {t.backend.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/*Section of tools*/}
                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTittle}>{t.toolsTitle}</h3>
                    <ul>
                        {t.tools.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </article>

            {/*Article of soft skills*/}
            <article className={styles.softSkills}>
                <h3 className={styles.skillsTittle}>{t.softTitle}</h3>
                <ul>
                    {t.soft.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
}
