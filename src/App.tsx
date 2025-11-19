import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

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
            <Navbar
                onToggleTheme={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
            />
        </div>
    );
}

export default App;
