import FilterDropdown from "./FilterDropdown";
import Product from "./Product";
import SectionTop from "./SectionTop";

function ProductCard() {
    return (
        <div className="sm:container space-y-12 py-16 lg:py-10 2xl:py-20 bg-neutral-7 rounded-3xl">
            <SectionTop title="Go somewhere" description="Let’s go on an adventure" />
            <div>
                <div className="flex flex-wrap gap-4 justify-between items-center">
                    <ul className="hidden lg:inline-block space-x-4">
                        <span className="inline-flex gap-x-2 py-1.5 px-3 bg-neutral-3 text-neutral-8 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                            <svg className="w-4 h-4">
                                <use href="#coin"></use>
                            </svg>
                            Featured
                        </span>
                        <span className="inline-flex gap-x-2 py-1.5 px-3 text-neutral-4 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                            <svg className="w-4 h-4">
                                <use href="#coin"></use>
                            </svg>
                            Family-friendly
                        </span>
                        <span className="inline-flex gap-x-2 py-1.5 px-3 text-neutral-4 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                            <svg className="w-4 h-4">
                                <use href="#coin"></use>
                            </svg>
                            On sale
                        </span>
                        <span className="inline-flex gap-x-2 py-1.5 px-3 text-neutral-4 font-DMSansBold text-sm/4 cursor-pointer rounded-full">
                            <svg className="w-4 h-4">
                                <use href="#coin"></use>
                            </svg>
                            Sub nav
                        </span>
                    </ul>
                    <FilterDropdown title="Featured" isHidden={true}>
                        <span className="py-2.5 px-3.5">Featured</span>
                        <span className="py-2.5 px-3.5">Family-friendly</span>
                        <span className="py-2.5 px-3.5">On sale</span>
                        <span className="py-2.5 px-3.5">Sub nav</span>
                    </FilterDropdown>
                    <FilterDropdown title="Recently added">
                        <span className="py-2.5 px-3.5">Recently added</span>
                        <span className="py-2.5 px-3.5">Long added</span>
                    </FilterDropdown>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-12">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
                        <Product
                            key={index}
                            title="The grand resort"
                            subTitle="Yasminfurt"
                            offPrice="356"
                            price="267"
                            startDate="Tue, Jul 20"
                            endDate="Fri, Jul 23"
                            score="4.8"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
