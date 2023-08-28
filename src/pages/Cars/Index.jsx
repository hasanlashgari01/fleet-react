import Hero from "../home/Hero";
import Destinations from "../../components/Destination/Destinations";
import ExploreNearby from "./ExploreNearby";
import AmazingServices from "./AmazingServices";

function Index() {
    return (
        <>
            <Hero bgId="hero-car" />
            <div className="container">
                <Destinations />
                <ExploreNearby />
                <AmazingServices />
            </div>
        </>
    );
}

export default Index;
