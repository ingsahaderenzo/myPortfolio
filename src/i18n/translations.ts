export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            contact: "Contact",
            theme: "Theme",
        },
    },
    es: {
        nav: {
            about: "Acerca",
            experience: "Experiencia",
            skills: "Habilidades",
            contact: "Contacto",
            theme: "Tema",
        },
    },
} as const;

export type Language = keyof typeof translations;
