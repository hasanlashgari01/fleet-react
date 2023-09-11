import SectionTop from "../../components/SectionTop";
import { Accordion } from "../../components/Accordion";
import { useRef, useState } from "react";

function FAQ() {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const valueDropdownRef = useRef("");

    const dropdownItemHandler = (e) => {
        let headerDropdown = valueDropdownRef.current;
        headerDropdown.innerHTML = e.target.innerHTML;
        let options = headerDropdown.parentElement.nextElementSibling;
        options.childNodes.forEach((item) => {
            item.classList.contains("bg-neutral-6") && item.classList.remove("bg-neutral-6");
        });
        e.target.classList.add("bg-neutral-6");
    };

    return (
        <div className="mb-16 lg:mb-28 2xl:mb-34">
            <SectionTop title="Frequently Asked Questions" />
            {/* Option */}
            <div className="mt-10 lg:mt-12">
                <ul className="faq">
                    <li className="faq__item faq__item--active">General</li>
                    <li className="faq__item">Support</li>
                    <li className="faq__item">Hosting</li>
                    <li className="faq__item">Product</li>
                </ul>
                <div className="relative block sm:hidden">
                    <div
                        className="flex justify-between p-3 border border-neutral-6 rounded-xl z-10"
                        onClick={() => setDropDownOpen(!dropDownOpen)}
                    >
                        <span ref={valueDropdownRef}>General</span>
                        <svg className={`w-6 h-6 shrink-0 transition-transform duration-200`}>
                            <use href="#arrow-down-simple" />
                        </svg>
                    </div>
                    <ul
                        className={`absolute w-full mt-3 bg-neutral-8 border border-neutral-6 rounded-xl transition-all duration-150 z-0 ease-in origin-top-right ${
                            dropDownOpen ? "scale-100 translate-y-2 visible" : "scale-50 -translate-y-5 invisible"
                        }`}
                    >
                        <li
                            className="p-3 bg-neutral-6 transition-colors duration-150 ease-linear"
                            onClick={dropdownItemHandler}
                        >
                            General
                        </li>
                        <li className="p-3 transition-colors duration-150 ease-linear" onClick={dropdownItemHandler}>
                            Support
                        </li>
                        <li className="p-3 transition-colors duration-150 ease-linear" onClick={dropdownItemHandler}>
                            Hosting
                        </li>
                        <li className="p-3 transition-colors duration-150 ease-linear" onClick={dropdownItemHandler}>
                            Product
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 lg:px-20 2xl:px-[272px]">
                {[0, 1, 2, 3, 4].map((item) => (
                    <Accordion
                        question="How does it work?"
                        answer="The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. 'Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
                    />
                ))}
            </div>
        </div>
    );
}

export default FAQ;
