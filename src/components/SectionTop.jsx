function SectionTop({ title, description }) {
    return (
        <div className="max-w-[638px] mx-auto text-center">
            <h1 className="text-neutral-2 font-DMSansBold text-3xl/[44px] lg:text-[40px]/[48px]  tracking-[-0.4px] lg:tracking-[-0.96px]">
                {title}
            </h1>
            <p className="mt-3 text-neutral-4 font-PoppinsRegular text-sm lg:text-lg lg:tracking-[-0.24px]">
                {description}
            </p>
        </div>
    );
}

export default SectionTop;
