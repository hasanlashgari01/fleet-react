import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FilterDropdown from "../../components/FilterDropdown";
import "swiper/css";
import "swiper/css/navigation";

function Host() {
    const data = [1, 2, 3, 4];

    return (
        <div className="container py-16 lg:pt-28 lg:pb-[136px]">
            <div className="flex flex-wrap gap-6 justify-between items-center">
                <h1 className="text-neutral-2 dark:text-neutral-8 font-DMSansBold text-[32px]/10 tracking-[-0.32px]">
                    Best hosts
                </h1>
                <FilterDropdown title="Month">
                    <span className="py-2.5 px-3.5">Week</span>
                    <span className="py-2.5 px-3.5">Month</span>
                    <span className="py-2.5 px-3.5">Year</span>
                </FilterDropdown>
            </div>
            <div className="mt-10">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={16}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        568: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 32,
                        },
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation]}
                    className="overflow-hidden"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-neutral-8 dark:bg-neutral-2 border border-neutral-6 dark:border-neutral-3 rounded-3xl overflow-hidden">
                                <span className="absolute top-5 left-4 flex items-center gap-x-1 py-0.5 px-2 bg-neutral-8 dark:bg-neutral-2 rounded-3xl">
                                    <svg className="w-3 h-3">
                                        <use href="#star"></use>
                                    </svg>
                                    <span className="text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-xs/5">
                                        4.9
                                    </span>
                                </span>
                                <img
                                    src="/src/assets/images/hosts/host-1.jpg"
                                    alt=""
                                    className="w-full aspect-square object-cover"
                                />
                                <div className="relative pt-14 pb-8 px-10 text-center">
                                    <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/3 w-20 h-20 border-4 border-neutral-8 dark:border-neutral-2 rounded-full overflow-hidden bg-red-500">
                                        <img
                                            src="/src/assets/images/Profile-1.jpg"
                                            alt=""
                                            className="w-full h-full aspect-square object-cover"
                                        />
                                    </div>
                                    <h3 className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base">
                                        Antone Heller
                                    </h3>
                                    <span className="mt-1 text-neutral-4 text-xs/5">Gaylordside</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="text-center mt-10 space-x-2">
                        <button
                            className="image-swiper-button-prev border-2 border-transparent hover:border-neutral-6 disabled:border-none rounded-full transition-all duration-300 disabled:opacity-50"
                            disabled
                        >
                            <svg className="w-10 h-10 p-2">
                                <use href="#arrow-left"></use>
                            </svg>
                        </button>
                        <button className="image-swiper-button-next border-2 border-transparent hover:border-neutral-6 disabled:border-none rounded-full transition-all duration-300 disabled:opacity-50">
                            <svg className="w-10 h-10 p-2">
                                <use href="#arrow-right"></use>
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default Host;
