import Hero from "../home/Hero";
import Destinations from "../../components/Destination/Destinations";
import ExploreNearby from "./ExploreNearby";
import AmazingServices from "./AmazingServices";
import FAQ from "./FAQ";
import BrowseByCategory from "../../components/BrowseByCategory/BrowseByCategory";

function Index() {
    return (
        <>
            <Hero bgId="hero-car" />
            <div className="container">
                <Destinations />
                <ExploreNearby />
                <AmazingServices />
                <FAQ />
            </div>
            <BrowseByCategory />
        </>
    );
}

export default Index;
