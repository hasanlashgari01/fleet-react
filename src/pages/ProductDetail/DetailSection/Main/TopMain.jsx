const TopMain = () => {
    return (
        <>
            <h1 className="text-neutral-2 dark:text-neutral-8 font-DMSansBold text-[32px]/10">Private room in house</h1>
            <div className="mt-2 flex items-center">
                <span className="text-neutral-4 text-sm/6">Hosted by</span>
                <img
                    src="/src/assets/images/Profile-1.jpg"
                    alt=""
                    className="ml-1 w-6 aspect-square object-cover rounded-full"
                />
                <span className="ml-3 text-neutral-2 dark:text-neutral-8 font-PoppinsMedium">Zoe Towne</span>
            </div>
        </>
    );
};

export default TopMain;
