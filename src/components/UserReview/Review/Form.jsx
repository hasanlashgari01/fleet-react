import React from "react";

const Form = () => {
    return (
        <div className="flex justify-between py-4 px-2 sm:px-6 border-2 border-neutral-6 rounded-2xl">
            <input type="text" placeholder="Share your thoughts" className="flex-1 bg-transparent text-neutral-4 font-PoppinsRegular text-base outline-none" />
            <div className="flex shrink-0 gap-x-2 sm:gap-x-4">
                <span className="shrink-0 p-1 lg:p-3 border rounded-full lg:cursor-pointer">
                    <svg className="w-6 h-6">
                        <use href="#smile"></use>
                    </svg>
                </span>
                <span className="inline-flex justify-center items-center shrink-0 gap-3 rounded-full bg-primary-1 text-white p-1 lg:py-3 lg:px-4 lg:cursor-pointer">
                    <span className="hidden lg:inline-block">Post it!</span>
                    <svg className="w-6 h-6">
                        <use href="#arrow-right"></use>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Form;
