import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function Header() {
    const [dark, setDark] = React.useState(false);
    React.useEffect(() => {
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
        <div className=" w-full flex items-center justify-between py-6 px-8 shadow-lg bg-transparent dark:bg-[#2b3945] ">
            <p className=" text-2xl font-semibold tracking-wider dark:text-white">
                Where In The World
            </p>
            <button
                onClick={() => darkModeHandler()}
                className=" text-black dark:text-white text-lg  flex items-center space-x-2"
            >
                {dark && (
                    <>
                        <BiSun />
                        <span className=" text-lg">Light Mode</span>
                    </>
                )}
                {!dark && (
                    <>
                        <BiMoon />
                        <span className=" text-lg">Dark Mode</span>
                    </>
                )}
            </button>
        </div>
    );
}
