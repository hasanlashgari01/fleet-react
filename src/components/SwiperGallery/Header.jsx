import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Header = ({ isGalleryOpen, setIsGalleryOpen }) => {
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // disable scroll
        searchParams.get("isOpen") === "true" && setIsGalleryOpen(true);
    }, [searchParams]);

    const closeModal = () => {
        setIsGalleryOpen(false);
        setSearchParams();
    };

    return (
        <div className="flex justify-between items-center">
            <span className="shrink-0 flex justify-center items-center gap-3 py-3 px-4 rounded-full lg:cursor-pointer origin-[25%] text-white border-2 border-neutral-4 transition-transform duration-300">
                <svg className="w-4 h-4 text-white">
                    <use href="#image"></use>
                </svg>
                <span className="font-DMSansBold text-sm/4">Show all photos</span>
            </span>
            <div className=" flex items-center gap-4">
                <span className="product-header__icon-wrapper group border-neutral-3 hidden xs:inline-block">
                    <svg className="product-header__icon">
                        <use href="#share-square"></use>
                    </svg>
                </span>
                <span className="product-header__icon-wrapper group border-neutral-3">
                    <svg className="product-header__icon">
                        <use href="#heart"></use>
                    </svg>
                </span>
                <span className="product-header__icon-wrapper group border-neutral-3" onClick={closeModal}>
                    <svg className="product-header__icon p-0.5">
                        <use href="#close"></use>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Header;
