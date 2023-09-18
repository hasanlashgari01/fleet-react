import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const isActive = ({ isActive }) =>
        isActive
            ? "py-2 px-4 bg-neutral-2 dark:bg-neutral-8 text-neutral-8 dark:text-neutral-2 font-DMSansBold text-sm/4 border-2 border-neutral-2 dark:border-neutral-8 rounded-full"
            : "py-2 px-4 text-neutral-2 dark:text-neutral-8 font-DMSansBold text-sm/4 border-2 border-neutral-6 dark:border-neutral-4 rounded-full";

    return (
        <ul className="space-x-4">
            <NavLink to="/flight-trip" className={isActive}>
                Round-trip
            </NavLink>
            <NavLink to="/flight-one" className={isActive}>
                One-way
            </NavLink>
        </ul>
    );
};

export default Navigation;
