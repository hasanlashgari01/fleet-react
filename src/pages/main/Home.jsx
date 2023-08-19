import Hero from "../../components/Hero";
import Adventure from "../../components/Adventure";
import About from "../../components/About";
import HowItWorked from "../../components/HowItWorked";
import ProductCard from "../../components/ProductCard";

function Home() {
    return (
        <>
            <Hero />
            <Adventure />
            <About />
            <HowItWorked />
            <ProductCard />
        </>
    );
}

export default Home;
