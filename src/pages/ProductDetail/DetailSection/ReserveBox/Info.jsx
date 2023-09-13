const Info = () => {
    return (
        <div className="p-2 bg-neutral-7 rounded-[20px]">
            <div className="flex flex-wrap gap-2">
                <div className="flex items-start flex-1 gap-x-4 p-2 lg:p-4">
                    <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                        <use href="#calendar"></use>
                    </svg>
                    <div className="flex flex-col">
                        <input
                            id="date"
                            type="text"
                            placeholder="Check in"
                            className="w-full bg-transparent text-neutral-4 font-PoppinsRegular text-sm outline-0"
                        />
                        <label htmlFor="location" className="text-neutral-2 font-PoppinsMedium text-base">
                            May 15, 2023
                        </label>
                    </div>
                </div>
                <div className="flex items-start flex-1 gap-x-4 p-2 lg:p-4">
                    <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                        <use href="#calendar"></use>
                    </svg>
                    <div className="flex flex-col">
                        <input
                            id="location"
                            type="text"
                            placeholder="Check out"
                            className="w-full bg-transparent text-neutral-4 font-PoppinsRegular text-sm outline-0"
                        />
                        <label
                            htmlFor="location"
                            className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base"
                        >
                            May 22, 2023
                        </label>
                    </div>
                </div>
                <div className="relative flex items-start gap-x-4 p-2 lg:p-4 shrink-0">
                    <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                        <use href="#user"></use>
                    </svg>
                    <div className="flex flex-col">
                        <input
                            id="guest"
                            type="text"
                            placeholder="Guest"
                            className="w-full bg-transparent text-neutral-4 font-PoppinsRegular text-sm outline-0"
                            readOnly
                        />
                        <label
                            htmlFor="travelers"
                            className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base"
                        >
                            2 guests
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
