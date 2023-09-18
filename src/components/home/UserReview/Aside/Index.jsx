import Header from "./Header";
import Info from "./Info";
import Contact from "./Contact";
import Social from "./Social";
import Footer from "./Footer";

const Index = () => {
    return (
        <div className="lg:max-w-[343px]">
            <div className="sticky top-10 p-8 space-y-8 shadow-big border border-neutral-6 dark:border-neutral-3 rounded-3xl">
                <Header />
                <Info />
                <Contact />
                <Social />
                <Footer />
            </div>
        </div>
    );
};

export default Index;
