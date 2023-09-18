import React from "react";

const Form = () => {
    return (
        <div className="flex justify-between items-center gap-x-2 py-4 px-2 sm:px-6 border-2 border-neutral-6 dark:border-neutral-3 rounded-2xl">
            <input type="text" placeholder="Share your thoughts" className="flex-1 bg-transparent text-neutral-4 font-PoppinsRegular text-base outline-none" />
            <div className="flex items-center shrink-0 gap-x-2 sm:gap-x-4">
                <span className="inline-flex justify-center items-center shrink-0 p-0.5 lg:p-2 border dark:border-neutral-3 rounded-full lg:cursor-pointer">
                    <svg className="w-6 h-6">
                        <use href="#smile"></use>
                    </svg>
                </span>
                <div className="flex justify-center items-center shrink-0 gap-3 rounded-full bg-primary-1 text-white p-1 lg:py-3 lg:px-4 lg:cursor-pointer">
                    <span className="hidden lg:inline-block font-DMSansBold text-sm/4">Post it!</span>
                    <svg className="w-4 h-4">
                        <use href="#arrow-right"></use>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Form;
