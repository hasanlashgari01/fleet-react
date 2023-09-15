import React from "react";

const HostInfo = () => {
    return (
        <div className="flex items-center lg:mt-2">
            <svg className="w-5 h-5">
                <use href="#star"></use>
            </svg>
            <span className="font-PoppinsMedium text-sm/6 text-neutral-2 dark:text-neutral-8 ml-2">4.8</span>
            <span className="font-PoppinsRegular text-sm/6 text-neutral-4 ml-2">(256 reviews)</span>
        </div>
    );
};

export default HostInfo;
