import React from "react";
import Review from "./Review";

const Reviews = () => {
    return (
        <div>
            <div className="hidden lg:flex justify-between items-center">
                <h1 className="text-neutral-2 text-2xl font-PoppinsSemiBold">3 comments</h1>
                <div className="relative flex justify-between items-center w-40 py-2 px-4 border-2 border-neutral-6 rounded-2xl cursor-pointer">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-neutral-2 font-PoppinsMedium text-sm/6">Newest</span>
                        <span className="border-2 border-neutral-6 rounded-full">
                            <svg className="w-6 h-6">
                                <use href="#arrow-down-simple"></use>
                            </svg>
                        </span>
                    </div>
                    <ul className="absolute hidden top-14 left-0 right-0 flex-col gap-y-1 bg-neutral-8 border-2 border-neutral-6 rounded-2xl overflow-hidden">
                        <li className="py-2 px-4 bg-slate-200">Newest</li>
                        <li className="py-2 px-4">Oldest</li>
                        <li className="py-2 px-4">Cheapest</li>
                    </ul>
                </div>
            </div>
            <div>
                {[0, 1, 2].map((review, index) => (
                    <Review key={index} />
                ))}
                <div className="hidden lg:flex justify-center items-center w-fit mx-auto py-3 px-4 gap-x-3 mt-8 border-2 border-neutral-6 rounded-full cursor-pointer">
                    <svg className="w-4 h-4">
                        <use href="#loading"></use>
                    </svg>
                    <span>Loading comment</span>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
