import React from "react";
import Review from "./Review";

const Reviews = () => {
    return (
        <div>
            <div className="hidden">
                <h1>3 comments</h1>
                <div>
                    <span>Newest</span>
                    <span>
                        <svg className="w-6 h-6">
                            <use href="#arrow-down"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                {[0, 1, 2].map((review, index) => (
                    <Review key={index} />
                ))}
                <span className="hidden lg:flex justify-center items-center gap-x-3 mt-8">
                    <svg className="w-4 h-4">
                        <use href="#loading"></use>
                    </svg>
                    <span>Loading comment</span>
                </span>
            </div>
        </div>
    );
};

export default Reviews;
