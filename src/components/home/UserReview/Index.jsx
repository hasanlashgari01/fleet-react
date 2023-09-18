import Aside from "./Aside/Index";
import Main from "./Review/Index";

const Index = () => {
    return (
        <div className="container py-16 lg:pt-20 lg:pb-0 2xl:pt-34 flex flex-col-reverse lg:flex-row gap-12">
            <Aside />
            <Main />
        </div>
    );
};

export default Index;
