import { Link } from "react-router-dom";

const ProductInfo = () => {
    return (
        <div className="flex gap-x-3">
            <Link to="/">
                <svg className="inline-block lg:hidden w-10 h-10 text-neutral-2 dark:text-neutral-8">
                    <use href="#arrow-left-simple"></use>
                </svg>
            </Link>
            <div>
                <h1 className="max-w-lg text-neutral-2 dark:text-neutral-8 font-DMSansBold text-2xl sm:text-[32px]/10 tracking-[-0.32px] line-clamp-2">
                    Spectacular views of Queenstown
                </h1>
                <div className="flex items-center mt-3 lg:mt-4 gap-x-5">
                    <img
                        src="/src/assets/images/Profile-1.jpg"
                        alt=""
                        className="w-6 aspect-square object-cover rounded-full"
                    />
                    <span className="inline-flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                            <use href="#star"></use>
                        </svg>
                        <span className="text-neutral-2 dark:text-neutral-8">4.8</span>
                    </span>
                    <span className="inline-flex items-center gap-x-2 text-neutral-4">
                        <svg className="w-5 h-5">
                            <use href="#home"></use>
                        </svg>
                        Superhost
                    </span>
                    <span className="hidden lg:inline-flex items-center gap-x-2 text-neutral-4">
                        <svg className="w-5 h-5">
                            <use href="#flag"></use>
                        </svg>
                        Queenstown, Otago, New Zealand
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
