import Hero from "./Hero";
import Adventure from "./Adventure";
import About from "./About";
import HowItWorked from "./HowItWorked";
import ProductCard from "./ProductCard";
import LiveSection from "./LiveSection";
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
            <ExploreNearby />
        </>
    );
}

export default Home;
