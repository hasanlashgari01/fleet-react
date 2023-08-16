function AboutFeature({ num, numBackground, title, description }) {
    return (
        <div>
            <span className={`${numBackground} py-0.5 px-3 text-neutral-8 font-PoppinsMedium text-sm rounded-full`}>{num}</span>
            <h1 className="mt-6 text-neutral-2 font-PoppinsSemiBold text-2xl" >{title}</h1>
            <p className="mt-4 text-neutral-4 font-PoppinsRegular text-sm/6" >{description}</p>
        </div>
    );
}

export default AboutFeature;
