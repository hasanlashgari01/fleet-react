import React from "react";
import Destination from "../../components/Destination/Destination";
import SectionTop from "../../components/SectionTop";

function ExploreNearby() {
    return (
        <div className="pb-16 lg:pb-28 2xl:pb-34" >
            <SectionTop title="Explore nearby" description="for car rentals" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index, item) => {
                    return <Destination key={index} title="London" />;
                })}
            </div>
        </div>
    );
}

export default ExploreNearby;
