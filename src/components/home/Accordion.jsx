import { useRef, useState } from "react";

export const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex justify-between items-center py-6 border-b border-neutral-6 dark:border-neutral-3 font-medium cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center">
                    <div className="w-min shrink-0 mr-8">
                        <span className="text-neutral-4 font-semibold">01</span>
                    </div>
                    <h3 className="text-neutral-2 dark:text-neutral-8 font-bold text-xs sm:text-base">{question}</h3>
                </div>
                <svg className={`w-6 h-6 text-neutral-4 shrink-0 transition-transform duration-200`}>
                    <use href="#arrow-down-simple" />
                </svg>
            </div>

            {/* answer with transition */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in ${isOpen ? "max-h-40" : "max-h-0"}`}
            >
                <p className="text-neutral-4 py-4 pl-12 font-PoppinsRegular text-sm/6">{answer}</p>
            </div>
        </div>
    );
};
