import { useState } from "react";

function FilterDropdown({ title, isHidden, children }) {
    const [isDropdown, setIsDropdown] = useState(false);

    return (
        <div
            className={`relative w-full xs:w-64 max-lg:mx-8 flex max-lg:flex-auto bg-neutral-8 border-2 border-neutral-6 rounded-xl cursor-pointer select-none ${
                isHidden ? "lg:hidden" : ""
            }`}
        >
            <div
                className="w-full flex justify-between items-center py-2 pl-4 pr-2"
                onClick={() => setIsDropdown(!isDropdown)}
            >
                <span className="text-neutral-2 font-PoppinsMedium text-sm/6">{title}</span>
                <span className="p-1">
                    <svg className="w-6 h-6 text-neutral-4 border-2 border-neutral-6 rounded-full">
                        <use href="#arrow-down-simple"></use>
                    </svg>
                </span>
            </div>
            <div
                className={`absolute w-full h-fit top-full left-0 mt-1 origin-top transition-all duration-200 ease-linear z-40 ${
                    isDropdown ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
                }`}
            >
                <ul className="grid grid-cols-1 w-full bg-neutral-8 border-2 border-neutral-6 rounded-xl font-PoppinsMedium text-neutral-4 text-sm/6">
                    {children}
                </ul>
            </div>
        </div>
    );
}

export default FilterDropdown;
