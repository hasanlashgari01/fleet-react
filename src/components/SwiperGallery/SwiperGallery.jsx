import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
// import "swiper/css/pagination";

const data = [
    { id: 1, title: "Spectacular views of Queenstown" },
    { id: 2, title: "BMW i1 – 2021" },
    { id: 3, title: "BMW i1 – 2022" },
    { id: 4, title: "BMW i1 – 2023" },
];

const SwiperGallery = () => {
    return (
        <div className="flex flex-col gap-y-6 h-full">
            <div className="flex justify-center lg:items-center gap-10 2xl:gap-20 h-full">
                <button
                    className="image-swiper-button-prev max-lg:hidden border-2 border-neutral-4 disabled:border-neutral-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                >
                    <svg className="w-10 h-10 p-2">
                        <use href="#arrow-left"></use>
                    </svg>
                </button>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={32}
                    pagination={{
                        type: "fraction",
                        el: ".swiper-pagination",
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Pagination, Navigation]}
                    className="w-full md:h-[510px] lg:h-[536px]"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src="/src/assets/images/destinations/destinations-1.jpg"
                                alt=""
                                className="h-full md:w-full object-cover rounded-2xl overflow-hidden"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="image-swiper-button-next max-lg:hidden border-2 border-neutral-4 disabled:border-neutral-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg className="w-10 h-10 p-2">
                        <use href="#arrow-right"></use>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col gap-y-6 basis-16">
                <h5 className="text-center text-base font-PoppinsMedium text-neutral-8">
                    Spectacular views of Queenstown
                </h5>
                <h5 className="absolute left-1/2 max-lg:bottom-10 lg:top-16 -translate-x-1/2 text-center font-PoppinsSemiBold text-sm/4 text-neutral-4 swiper-pagination">
                    1 / 24
                </h5>
            </div>
        </div>
    );
};

export default SwiperGallery;
