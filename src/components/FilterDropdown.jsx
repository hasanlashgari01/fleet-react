function FilterDropdown({ title, isHidden }) {
    return (
        <div
            className={`w-full xs:w-64 flex max-lg:flex-auto justify-between items-center py-2 pl-4 pr-2 bg-neutral-8 border-2 border-neutral-6 rounded-xl cursor-pointer ${
                isHidden ? "lg:hidden" : ""
            }`}
        >
            <span className="text-neutral-2 font-PoppinsMedium text-sm/6">{title}</span>
            <span className="p-1">
                <svg className="w-6 h-6 text-neutral-4 border-2 border-neutral-6 rounded-full">
                    <use href="#arrow-down-simple"></use>
                </svg>
            </span>
        </div>
    );
}

export default FilterDropdown;
