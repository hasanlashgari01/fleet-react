import { useState } from "react";

const Gallery = () => {
    return (
        <div className="container mt-8">
            <div className="relative group grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 mx-auto gap-2 xl:w-9/12">
                <div className="md:col-span-3 xl:col-span-6 rounded-2xl overflow-hidden">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-1 xl:col-span-2 gap-2 child:rounded-2xl">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <span className="absolute scale-0 group-hover:scale-100 left-6 bottom-6 flex justify-center items-center gap-3 bg-neutral-8 text-neutral-2 py-3 px-4 rounded-full lg:cursor-pointer origin-[25%] transition-transform duration-300">
                    <svg className="w-4 h-4">
                        <use href="#image"></use>
                    </svg>
                    <span className="font-DMSansBold text-sm/4">Show all photos</span>
                </span>
            </div>
        </div>
    );
};

export default Gallery;
