import Header from "./Header";
import Info from "./Info";
import Buttons from "./Buttons";
import Checkout from "./Checkout";
import Footer from "./Footer";

const Index = () => {
    return (
        <div className="hidden lg:flex w-[378px] 2xl:w-[448px] shrink-0">
            <div className="sticky top-10 flex flex-col gap-y-8 w-full h-fit p-8 border border-neutral-6 rounded-3xl">
                <Header />
                <Info />
                <Buttons />
                <Checkout />
                <Footer />
            </div>
        </div>
    );
};

export default Index;