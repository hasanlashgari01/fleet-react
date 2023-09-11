import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Footer() {
    return (
        <footer className="container pt-16 pb-6 lg:pt-20 lg:pb-0">
            <div className="flex flex-col lg:flex-row items-start gap-y-12 justify-between">
                <Logo />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-14 justify-between">
                    <Link
                        to=""
                        className="text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-7 font-DMSansBold text-sm/4 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to=""
                        className="text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-7 font-DMSansBold text-sm/4 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        to=""
                        className="text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-7 font-DMSansBold text-sm/4 transition-colors"
                    >
                        What We Do
                    </Link>
                    <Link
                        to=""
                        className="text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-7 font-DMSansBold text-sm/4 transition-colors"
                    >
                        Press
                    </Link>
                    <Link
                        to=""
                        className="text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-7 font-DMSansBold text-sm/4 transition-colors"
                    >
                        Jobs
                    </Link>
                    <Link
                        to=""
                        className="text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-7 font-DMSansBold text-sm/4 transition-colors"
                    >
                        Download
                    </Link>
                </div>
                <div>
                    <h4 className="text-neutral-2 dark:text-neutral-6 font-PoppinsBold text-xs/3 uppercase">
                        Join our community 🔥
                    </h4>
                    <div className="form__item-wrapper xs:w-80 lg:w-64">
                        <input type="email" placeholder="Enter your email" className="form__item-input" />
                        <span className="form__item-btn">
                            <svg className="w-6 h-6 text-neutral-8">
                                <use href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-12 py-6 text-neutral-2 dark:text-neutral-4 font-PoppinsMedium text-xs/5 border-t border-neutral-7 dark:border-neutral-2">
                Copyright © 2021 UI8 LLC. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
