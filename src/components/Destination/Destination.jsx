import React from "react";

function Destination({ title }) {
    return (
        <div className="w-full xs:w-[264.5px] space-y-[21px]">
            <div className="relative h-64 rounded-3xl overflow-hidden">
                <img src="/src/assets/images/destinations/destinations-1.jpg" alt="" className="object-cover h-full" />
                <span className="absolute top-4 left-4 py-1.5 px-2 bg-neutral-2 text-neutral-8 uppercase font-PoppinsBold text-xs/3 z-10 rounded-3xl">
                    from $540 per day
                </span>
            </div>
            <div>
                <h2 className="text-neutral-2 font-PoppinsSemiBold text-2xl">{title}</h2>
                <p className="mt-2 text-neutral-4 font-PoppinsRegular text-xs/5">Car rentals in 86 pickup locations</p>
            </div>
        </div>
    );
}

export default Destination;
