import { Link } from "react-router-dom";

function Breadcrumbs({ subs }) {
    const subsSlice = subs.slice(0, -1);

    return (
        <div className="hidden lg:flex items-center justify-between">
            <Link
                to="/"
                className="inline-flex items-center gap-x-3 py-3 px-4 hover:bg-neutral-6 dark:hover:bg-neutral-3 text-neutral-2 dark:text-neutral-8 font-DMSansBold text-sm/4 border-2 border-neutral-6 dark:border-neutral-3 rounded-full transition-colors duration-300"
            >
                <svg className="w-6 h-6 text-neutral-5">
                    <use href="#arrow-right-simple"></use>
                </svg>
                Go home
            </Link>
            <div>
                <ul className="flex gap-x-2">
                    <Link to="/" className="flex items-center gap-x-2 text-neutral-4 font-DMSansBold text-sm/4">
                        Home
                        <svg className="w-6 h-6 text-neutral-5">
                            <use href="#arrow-right-simple"></use>
                        </svg>
                    </Link>
                    {subs.length > 1 &&
                        subsSlice.map((sub, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-x-2 text-neutral-4 font-DMSansBold text-sm/4"
                            >
                                {sub}
                                <svg className="w-6 h-6 text-neutral-5">
                                    <use href="#arrow-right-simple"></use>
                                </svg>
                            </li>
                        ))}
                    <Link className="flex items-center text-neutral-5 font-DMSansBold text-sm/4">{subs.slice(-1)}</Link>
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumbs;
