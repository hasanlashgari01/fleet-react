import Header from "./Header";
import Info from "./Info";
import Contact from "./Contact";
import Social from "./Social";
import Footer from "./Footer";

const Index = () => {
    return (
        <div className="lg:max-w-[343px] p-8 space-y-8 border border-neutral-6 rounded-3xl">
            <Header />
            <Info />
            <Contact />
            <Social />
            <Footer />
        </div>
    );
};

export default Index;
