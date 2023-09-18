import React from "react";
import Input from "./Input";

const Main = ({ children }) => {
    return (
        <div className="relative grid lg:grid-cols-2 2xl:grid-cols-4 items-end mt-4 pr-16">
            <Input icon="location" placeholder="Auckland City" />
            <Input icon="location-arrow" placeholder="Sai Gon City" />
            <Input icon="calendar" placeholder="Fri, May 14" />
            {children}
            <button className="absolute right-0 flex justify-center items-center w-16 h-16 bg-primary-1 outline-none rounded-full cursor-none lg:cursor-pointer">
                <svg className="w-6 h-6 text-neutral-8">
                    <use href="#search"></use>
                </svg>
            </button>
        </div>
    );
};

export default Main;
