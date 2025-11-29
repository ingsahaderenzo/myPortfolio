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
                "Systems Analyst & Software Developer \n Passionate about building efficient and scalable software.",
            welcome: "Explore my work and get in touch!",
            alt: "Photo of Renzo Sahade",
        },
        about: {
            me: "I’m Renzo Sahade, a Systems Analyst and Software Developer passionate about building solutions that create real impact — whether in backend, frontend, or full end-to-end projects.\n\nI’m currently studying Information Systems Engineering at the National Technological University (UTN), where I also earned my intermediate degree as a Systems Analyst. This background gave me a strong foundation in architecture, analysis, design patterns, and software engineering best practices.\n\nI have experience working with modern technologies such as Java Spring Boot, React, React Native, and Docker, with a strong interest in backend development, cloud computing, and cybersecurity. I’m continuously learning and always looking for new technical challenges.\n\nI am an intern at Banco Galicia, where I am part of a professional environment that motivates me to improve every day..\n\nBeyond coding, I’m motivated by growth, teamwork, and building scalable, clean, and well-designed software.",
            years: "+1",
            textYears: "Years of experience",
            languages: "ES/EN",
            textLanguages: "Languages",
            specilitys: "Backend / Full Stack",
            textSpecialitys: "Specialties",
            nextSkill: "Test Automation",
            textNextSkill: "Next skills to learn",
        },
    },
    es: {
        nav: {
            about: "Acerca de",
            experience: "Experiencia",
            skills: "Habilidades",
            contact: "Contacto",
            theme: "Tema",
        },
        hero: {
            presentation:
                "Analista en Sistemas y Desarrollador de Software \n Apasionado por crear software eficiente y escalable.",
            welcome: "¡Explorá mi trabajo y contactame!",
            alt: "Foto de Renzo Sahade",
        },
        about: {
            me: "Soy Renzo Sahade, Analista en Sistemas y Desarrollador de Software. Disfruto crear soluciones que realmente aporten valor, ya sea desde backend, frontend o en proyectos end-to-end. \n\nActualmente estoy cursando Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN), donde también obtuve el título intermedio de Analista en Sistemas. Mi formación me dio una base sólida en arquitectura, análisis, patrones de diseño y buenas prácticas de desarrollo.\n\nTengo experiencia trabajando en aplicaciones modernas utilizando tecnologías como Java Spring Boot, React, React Native y Docker, con un fuerte interés en backend, cloud computing y ciberseguridad. Me apasiona aprender constantemente y asumir nuevos desafíos técnicos. \n\nAdemás, soy becario del Banco Galicia, donde formo parte de un entorno profesional que me impulsa a mejorar cada día.\n\nFuera del código, me motiva crecer como profesional, colaborar con equipos, y seguir construyendo soluciones escalables, limpias y bien diseñadas.",
            years: "+1",
            textYears: "Años de experiencia",
            languages: "ES/EN",
            textLanguages: "Idiomas",
            specilitys: "Backend / Full Stack",
            textSpecialitys: "Especialidades",
            nextSkill: "Tests Automatizados",
            textNextSkill: "Próximos skills a aprender",
        },
    },
} as const;

export type Language = keyof typeof translations;
