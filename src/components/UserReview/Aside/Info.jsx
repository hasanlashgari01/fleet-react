import React from "react";

const Info = () => {
    return (
        <div className="flex justify-center items-center flex-col space-y-8">
            <div className="flex gap-x-4 px-6 p-2 lg:px-2 bg-neutral-7 rounded-[20px]">
                <span className="flex gap-x-2 text-neutral-4 text-sm/6">
                    <svg className="w-5 h-5">
                        <use href="#home"></use>
                    </svg>
                    Superhost
                </span>
                <span className="flex gap-x-2 text-neutral-4 text-sm/6">
                    <svg className="w-5 h-5">
                        <use href="#star"></use>
                    </svg>
                    256 reviews
                </span>
            </div>
            <p className="text-neutral-4 font-PoppinsRegular text-sm/6 text-center">
                Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you
                will love relaxing in this newly built
            </p>
        </div>
    );
};

export default Info;
