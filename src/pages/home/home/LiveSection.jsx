import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTop from "../../../components/home/SectionTop.jsx";

function LiveSection() {
    const data = [
        { image: "/src/assets/images/products/Live-Product-1.jpg", title: "Solo Landing Kit", count: "6,879" },
        {
            image: "/src/assets/images/products/Live-Product-1.jpg",
            title: "Pick up the earliest sunrise",
            count: "9,849",
        },
        { image: "/src/assets/images/products/Live-Product-1.jpg", title: "Unique stay", count: "12,879" },
    ];

    return (
        <div className="container pb-16">
            <SectionTop title="Stunning Work" description="Keep calm & travel on" />
            <div className="mt-16">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={32}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.6,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation]}
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="group flex flex-col items-center w-full select-none">
                                    <div className="w-[266px] h-[375px] overflow-hidden rounded-2xl">
                                        <img
                                            src={item.image}
                                            className="object-cover w-full h-full group-hover:scale-125 transition-transform duration-1000"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="mt-6 text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base line-clamp-1">
                                            {item.title}
                                        </h4>
                                        <span className="inline-block mt-2 text-neutral-4 font-PoppinsRegular text-sm/6">
                                            {item.count} properties
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    <div className="text-center mt-8 lg:mt-12 space-x-2">
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

export default LiveSection;
