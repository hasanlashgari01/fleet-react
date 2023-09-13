const Buttons = () => {
    return (
        <div className="flex items-center space-x-2">
            <span className="shrink-0 inline-flex justify-center items-center py-4 px-6 space-x-3 border-2 border-neutral-6 rounded-full">
                <span className="font-DMSansBold text-base/4 text-neutral-2">Save</span>
                <svg className="w-4 h-4 inline-block text-neutral-4">
                    <use href="#plus2"></use>
                </svg>
            </span>
            <span className="flex justify-center items-center flex-1 gap-x-3 py-4 px-6 bg-primary-1 text-neutral-8 text-center rounded-full">
                <span className="font-DMSansBold text-base/4">Reserve</span>
                <svg className="w-4 h-4 inline-block">
                    <use href="#shopping-bag"></use>
                </svg>
            </span>
        </div>
    );
};

export default Buttons;
