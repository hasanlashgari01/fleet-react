import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-x-2">
                <svg className="w-4 h-4">
                    <use href="#global"></use>
                </svg>
                <Link to="https://ui8.net" className="underline font-DMSansBold text-sm/4">
                    UI8
                </Link>
            </div>
            <div className="flex justify-center gap-x-2 mt-8">
                <Link className="py-3 px-4 bg-neutral-2 text-neutral-8 font-DMSansBold text-sm/4 rounded-full">Contact</Link>
                <span className="p-2.5 border-2 border-neutral-6 rounded-full">
                    <svg className="w-4 h-4">
                        <use href="#share-square"></use>
                    </svg>
                </span>
                <span className="p-2.5 border-2 border-neutral-6 rounded-full">
                    <svg className="w-4 h-4">
                        <use href="#more"></use>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Contact;
