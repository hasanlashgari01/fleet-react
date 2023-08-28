import Hero from "../home/Hero";
import Destinations from "../../components/Destination/Destinations";

function Index() {
    return (
        <>
            <Hero bgId="hero-car" />
            <div className="container">
                <Destinations />
            </div>
        </>
    );
}

export default Index;
