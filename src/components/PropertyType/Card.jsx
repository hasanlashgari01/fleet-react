import React from "react";

const Card = () => {
    return (
        <>
            <div className="relative h-64 aspect-square rounded-3xl overflow-hidden">
                <span className="absolute top-4 left-4 py-2 px-3 bg-neutral-2 text-neutral-8 font-PoppinsSemiBold text-xs uppercase rounded-full">
                    20% off
                </span>
                <img
                    src="/src/assets/images/property/property-1.jpg"
                    alt=""
                    className="h-full object-cover aspect-square"
                />
            </div>
            <div className="mt-3 lg:mt-[21px] px-3.5">
                <h3 className="text-neutral-2 font-PoppinsMedium line-clamp-1">Nature house</h3>
                <h4 className="flex items-center gap-x-1.5 mt-1.5 lg:mt-2 text-neutral-4">
                    <svg className="w-4 h-4">
                        <use href="#home"></use>
                    </svg>
                    <span className="text-xs/5">650,596</span>
                </h4>
            </div>
        </>
    );
};

export default Card;
