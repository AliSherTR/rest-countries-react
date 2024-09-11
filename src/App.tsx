import React, { useEffect } from "react";

export default function App() {
    const [dark, setDark] = React.useState(false);
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setDark(savedDarkMode);

        if (savedDarkMode) {
            document.body.classList.add("dark");
        }
    }, []);

    const darkModeHandler = () => {
        const newDarkMode = !dark;
        setDark(newDarkMode);
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    };
    return (
        <div className="h-screen bg:white dark:bg-black transition-colors duration-300">
            <h1 className="text-3xl font-bold underline dark:text-white">
                Hello world!
            </h1>
            <button onClick={() => darkModeHandler()}>
                {
                    dark && "Sunny" // render sunny when dark is true
                }
                {
                    !dark && "Moon" // render moon when dark is false
                }
            </button>
        </div>
    );
}
