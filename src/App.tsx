import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import type { Language } from "./i18n/translations";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

function App() {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="container">
            <Navbar
                onToggleTheme={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
                language={language}
                onChangeLanguage={setLanguage}
            />
            <Hero language={language} />
            <About language={language} />
            <Experience language={language} />
        </div>
    );
}

export default App;
