import FilterDropdown from "../../components/FilterDropdown";

function Host() {
    return (
        <div className="container py-16">
            <div className="flex flex-wrap gap-6 justify-between items-center">
                <h1 className="text-neutral-2 font-DMSansBold text-[32px]/10 tracking-[-0.32px]">Best hosts</h1>
                <FilterDropdown title="Month">
                    <span className="py-2.5 px-3.5">Week</span>
                    <span className="py-2.5 px-3.5">Month</span>
                    <span className="py-2.5 px-3.5">Year</span>
                </FilterDropdown>
            </div>
        </div>
    );
}

export default Host;
