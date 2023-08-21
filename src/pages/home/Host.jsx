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
            <div className="my-10">
                <div className="relative bg-neutral-8 border border-neutral-6 rounded-3xl overflow-hidden">
                    <span className="absolute top-5 left-4 flex items-center gap-x-1 py-0.5 px-2 bg-neutral-8 rounded-3xl">
                        <svg className="w-3 h-3">
                            <use href="#star"></use>
                        </svg>
                        <span className="text-neutral-2 font-PoppinsSemiBold text-xs/5">4.9</span>
                    </span>
                    <img
                        src="/src/assets/images/hosts/host-1.jpg"
                        alt=""
                        className="w-full aspect-square object-cover"
                    />
                    <div className="relative pt-14 pb-8 px-10 text-center">
                        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/3 w-20 h-20 border-4 border-neutral-8 rounded-full overflow-hidden bg-red-500">
                            <img src="/src/assets/images/Profile-1.jpg" alt="" className="w-full h-full aspect-square object-cover" />
                        </div>
                        <h3 className="text-neutral-2 font-PoppinsMedium text-base">Antone Heller</h3>
                        <span className="mt-1 text-neutral-4 text-xs/5">Gaylordside</span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Host;
