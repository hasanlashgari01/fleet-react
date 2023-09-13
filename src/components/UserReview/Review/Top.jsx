import React from "react";

const Top = () => {
    return (
        <div>
            <h3>Add a review</h3>
            <div>
                <div>
                    <span>Be the first to review</span>
                    <span className="ml-2">All Access Pass</span>
                </div>
                <div className="flex gap-x-1">
                    {[0, 1, 2, 3, 4].map((item, index) => (
                        <svg className="w-6 h-6" key={index}>
                            <use href="#star"></use>
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Top;
