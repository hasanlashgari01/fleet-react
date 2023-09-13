import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-8 border-t border-neutral-6">
            <span className="text-neutral-4 text-xs/5 font-PoppinsRegular text-center">Member since Mar 15, 2017</span>
            <span className="flex justify-center items-center gap-x-2 mt-4 text-neutral-4">
                <svg className="w-3 h-3">
                    <use href="#flag"></use>
                </svg>
                <span className="text-xs/5 font-PoppinsRegular">Report this host</span>
            </span>
        </div>
    );
};

export default Footer;
