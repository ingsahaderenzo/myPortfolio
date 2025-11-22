export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            contact: "Contact",
            theme: "Theme",
        },
        hero: {
            presentation:
                "Welcome to my personal website! I'm Renzo Sahade, a passionate software developer in continuous grewment.",
            welcome: "Explore my work and get in touch!",
            alt: "Photo of Renzo Sahade",
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
        hero: {
            presentation:
                "¡Bienvenido a mi sitio web personal! Soy Renzo Sahade, un desarrollador de software apasionado en continuo crecimiento.",
            welcome: "¡Explora mi trabajo y ponte en contacto!",
            alt: "Foto de Renzo Sahade",
        },
    },
} as const;

export type Language = keyof typeof translations;
