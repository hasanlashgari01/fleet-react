function Guest({ traveler, count, increase, decrease }) {
    return (
        <div className="flex justify-between items-start pb-4 border-b border-neutral-6 last:border-0">
            <div>
                <h3 className="text-neutral-2 font-PoppinsMedium text-base">Adults</h3>
                <h4 className="text-neutral-4 font-PoppinsRegular text-xs/5">Ages 13 or above</h4>
            </div>
            <div className="flex gap-x-4">
                <button
                    className="text-neutral-5 disabled:text-neutral-6"
                    onClick={() => decrease(traveler)}
                    disabled={traveler == 0 ? true : false}
                >
                    <svg className="w-6 h-6">
                        <use href="#minus"></use>
                    </svg>
                </button>
                <span className="w-6 h-6 text-neutral-2 text-center font-PoppinsMedium text-base">{count}</span>
                <button className="text-neutral-5 disabled:text-neutral-6" onClick={() => increase(traveler)}>
                    <svg className="w-6 h-6">
                        <use href="#plus"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Guest;
