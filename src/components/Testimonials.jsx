import { useRef } from "react";
import TestimonialsUser from "./TestimonialsUser";

function Testimonials() {
    const videoRef = useRef(false);

    const videoHandler = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <div className="py-16 lg:py-28 2xl:py-[136px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <img src="" alt="" className="h-16" />
                    <p className="mt-8 lg:mt-12 sm:w-3/4 text-neutral-2 dark:text-neutral-8 font-PoppinsRegular text-2xl tracking-[-0.24px]">
                        “ Stacks is the cleanest design system I’ve used. It helps a lot of projects done without
                        thinking.Nice Work! “
                    </p>

                    <div className="mt-6">
                        <div className="flex gap-x-3">
                            <svg className="w-6 h-6">
                                <use href="#quete"></use>
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-sm/6">
                                    Megane Schumm
                                </span>
                                <span className="hidden"></span>
                                <span className="text-neutral-4 font-PoppinsRegular text-sm/[22px] tracking-[-0.28px]">
                                    Legacy Data Coordinator
                                </span>
                            </div>
                        </div>
                        <span className="inline-block mt-8 lg:mt-12 py-4 px-6 text-neutral-2 dark:text-neutral-8 font-DMSansBold leading-4 border-2 border-neutral-6 dark:border-neutral-4 rounded-full lg:cursor-pointer">
                            Case Study
                        </span>
                    </div>
                </div>

                <div className="relative mt-12 lg:mt-0 lg:max-w-[440px] rounded-2xl overflow-hidden">
                    <video
                        src="/src/assets/Testimonials.mp4"
                        alt=""
                        className="aspect-square sm:aspect-video lg:aspect-square object-cover"
                        ref={videoRef}
                    ></video>
                    <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center bg-neutral-8 drop-shadow-lg z-50 rounded-full lg:cursor-pointer"
                        onClick={videoHandler}
                    >
                        <svg className="w-4 h-4">
                            <use href="#play"></use>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="mt-11 lg:mt-20 flex flex-wrap lg:justify-between gap-y-4 gap-x-16">
                <TestimonialsUser />
                <TestimonialsUser />
                <TestimonialsUser />
                <TestimonialsUser />
            </div>
        </div>
    );
}

export default Testimonials;
