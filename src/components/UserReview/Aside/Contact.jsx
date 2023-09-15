import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-x-2">
                <svg className="w-4 h-4">
                    <use href="#global"></use>
                </svg>
                <Link
                    to="https://ui8.net"
                    className="text-neutral-2 dark:text-neutral-6 underline font-DMSansBold text-sm/4"
                >
                    UI8
                </Link>
            </div>
            <div className="flex justify-center gap-x-2 mt-8">
                <Link className="py-3 px-4 bg-neutral-2 dark:bg-neutral-8 text-neutral-8 dark:text-neutral-2 font-DMSansBold text-sm/4 rounded-full">
                    Contact
                </Link>
                <span className="group p-2.5 dark:hover:bg-neutral-3 border-2 border-neutral-6 dark:border-neutral-3 rounded-full lg:cursor-pointer transition-colors">
                    <svg className="w-4 h-4 text-neutral-4 dark:group-hover:text-neutral-6">
                        <use href="#share-square"></use>
                    </svg>
                </span>
                <span className="group p-2.5 dark:hover:bg-neutral-3 border-2 border-neutral-6 dark:border-neutral-3 rounded-full lg:cursor-pointer transition-colors">
                    <svg className="w-4 h-4 text-neutral-4 dark:group-hover:text-neutral-6">
                        <use href="#more"></use>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Contact;
