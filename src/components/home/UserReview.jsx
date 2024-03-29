function UserReview({ style }) {
    return (
        <div
            className={`absolute ${style} flex gap-x-4 h-20 p-4 pr-8 lg:animate-pulse bg-gradient-to-tr from-gradient-2 dark:from-neutral-2 from-0% to-gradient-2/[83%] dark:to-neutral-2/70 to-100% rounded-full`}
        >
            <img src="/src/assets/images/Profile-1.jpg" className="shrink-0 w-12 h-12 rounded-full" alt="" />
            <div className="shrink-0">
                <h3 className="text-neutral-2 dark:text-neutral-8 font-PoppinsMedium text-base">Antone Heller</h3>
                <span className="flex items-center gap-x-1">
                    <svg className="w-3 h-3">
                        <use href="#star"></use>
                    </svg>
                    <span className="text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-xs/5">4.8</span>
                </span>
            </div>
        </div>
    );
}

export default UserReview;
