import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTop from "../../../components/home/SectionTop.jsx";

function Adventure() {
    const data = [
        { image: "/src/assets/Holiday Summer.svg", title: "Luxury resort at the sea", count: "9,326" },
        { image: "/src/assets/Holiday Camp.svg", title: "Camping amidst the wild", count: "2,326" },
        { image: "/src/assets/Holiday Snow.svg", title: "Skiing in the Alps", count: "3,326" },
        { image: "/src/assets/Holiday Summer.svg", title: "Luxury resort at the sea", count: "9,326" },
        { image: "/src/assets/Holiday Camp.svg", title: "Camping amidst the wild", count: "2,326" },
        { image: "/src/assets/Holiday Snow.svg", title: "Skiing in the Alps", count: "3,326" },
    ];

    return (
        <div className="pt-8 2xl:pt-14 pb-16 2xl:pb-34 px-4">
            <SectionTop title="Let’s go on an adventure" description="Find and book a great experience." />
            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    480: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    568: {
                        slidesPerView: 1.4,
                        spaceBetween: 24,
                    },
                    768: {
                        slidesPerView: 1.6,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 2.45,
                        spaceBetween: 32,
                    },
                    1280: {
                        slidesPerView: 2.5,
                        spaceBetween: 32,
                    },
                }}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                }}
                modules={[Navigation]}
                className="my-8 m-4 lg:m-20 xl:mx-40 overflow-hidden"
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex items-center gap-x-4 w-full p-4 pr-6 select-none">
                                <img src={item.image} className="object-cover h-20 DEFAULT:h-28 lg:h-40" alt="" />
                                <div>
                                    <h4 className="h-12 text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base line-clamp-2">
                                        {item.title}
                                    </h4>
                                    <span className="inline-block mt-2 pt-2 px-4 pb-1.5 bg-neutral-6 dark:bg-neutral-3 text-neutral-2 dark:text-neutral-6 font-PoppinsBold text-xs/3 uppercase rounded-[32px]">
                                        {item.count} places
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className="text-center mt-8 lg:mt-12 space-x-2">
                    <button
                        className="image-swiper-button-prev dark:text-neutral-4 border-2 border-transparent hover:border-neutral-6 dark:hover:border-neutral-3 disabled:border-none rounded-full transition-all duration-300 disabled:opacity-50"
                        disabled
                    >
                        <svg className="w-10 h-10 p-2">
                            <use href="#arrow-left"></use>
                        </svg>
                    </button>
                    <button className="image-swiper-button-next dark:text-neutral-4 border-2 border-transparent hover:border-neutral-6 dark:hover:border-neutral-3 disabled:border-none rounded-full transition-all duration-300 disabled:opacity-50">
                        <svg className="w-10 h-10 p-2">
                            <use href="#arrow-right"></use>
                        </svg>
                    </button>
                </div>
            </Swiper>
        </div>
    );
}

export default Adventure;
