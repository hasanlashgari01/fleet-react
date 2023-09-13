import Breadcrumbs from "../../components/Breadcrumbs";
import ProductHeader from "./ProductHeader/Index";
import ProductDetail from "./DetailSection/Index";

const Index = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <ProductHeader />
            <ProductDetail />
        </>
    );
};

export default Index;
