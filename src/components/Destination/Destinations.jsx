import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionTop from "../SectionTop";
import Destination from "./Destination";

function Destinations() {
    const data = [
        { id: "1", title: "Paris" },
        { id: "2", title: "London" },
        { id: "3", title: "Ams" },
        { id: "4", title: "Milan" },
    ];
    return (
        <div className="pb-[136px]">
            <SectionTop title="Popular destinations" description="for car rentals" />
            <Swiper
                slidesPerView={1.1}
                spaceBetween={16}
                breakpoints={{
                    480: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    568: {
                        slidesPerView: 1.8,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 2.8,
                        spaceBetween: 32,
                    },
                    1280: {
                        slidesPerView: 3.5,
                        spaceBetween: 32,
                    },
                }}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                }}
                modules={[Navigation]}
                className="my-8 m-4 lg:my-12 overflow-hidden"
            >
                {data.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Destination title={item.title} />
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

export default Destinations;
