import SectionTop from "./SectionTop";

function Host({ title, description, score }) {
    const data = [
        { id: 1, count: 1480, title: "Thompsonbury", time: "15 minutes" },
        { id: 2, count: 1840, title: "Hudsontown", time: "2 hours" },
        { id: 3, count: 1250, title: "Lake Marcelle", time: "15 minutes" },
        { id: 4, count: 1250, title: "New Keagan", time: "15 minutes" },
        { id: 5, count: 1250, title: "MacGyverton", time: "2 hours" },
        { id: 6, count: 1250, title: "North Justen", time: "2 hours" },
        { id: 7, count: 1250, title: "Port Elyseberg", time: "15 minutes" },
        { id: 8, count: 1250, title: "Danielmouth", time: "2 hours" },
        { id: 9, count: 1250, title: "Russelville", time: "15 minutes" },
    ];

    return (
        <div className="p-16 lg:py-28 bg-neutral-7 dark:bg-neutral-1 dark:border-2 border-neutral-2 rounded-3xl">
            <SectionTop title={title} description={description} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 lg:mt-20 lg:mb-0 2xl: gap-x-8 gap-y-16">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col items-center w-full p-2 pb-6 bg-neutral-8 dark:bg-neutral-2 rounded-2xl"
                    >
                        {score && (
                            <span className="absolute flex items-center gap-x-1 top-[11px] right-2 text-neutral-2 dark:text-neutral-8 font-PoppinsBold text-xs/5 rounded-[32px]">
                                <svg className="w-3 h-3" >
                                    <use href="#star"></use>
                                </svg>
                                {score}
                            </span>
                        )}
                        <span className="self-start bg-neutral-7 dark:bg-neutral-1 py-2 px-3 text-neutral-4 font-PoppinsBold text-xs/3 rounded-[32px]">
                            {item.count}
                        </span>
                        <img
                            src="/src/assets/images/products/nearby-product.jpg"
                            alt=""
                            className="my-4 w-20 h-20 object-cover rounded-full"
                        />
                        <h3 className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base">
                            {item.title}
                        </h3>
                        <h5 className="mt-1 mb-10 lg:mb-0 text-neutral-4 font-PoppinsRegular text-xs/5">
                            {item.time} drive
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Host;
