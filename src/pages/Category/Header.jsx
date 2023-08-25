import React from "react";
import FilterDropdown from "../../components/FilterDropdown";

function Header() {
    return (
        <div className="lg:mt-12">
            <div>
                <div>
                    <svg className="w-10 h-10 text-neutral-2">
                        <use href="#arrow-left-simple"></use>
                    </svg>
                    <div>
                        <h1>Places to stay</h1>
                        <div>
                            <span>300+ stays</span>
                            <span>May 1 - 14, 2 guests</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Advanced filter</span>
                    <svg className="w-10 h-10 text-neutral-2">
                        <use href="#plus2"></use>
                    </svg>
                </div>
            </div>
            <span className="inline-block my-8 w-full h-0.5 bg-neutral-6"></span>
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <ul className="hidden lg:inline-block space-x-2">
                    <span className="inline-flex gap-x-2 py-1.5 px-3 bg-neutral-3 dark:bg-neutral-6 text-neutral-8 dark:text-neutral-2 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                        Entire homes
                    </span>
                    <span className="inline-flex gap-x-2 py-1.5 px-3 text-neutral-4 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                        Cancellation flexibility
                    </span>
                    <span className="inline-flex gap-x-2 py-1.5 px-3 text-neutral-4 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                        Closest beach
                    </span>
                    <span className="inline-flex gap-x-2 py-1.5 px-3 text-neutral-4 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                        For long stays
                    </span>
                </ul>
                <FilterDropdown title="Entire homes" isHidden={true}>
                    <span className="py-2.5 px-3.5">Entire homes</span>
                    <span className="py-2.5 px-3.5">Cancellation flexibility</span>
                    <span className="py-2.5 px-3.5">Closest beach</span>
                    <span className="py-2.5 px-3.5">For long stays</span>
                </FilterDropdown>
                <FilterDropdown title="On Sales">
                    <span className="py-2.5 px-3.5">On Sales</span>
                    <span className="py-2.5 px-3.5">On delivery</span>
                    <span className="py-2.5 px-3.5">In exchange</span>
                </FilterDropdown>
            </div>
        </div>
    );
}

export default Header;
