import { translations, type Language } from "../../i18n/translations";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact({ language }: { language: Language }) {
    const t = translations[language].Contact;

    return (
        <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.title}</h2>
            <p className={styles.contactDescription}>{t.description}</p>

            <ul className={styles.contactList}>
                <li className={styles.contactListItem}>
                    <a
                        href="https://github.com/ingsahaderenzo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <FaGithub className={styles.icon} />
                        <h3 className={styles.contactListItemTittle}>Github</h3>
                        <p className={styles.username}>ingsahaderenzo</p>
                    </a>
                </li>

                <li className={styles.contactListItem}>
                    <a
                        href="mailto:ing.sahade.renzo@gmail.com"
                        className={styles.link}
                    >
                        <MdEmail className={styles.icon} />
                        <h3 className={styles.contactListItemTittle}>Email</h3>
                        <p className={styles.username}>
                            ing.sahade.renzo@gmail.com
                        </p>
                    </a>
                </li>

                <li className={styles.contactListItem}>
                    <a
                        href="https://www.linkedin.com/in/renzo-sahade-020608318/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <FaLinkedin className={styles.icon} />
                        <h3 className={styles.contactListItemTittle}>
                            LinkedIn
                        </h3>
                        <p className={styles.username}>Renzo Sahade</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}
