import SectionTop from "../SectionTop";
import Cards from "./Cards";

const Index = () => {
    return (
        <div className="py-16 lg:py-28 2xl:pt-34 2xl:pb-14 2xl:container">
            <div className="max-2xl:space-wrapper__top">
                <SectionTop title="Browse by property type" description="Let’s go on an adventure" />
            </div>
            <Cards />
        </div>
    );
};

export default Index;
