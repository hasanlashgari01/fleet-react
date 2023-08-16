import AboutFeature from "./AboutFeature";
import SectionTop from "./SectionTop";

function About() {
    return (
        <div className="container pb-16 lg:pb-28 2xl:pb-[136px]">
            <SectionTop
                title="Travel to make memories all around the world"
                description="Find trips that fit a flexible lifestyle"
            />
            <div className="flex flex-col lg:flex-row gap-y-16 mt-12 lg:mt-20 2xl:mt-[127px]">
                <div className="space-y-10">
                    <AboutFeature
                        num="01"
                        numBackground="bg-primary-2"
                        title="Find trips that fit a flexible lifestyle"
                        description="Stacks is a production-ready library of stackable content blocks built in React Native"
                    />
                    <AboutFeature
                        num="02"
                        numBackground="bg-primary-3"
                        title="Travel with more confidence"
                        description="Stacks is a production-ready library of stackable content blocks built in React Native"
                    />
                    <AboutFeature
                        num="03"
                        numBackground="bg-primary-4"
                        title="See what’s really included"
                        description="Stacks is a production-ready library of stackable content blocks built in React Native"
                    />
                    <span className="search-btn">Start your search</span>
                </div>

                <div className="relative w-full h-[610px] rounded-[32px] overflow-hidden">
                    <img src="/public/images/about.jpg" className="w-full h-full object-cover" alt="" />

                    <div className="absolute inset-6 top-auto flex gap-x-4 h-20 p-4 pr-8 bg-gradient-to-tr bg-gradient-2 from-0% bg-gradient-2/[83%] to-100% rounded-full">
                        <img src="/public/images/Profile 1.jpg" className="shrink-0 w-12 h-12 rounded-full" alt="" />
                        <div className="shrink-0" >
                            <h3 className="text-neutral-2 font-PoppinsMedium text-base" >Antone Heller</h3>
                            <span className="flex items-center gap-x-1">
                                <svg className="w-3 h-3">
                                    <use href="#star"></use>
                                </svg>
                                <span className="text-neutral-2 font-PoppinsSemiBold text-xs/5">4.8</span>
                            </span>
                        </div>
                    </div>

                    <div className="absolute"></div>
                </div>
            </div>
        </div>
    );
}

export default About;
