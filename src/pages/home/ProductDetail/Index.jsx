import Breadcrumbs from "../../../components/home/Breadcrumbs";
import ProductHeader from "./ProductHeader/Index";
import ProductDetail from "./DetailSection/Index";
import UserReview from "../../../components/home/UserReview";
import PropertyType from "../../../components/home/PropertyType/Index";
import Newsletter from "../../../components/home/Newsletter";

const Index = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs subs={["Stays", "New Zealand", "South Island"]} />
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
