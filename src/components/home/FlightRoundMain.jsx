import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import FilterDropdown from "./FilterDropdown";
import FlightCard from "./FlightCard/Index";
import InputRange from "./InputRange";

const FlightRoundMain = ({ isTrip }) => {
    const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);

    const handleAdvancedFilter = () => {
        setShowAdvancedFilter(!showAdvancedFilter);
    };

    return (
        <div className="pt-8 lg:pt-10">
            <>
                <div className="container">
                    <Breadcrumbs subs={["Flights"]} />
                </div>
                <div className="lg:container flex flex-col md:flex-row justify-between md:items-end gap-y-4">
                    <div className="flex flex-1 justify-between items-center flex-wrap gap-y-4 pt-8">
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

                    <button
                        className="flex lg:hidden max-md:flex-auto justify-center items-center mx-8 py-3 max-md:px-4 md:w-12 md:aspect-square bg-neutral-7 dark:bg-neutral-2 text-neutral-2 dark:text-neutral-7 rounded-full"
                        onClick={handleAdvancedFilter}
                    >
                        <span className="md:hidden">Advanced filter</span>
                        <span className="hidden md:flex">+</span>
                    </button>
                </div>
            </>
            <section className="container flex flex-col lg:flex-row gap-x-20 py-8 lg:py-20 2xl:pt-16 2xl:pb-34">
                <aside
                    className={`flex-col gap-2 flex-initial lg:basis-64 lg:h-3 lg:flex transition-all duration-150 ease-linear 
                        ${showAdvancedFilter ? "h-3 mb-8" : "h-0 mb-0"}`}
                >
                    <InputRange />
                    <InputRange />
                </aside>
                <main className="flex-auto space-y-8">
                    {isTrip
                        ? [0, 1, 2, 3, 4].map((card) => <FlightCard isTrip={isTrip} />)
                        : [0, 1, 2, 3, 4].map((card) => <FlightCard />)}
                </main>
            </section>
        </div>
    );
};

export default FlightRoundMain;
