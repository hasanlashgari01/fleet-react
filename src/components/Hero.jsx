import SearchBox from "./SearchBox";

function Hero() {
    return (
        <div className="relative mb-40 mb-52 mx-4 lg:mx-10 2xl:mx-20">
            <div className="relative h-screen rounded-3xl overflow-hidden">
                <div className="max-h-96 lg:max-h-full w-full lg:w-2/3 relative lg:absolute top-0 left-0 bottom-0 flex flex-col pt-20 lg:pt-[98px] 2xl:pt-[145px] pb-[50px] px-4 lg:pl-32 bg-gradient-to-b lg:bg-gradient-to-br from-75% lg:from-0% to-100% lg:to-50% from-neutral-7 lg:from-gradient-1/[84%] to-neutral-7/1 lg:to-gradient-1/5 z-20 overflow-hidden">
                    <h1 className="max-w-[250px] lg:max-w-[350px] mx-auto lg:mx-0 mb-4 text-neutral-2 text-center lg:text-left font-DMSansBold text-4xl/[48px] lg:text-[64px]/[64px] tracking-[-1.28px]">
                        Air, sleep, dream
                    </h1>
                    <p className="mb-6 lg:w-fit text-neutral-2 text-center font-PoppinsMedium text-base">
                        Find and book a great experience.
                    </p>
                    <span className="inline-flex mx-auto lg:mx-0 lg:w-fit py-4 px-6 bg-primary-1 text-neutral-8 font-DMSansBold text-base/4 rounded-full">
                        Start your search
                    </span>
                </div>
                <div
                    id="hero"
                    className="bg-[17%] -mt-56 lg:mt-0 bg-248 xs:bg-175 sm:bg-135 lg:bg-cover bg-no-repeat h-full z-0"
                ></div>
            </div>

            <SearchBox />
        </div>
    );
}

export default Hero;
