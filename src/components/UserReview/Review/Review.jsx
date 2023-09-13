import React from "react";

const Review = () => {
    return (
        <>
            <div className="flex gap-x-5 pt-8">
                <img
                    src="/src/assets/images/Profile-1.jpg"
                    alt=""
                    className="w-12 h-12 aspect-square object-cover rounded-full"
                />
                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="max-w-[130px] text-neutral-1 font-PoppinsMedium text-sm/6 line-clamp-1">Myrtie Runolfsson</h3>
                        <div className="flex gap-x-0.5">
                            {[0, 1, 2, 3, 4].map((item, index) => (
                                <svg className="w-4 h-4" key={index}>
                                    <use href="#star"></use>
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="mt-1 text-neutral-3 font-PoppinsRegular text-sm sm:text-base">
                        We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to
                        no air conditioning and no shade.
                    </p>
                    <div className="mt-2 space-x-4"> 
                        <span className="text-neutral-4 font-PoppinsRegular text-xs/5">about 1 hour ago</span>
                        <span className="text-neutral-2 font-PoppinsSemiBold text-xs/5 lg:cursor-pointer">Like</span>
                        <span className="text-neutral-2 font-PoppinsSemiBold text-xs/5 lg:cursor-pointer">Reply</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-neutral-6 mt-[27px]"></div>
        </>
    );
};

export default Review;
