import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchButton = ({ isEnabled, setIsEnabled, changeHandler }) => {
    const changeButtonHandler = () => {
        setIsEnabled(!isEnabled);
        changeHandler();
    };

    return (
        <Switch
            checked={isEnabled}
            onChange={changeButtonHandler}
            className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                ${isEnabled ? "bg-teal-900" : "bg-teal-700"}`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-neutral-8 shadow-lg ring-0 transition duration-200 ease-in-out
                    ${isEnabled ? "translate-x-6" : "translate-x-0"}
                `}
            />
        </Switch>
    );
};

export default SwitchButton;
