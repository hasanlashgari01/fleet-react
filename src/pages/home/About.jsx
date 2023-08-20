import AboutFeature from "../../components/AboutFeature";
import SectionTop from "../../components/SectionTop";
import UserReview from "../../components/UserReview";

function About() {
    return (
        <div className="container pb-16 lg:pb-28 2xl:pb-[136px]">
            <SectionTop
                title="Travel to make memories all around the world"
                description="Find trips that fit a flexible lifestyle"
            />
            <div className="flex flex-col lg:flex-row justify-between gap-y-16 mt-12 lg:mt-20 2xl:mt-[127px]">
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

                <div className="relative w-full lg:w-[454px] h-[610px] lg:h-[700px] rounded-[32px] overflow-hidden">
                    <div className="absolute"></div>

                    <img
                        src="/src/assets/images/about.jpg"
                        className="w-full h-full sm:h-auto lg:h-full object-cover"
                        alt=""
                    />

                    <UserReview style="top-auto lg:bottom-[350px] -left-0 lg:w-64 lg:mx-auto" />
                    <UserReview style="top-auto lg:bottom-[208px] -right-10 lg:w-64 lg:mx-auto" />
                    <UserReview style="inset-6 top-auto lg:bottom-[47px] lg:w-64 lg:mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default About;
