import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionTop from "../SectionTop";
import Category from "./Category";

const BrowseByCategory = () => {
    return (
        <div className="space-wrapper">
            <div className="space-wrapper__top">
                <SectionTop title="Recommended pickup locations" description="A lot of amazing experiences 🏝" />
            </div>
            <div className="mt-12 2xl:mt-16">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={16}
                    breakpoints={{
                        568: {
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
                            slidesPerView: 4.6,
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
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Category />
                            </SwiperSlide>
                        );
                    })}

                    <div className="space-wrapper__slider mt-8 lg:mt-12 2xl:mt-16 text-center space-x-2">
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
        </div>
    );
};

export default BrowseByCategory;
