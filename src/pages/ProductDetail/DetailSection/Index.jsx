import LeftSection from "./Main/Index";
import Aside from "./ReserveBox/Index";

const ProductDetail = () => {
    return (
        <div className="container py-16 lg:pb-20 2xl:pb-34 flex gap-x-12">
            <div>
                <LeftSection />
            </div>
            <Aside />
        </div>
    );
};

export default ProductDetail;
