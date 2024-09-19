import { Theme, useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export default function Header() {
    const { theme, setTheme } = useTheme();

    function toggleTheme(theme: Theme) {
        setTheme(theme);
    }
    return (
        <div className=" w-full flex  items-center justify-between py-6 px-10 shadow-lg bg-transparent dark:bg-[#2b3945] transition-colors duration-300 ">
            <p className=" lg:text-2xl text-xl font-bold tracking-normal dark:text-white">
                Where In The World
            </p>
            <button
                onClick={() =>
                    toggleTheme(theme === "light" ? "dark" : "light")
                }
                className=" text-black dark:text-white lg:text-lg   flex items-center space-x-2"
            >
                {theme === "dark" ? (
                    <>
                        <Sun />{" "}
                        <span className="translate-y-[-2px]">Light Mode</span>
                    </>
                ) : (
                    <>
                        <Moon />{" "}
                        <span className="translate-y-[-2px]">Dark Mode</span>
                    </>
                )}
            </button>
        </div>
    );
}
