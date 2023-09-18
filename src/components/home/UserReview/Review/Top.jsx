import React from "react";

const Top = () => {
    return (
        <div>
            <h3 className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium lg:font-PoppinsSemiBold text-base lg:text-2xl">Add a review</h3>
            <div className="mt-2 flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center gap-y-2">
                <div className="text-sm">
                    <span className="text-neutral-4 font-PoppinsRegular">Be the first to review</span>
                    <span className="ml-2 text-neutral-2 dark:text-neutral-8 font-PoppinsMedium">All Access Pass</span>
                </div>
                <div className="flex gap-x-1">
                    {[0, 1, 2, 3, 4].map((item, index) => (
                        <svg className="w-6 h-6" key={index}>
                            <use href="#star"></use>
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Top;
