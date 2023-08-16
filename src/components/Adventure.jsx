import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionTop from "./SectionTop";
import "swiper/css";
import "swiper/css/navigation";

function Adventure() {
    const data = [
        { image: "/public/Holiday Summer.svg", title: "Luxury resort at the sea", count: "9,326" },
        { image: "/public/Holiday Camp.svg", title: "Camping amidst the wild", count: "2,326" },
        { image: "/public/Holiday Snow.svg", title: "Skiing in the Alps", count: "3,326" },
        { image: "/public/Holiday Summer.svg", title: "Luxury resort at the sea", count: "9,326" },
        { image: "/public/Holiday Camp.svg", title: "Camping amidst the wild", count: "2,326" },
        { image: "/public/Holiday Snow.svg", title: "Skiing in the Alps", count: "3,326" },
    ];

    return (
        <div className="pt-8 2xl:pt-14 pb-16 2xl:pb-[136px] px-4">
            <SectionTop />
            <Swiper
                slidesPerView={3}
                spaceBetween={32}
                breakpoints={{
                    375: {
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                    },
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
                                <img src={item.image} className="object-cover h-28 lg:h-40" alt="" />
                                <div>
                                    <h4 className="h-12 text-neutral-2 font-PoppinsMedium text-base line-clamp-2">
                                        {item.title}
                                    </h4>
                                    <span className="inline-block mt-2 pt-2 px-4 pb-1.5 bg-neutral-6 text-neutral-2 font-PoppinsBold text-xs/3 uppercase rounded-[32px]">
                                        {item.count} places
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className="text-center mt-8 lg:mt-12 -ml-12 space-x-2" >
                    <button className="image-swiper-button-prev border-2 border-transparent hover:border-neutral-6 disabled:border-none rounded-full transition-all duration-300 disabled:opacity-50" disabled>
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
    );
}

export default Adventure;
