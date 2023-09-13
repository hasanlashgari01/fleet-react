import React from "react";

const ReserveInfo = () => {
    return (
        <div>
            <div>
                <span className="text-neutral-5 font-DMSansBold text-2xl lg:text-[32px]/10 tracking-[-0.32px]">$119</span>
                <span className="text-neutral-2 font-DMSansBold text-2xl lg:text-[32px]/10 ml-3">$102</span>
                <span className="text-neutral-4 font-PoppinsRegular text-sm/6 lg:text-base ml-2.5">/night</span>
            </div>
            <div className="flex items-center lg:mt-2">
                <svg className="w-5 h-5">
                    <use href="#star"></use>
                </svg>
                <span className="font-PoppinsMedium text-sm/6 text-neutral-2 ml-2">4.8</span>
                <span className="font-PoppinsRegular text-sm/6 text-neutral-4 ml-2">(256 reviews)</span>
            </div>
        </div>
    );
};

export default ReserveInfo;
