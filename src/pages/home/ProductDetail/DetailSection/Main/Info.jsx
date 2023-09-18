const Info = () => {
    return (
        <div className="flex gap-x-4 text-neutral-4 text-xs">
            <span className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                    <use href="#home"></use>
                </svg>
                2 guests
            </span>
            <span className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                    <use href="#flag"></use>
                </svg>
                1 bedroom
            </span>
            <span className="hidden lg:flex items-center gap-x-2">
                <svg className="w-5 h-5">
                    <use href="#home"></use>
                </svg>
                1 private bath
            </span>
        </div>
    );
};

export default Info;
