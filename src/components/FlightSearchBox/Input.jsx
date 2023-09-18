import React from "react";

const Input = ({ icon, placeholder }) => {
    return (
        <div className="flex flex-1 items-center gap-x-3 p-2 lg:py-2 lg:px-5 2xl:py-5">
            <svg className="hidden xs:inline-block w-6 h-6 text-neutral-5">
                <use href={`#${icon}`}></use>
            </svg>
            <input type="text" placeholder={placeholder} className="w-full bg-transparent font-PoppinsMedium text-2xl text-neutral-2 dark:text-neutral-8 border-none outline-none" />
        </div>
    );
};

export default Input;
