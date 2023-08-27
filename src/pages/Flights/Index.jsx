import Hero from "../home/Hero";
import Adventure from "../home/Adventure";
import About from "../home/About";

function Index() {
    return (
        <>
            <Hero bgId="hero-flights" />
            <Adventure />
            <About />
        </>
    );
}

export default Index;
