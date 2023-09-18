import React from "react";

const SaveButton = () => {
    return (
        <span className="shrink-0 inline-flex justify-center items-center py-4 px-6 space-x-3 border-2 border-neutral-6 dark:border-neutral-3 rounded-full lg:cursor-pointer">
            <span className="font-DMSansBold text-base/4 text-neutral-2 dark:text-neutral-8">Save</span>
            <svg className="w-4 h-4 inline-block text-neutral-4">
                <use href="#plus2"></use>
            </svg>
        </span>
    );
};

export default SaveButton;
