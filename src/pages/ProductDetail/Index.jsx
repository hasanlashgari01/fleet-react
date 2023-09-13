import Breadcrumbs from "../../components/Breadcrumbs";
import ProductHeader from "./ProductHeader/Index";
import ProductDetail from "./DetailSection/Index";
import UserReview from "../../components/UserReview/Index";

const Index = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <ProductHeader />
            <ProductDetail />
            <div className="w-screen h-[1px] bg-neutral-6 rounded-full"></div>
            <UserReview />
        </>
    );
};

export default Index;
