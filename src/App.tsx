import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [theme, setTheme] = useState("light");

    // Cambia la clase en <html>
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="container">
            <h1>Mi Portfolio</h1>

            <button
                className="theme-toggle"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? "🌙 Modo oscuro" : "☀️ Modo claro"}
            </button>
        </div>
    );
}

export default App;
