import React from "react";

function Destination({ title }) {
    return (
        <div className="flex flex-col flex-initial xs:flex-1 sm:flex-initial justify-center items-center space-y-[21px]">
            <div className="relative 2xl:w-[352px] h-56 xs:h-44 sm:h-64 aspect-square rounded-3xl overflow-hidden">
                <img src="/src/assets/images/destinations/destinations-1.jpg" alt="" className="h-full object-cover" />
                <span className="absolute top-4 left-4 py-1.5 px-2 bg-neutral-2 text-neutral-8 uppercase font-PoppinsBold text-xs/3 z-10 rounded-3xl">
                    from $540 per day
                </span>
            </div>
            <div className="w-full px-4">
                <h2 className="text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-lg sm:text-2xl">{title}</h2>
                <p className="mt-2 text-neutral-4 font-PoppinsRegular text-xs/5">Car rentals in 86 pickup locations</p>
            </div>
        </div>
    );
}

export default Destination;
