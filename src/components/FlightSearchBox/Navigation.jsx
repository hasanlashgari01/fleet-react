import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const isActive = ({ isActive }) =>
        isActive
            ? "py-2 px-4 bg-neutral-2 text-neutral-8 font-DMSansBold text-sm/4 border-2 border-neutral-2 rounded-full"
            : "py-2 px-4 font-DMSansBold text-sm/4 border-2 border-neutral-6 rounded-full";

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
