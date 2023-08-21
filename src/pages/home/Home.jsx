import Hero from "./Hero";
import Adventure from "./Adventure";
import About from "./About";
import HowItWorked from "./HowItWorked";
import ProductCard from "./ProductCard";
import LiveSection from "./LiveSection";
import Host from "./Host";
import ExploreNearby from "./ExploreNearby";

function Home() {
    return (
        <>
            <Hero />
            <Adventure />
            <About />
            <HowItWorked />
            <LiveSection />
            <ProductCard />
            <Host />
            <ExploreNearby />
        </>
    );
}

export default Home;
