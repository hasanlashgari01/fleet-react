import { useState } from "react";

const Gallery = () => {
    return (
        <div className="container mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 mx-auto gap-2 xl:w-9/12">
                <div className="md:col-span-3 xl:col-span-6 rounded-2xl overflow-hidden">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-1 xl:col-span-2 gap-2 child:rounded-2xl">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
