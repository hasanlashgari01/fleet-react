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
                    <div>
                        <h3>Myrtie Runolfsson</h3>
                        <div className="flex gap-x-0.5">
                            {[0, 1, 2, 3, 4].map((item, index) => (
                                <svg className="w-4 h-4" key={index}>
                                    <use href="#star"></use>
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p>
                        We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to
                        no air conditioning and no shade.
                    </p>
                    <div>
                        <span>about 1 hour ago</span>
                        <span>Like</span>
                        <span>Reply</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-neutral-6 mt-[27px]"></div>
        </>
    );
};

export default Review;
