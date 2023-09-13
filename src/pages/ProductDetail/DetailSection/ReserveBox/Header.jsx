const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <div>
                    <span className="text-neutral-5 font-DMSansBold text-[32px]/10 tracking-[-0.32px]">$119</span>
                    <span className="text-neutral-2 font-DMSansBold text-[32px]/10 ml-3">$102</span>
                    <span className="text-neutral-4 font-PoppinsRegular text-base ml-2.5">/night</span>
                </div>
                <div className="flex items-center mt-2">
                    <svg className="w-5 h-5">
                        <use href="#star"></use>
                    </svg>
                    <span className="font-PoppinsMedium text-sm/6 text-neutral-2 ml-2">4.8</span>
                    <span className="font-PoppinsRegular text-sm/6 text-neutral-4 ml-2">(256 reviews)</span>
                </div>
            </div>
            <div className="relative w-16 aspect-square shrink-0 h-full">
                <img
                    src="/src/assets/images/Profile-1.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                />
                <svg className="absolute top-0 right-0 w-6 h-6 text-neutral-8 bg-primary-4 rounded-full">
                    <use href="#check"></use>
                </svg>
            </div>
        </div>
    );
};

export default Header;
