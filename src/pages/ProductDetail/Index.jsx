import Breadcrumbs from "../../components/Breadcrumbs";
import ProductHeader from "./ProductHeader/Index";
import ProductDetail from "./DetailSection/Index";
import UserReview from "../../components/UserReview/Index";
import PropertyType from "../../components/PropertyType/Index";
import Newsletter from "../../components/Newsletter";

const Index = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <ProductHeader />
            <ProductDetail />
            <div className="w-full h-[1px] bg-neutral-6 dark:bg-neutral-3 rounded-full"></div>
            <UserReview />
            <PropertyType />
            <div className="container overflow-hidden">
                <Newsletter />
            </div>
            <PropertyType />
        </>
    );
};

export default Index;
