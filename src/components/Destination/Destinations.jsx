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
        <div className="pl-8 lg:pl-20 2xl:pl-40 pb-16 lg:pb-28 2xl:pb-34">
            <div className="-ml-8 lg:-ml-20 2xl:-ml-40">
                <SectionTop title="Popular destinations" description="for car rentals" />
            </div>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={16}
                breakpoints={{
                    450: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 2.2,
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 2.8,
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 3.2,
                        spaceBetween: 32,
                    },
                    1440: {
                        slidesPerView: 3.5,
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

                <div className="-ml-8 lg:-ml-20 2xl:-ml-40 mt-8 lg:mt-12 2xl:mt-16 text-center space-x-2">
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
