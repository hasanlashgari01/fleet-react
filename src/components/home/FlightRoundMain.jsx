import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import FilterDropdown from "./FilterDropdown";

const FlightRoundMain = () => {
    return (
        <div className="pt-8 lg:pt-10">
            <div className="container">
                <Breadcrumbs subs={["Flights"]} />
            </div>
            <div className="lg:container flex justify-between items-center flex-wrap gap-y-4 pt-8">
                <FilterDropdown title="Recommended" isHidden={true}>
                    <span className="py-2.5 px-3.5">Recommended</span>
                </FilterDropdown>
                <FilterDropdown title="Best">
                    <span className="py-2.5 px-3.5">Best</span>
                </FilterDropdown>

                <ul className="hidden lg:flex items-center">
                    <li className="py-1.5 px-4 rounded-full cursor-pointer bg-neutral-2 dark:bg-neutral-6 text-neutral-8 dark:text-neutral-2">
                        Best
                    </li>
                    <li className="py-1.5 px-4 rounded-full cursor-pointer text-neutral-4 hover:text-neutral-3 dark:hover:text-neutral-5">
                        Cheapest
                    </li>
                    <li className="py-1.5 px-4 rounded-full cursor-pointer text-neutral-4 hover:text-neutral-3 dark:hover:text-neutral-5">
                        Quickest
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FlightRoundMain;
