import { useState } from "react";
import Header from "./Header";
import SwiperGallery from "./SwiperGallery";

const Index = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    if (isGalleryOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div
            className={`fixed inset-0 flex flex-col gap-y-8 bg-neutral-1 text-neutral-8 py-10 lg:py-12 px-4 lg:px-20 z-50 transition-all ease-in duration-150 ${
                isGalleryOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            <Header isGalleryOpen={isGalleryOpen} setIsGalleryOpen={setIsGalleryOpen} />
            <SwiperGallery />
        </div>
    );
};

export default Index;
