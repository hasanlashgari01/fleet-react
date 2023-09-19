import React from "react";

const FlightInfo = ({ location, time, isBeforeMidday = true }) => {
    return (
        <div className="flex flex-1 flex-col items-center gap-x-[3px]">
            <h3 className="font-semibold text-2xl text-neutral-2 uppercase">{location}</h3>
            <h6 className="font-PoppinsMedium text-xs/6 text-neutral-4">
                {time} {isBeforeMidday ? "AM" : "PM"}
            </h6>
        </div>
    );
};

export default FlightInfo;
