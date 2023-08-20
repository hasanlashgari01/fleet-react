import SectionTop from "../../components/SectionTop";

function ExploreNearby() {
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
        <div className="container py-16 lg:py-28 bg-neutral-7 rounded-3xl">
            <SectionTop title="Explore nearby" description="10,789 beautiful places to go" />
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 my-10 lg:mt-20 lg:mb-0 2xl: gap-x-8 gap-y-16">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center p-2 pb-6 bg-neutral-8 rounded-2xl">
                        <span className="self-start bg-neutral-7 py-2 px-3 text-neutral-4 font-PoppinsBold text-xs/3 rounded-[32px]">
                            {item.count}
                        </span>
                        <img src="/src/assets/images/products/nearby-product.jpg" alt="" className="my-4 w-20 h-20 object-cover rounded-full" />
                        <h3 className="text-neutral-2 font-PoppinsMedium text-base">{item.title}</h3>
                        <h5 className="mt-1 mb-10 lg:mb-0 text-neutral-4 font-PoppinsRegular text-xs/5">{item.time} drive</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreNearby;
