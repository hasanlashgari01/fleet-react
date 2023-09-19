import React from "react";
import FlightCard from "./FlightCard";

const Index = ({ isTrip = false }) => {
    return (
        <div className="flex flex-col 2xl:flex-row lg:gap-y-5 p-6 border border-neutral-6 rounded-3xl">
            <div className="flex-1 space-y-6">
                <FlightCard />
                {isTrip && <div className="inline-block lg:hidden w-full h-[1px] my-5 bg-neutral-6"></div>}
                {isTrip && <FlightCard />}
            </div>
            <div className="lg:hidden w-full h-[1px] my-5 bg-neutral-6"></div>
            <div className="flex 2xl:flex-col justify-between max-md:items-center gap-5">
                <div className="text-center py-3 lg:py-4 px-4 lg:px-6 text-primary-4 font-DMSansBold text-sm lg:text-base leading-4 border-2 border-neutral-6 rounded-full">
                    $3,256
                </div>
                <button className="flex justify-center items-center gap-x-3 py-3 lg:py-4 px-4 lg:px-6 bg-primary-1 text-neutral-8 font-DMSansBold text-sm lg:text-base leading-4 rounded-full transition- ease-in duration-300">
                    View deal
                    <svg className="w-4 lg:w-5 aspect-square text-neutral-8">
                        <use href="#arrow-right"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Index;
