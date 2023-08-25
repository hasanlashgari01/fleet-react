import React from "react";
import FilterDropdown from "../../components/FilterDropdown";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="mt-64 xs:mt-10 lg:mt-12">
            <div className="flex justify-between">
                <div className="flex gap-x-3">
                    <Link to="/">
                        <svg className="inline-block lg:hidden w-10 h-10 text-neutral-2 dark:text-neutral-8">
                            <use href="#arrow-left-simple"></use>
                        </svg>
                    </Link>
                    <div>
                        <h1 className="text-neutral-2 dark:text-neutral-8 font-DMSansBold text-[32px]/10">
                            Places to stay
                        </h1>
                        <div className="mt-3 space-x-4">
                            <span className="py-1.5 px-2 text-primary-4 font-PoppinsBold text-xs/3 uppercase border-2 border-primary-4 rounded">
                                300+ stays
                            </span>
                            <span className="text-neutral-2 dark:text-neutral-8 font-PoppinsRegular text-xs/5 lg:text-base/6">
                                May 1 - 14, 2 guests
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:inline-flex items-center gap-x-3 h-fit py-3 px-6 border-2 border-neutral-6 dark:border-neutral-3 rounded-full">
                    <span className="text-neutral-2 dark:text-neutral-8 font-DMSansBold leading-4 cursor-pointer">Advanced filter</span>
                    <svg className="w-4 h-4 text-neutral-4">
                        <use href="#plus2"></use>
                    </svg>
                </div>
            </div>
            <span className="inline-block my-8 w-full h-[1px] bg-neutral-6 dark:bg-neutral-3"></span>
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
