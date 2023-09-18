import { useEffect, useState } from "react";
import SwitchButton from "./SwitchButton.jsx";

const ThemeHandler = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        getThemeFromLS();
    }, [isEnabled]);

    const changeHandler = () => {
        if (localStorage.theme === "light") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        getThemeFromLS();
    };

    const getThemeFromLS = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setIsEnabled(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsEnabled(false);
        }
    };

    return (
        <div className="flex items-center">
            <span className="mr-2 dark:text-neutral-8">Dark theme</span>
            <SwitchButton isEnabled={isEnabled} setIsEnabled={setIsEnabled} changeHandler={changeHandler} />
        </div>
    );
};

export default ThemeHandler;
