import React from "react";

const Form = () => {
    return (
        <div>
            <input type="text" placeholder="Share your thoughts" />
            <div className="inline-flex">
                <span>
                    <svg className="w-6 h-6">
                        <use href="#smile"></use>
                    </svg>
                </span>
                <span className="inline-flex">
                    <span className="hidden lg:inline-block">Post it!</span>
                    <svg className="w-6 h-6">
                        <use href="#arrow-right"></use>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Form;
