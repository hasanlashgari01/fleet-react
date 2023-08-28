import Hero from "../home/Hero";
import Destinations from "../../components/Destination/Destinations";
import ExploreNearby from "./ExploreNearby";

function Index() {
    return (
        <>
            <Hero bgId="hero-car" />
            <div className="container">
                <Destinations />
                <ExploreNearby />
            </div>
        </>
    );
}

export default Index;
