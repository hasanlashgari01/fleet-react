function AmazingCard({ fillIcon, title }) {
    return (
        <div className={`group flex-1 basis-64 bg-neutral-7 dark:bg-neutral-2 py-12 px-6 space-y-3 rounded-[20px] hover:bg-primary-2/30 dark:hover:bg-primary-2/30 transition-colors duration-300 ease-linear`}>
            <svg className={`w-12 h-12 ${fillIcon} group-hover:text-white transition-colors duration-300 ease-linear`}>
                <use href="#two-circle"></use>
            </svg>
            <div>
                <h3 className="font-PoppinsMedium text-neutral-2 dark:text-neutral-8">{title}</h3>
                <p className="mt-4 font-PoppinsRegular text-neutral-4 group-hover:text-neutral-5 dark:group-hover:text-neutral-5 text-sm/6">
                    We realize ideas from simple to complex, everything becomes easy to use and reach the most potential
                    customers.
                </p>
            </div>
        </div>
    );
}

export default AmazingCard;
