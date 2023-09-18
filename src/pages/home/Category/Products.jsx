import Product from "../../../components/home/Product.jsx";

function Products() {
    return (
        <div className="mt-20 mb-34">
            <h1 className="section__title">Over 300 stays</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, index) => (
                    <Product
                        key={index}
                        title="The grand resort"
                        subTitle="Yasminfurt"
                        offPrice="356"
                        price="267"
                        startDate="Tue, Jul 20"
                        endDate="Fri, Jul 23"
                        score="4.8"
                    >
                        <div className="flex gap-x-3 text-neutral-4 font-PoppinsRegular text-xs/5">
                            <span className="flex items-center gap-x-2 shrink-0">
                                <svg className="w-4 h-4">
                                    <use href="#modem"></use>
                                </svg>
                                Free wifi
                            </span>
                            <span className="flex items-center gap-x-2">
                                <svg className="w-4 h-4">
                                    <use href="#burger"></use>
                                </svg>
                                <span className="w-[140px] line-clamp-1">Breakfast included</span>
                            </span>
                        </div>
                    </Product>
                ))}
            </div>
        </div>
    );
}

export default Products;
