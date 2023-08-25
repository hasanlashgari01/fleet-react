function Product({ title, subTitle, price, offPrice, startDate, endDate, score, children }) {
    return (
        <div className="group w-[267px] lg:w-full mx-auto bg-neutral-8 dark:bg-neutral-2 border border-neutral-6 dark:border-neutral-2 rounded-2xl overflow-hidden">
            <div className="w-full h-56 overflow-hidden">
                <img
                    src="/src/assets/images/products/Product-2.jpg"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
            </div>
            <div className="p-5">
                <div className="space-y-2" >
                    <div className="flex justify-between">
                        <div className="w-[151px]">
                            <h3 className="text-neutral-1 dark:text-neutral-8 font-PoppinsMedium text-base line-clamp-1">
                                {title}
                            </h3>
                            <h4 className="text-neutral-3 dark:text-neutral-6 font-PoppinsRegular text-xs/5 line-clamp-1">
                                {subTitle}
                            </h4>
                        </div>
                        <div className="flex items-center flex-col gap-y-1.5 px-2 py-1.5 font-PoppinsBold text-xs/3 uppercase border-2 border-primary-4 rounded">
                            <span className="text-neutral-5 dark:text-neutral-4 line-through">${offPrice}</span>
                            <span className="text-primary-4">${price}</span>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="my-4 w-full h-[1px] bg-neutral-6 dark:bg-neutral-3 rounded-sm"></div>
                <div className="flex justify-between">
                    <span className="text-neutral-4 text-xs/5 font-PoppinsRegular">
                        {startDate} - {endDate}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-xs/5">
                        <svg className="w-3 h-3">
                            <use href="#star"></use>
                        </svg>
                        {score}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Product;
