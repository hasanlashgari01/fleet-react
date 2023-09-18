import BrowseByCategory from "../../../components/home/BrowseByCategory/BrowseByCategory.jsx";
import Destinations from "../../../components/home/Destination/Destinations";
import Hero from "../home/Hero";
import AmazingServices from "./AmazingServices";
import ExploreNearby from "./ExploreNearby";
import FAQ from "./FAQ";

function Index() {
    return (
        <>
            <Hero bgId="hero-car" />
            <Destinations />
            <div className="container">
                <ExploreNearby />
                <AmazingServices />
                <FAQ />
            </div>
            <BrowseByCategory />
        </>
    );
}

export default Index;
