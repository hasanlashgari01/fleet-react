function AmazingCard({ fillIcon, title }) {
    return (
        <div className="flex-1 basis-64 bg-neutral-7 py-12 px-6 space-y-3 rounded-[20px]">
            <svg className={`w-12 h-12 ${fillIcon}`}>
                <use href="#two-circle"></use>
            </svg>
            <div>
                <h3 className="font-PoppinsMedium text-neutral-2">{title}</h3>
                <p className="mt-4 font-PoppinsRegular text-neutral-4 text-sm/6">
                    We realize ideas from simple to complex, everything becomes easy to use and reach the most potential
                    customers.
                </p>
            </div>
        </div>
    );
}

export default AmazingCard;
