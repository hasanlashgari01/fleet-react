import React from "react";

const ReserveButton = () => {
    return (
        <span className="flex justify-center items-center lg:flex-auto gap-x-3 py-4 px-8 lg:px-6 bg-primary-1 text-neutral-8 text-center rounded-full lg:cursor-pointer">
            <span className="font-DMSansBold text-base/4">Reserve</span>
            <svg className="w-4 h-4 hidden lg:inline-block">
                <use href="#shopping-bag"></use>
            </svg>
        </span>
    );
};

export default ReserveButton;
