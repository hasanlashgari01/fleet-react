import Breadcrumbs from "../../../components/home/Breadcrumbs.jsx";
import Newsletter from "../../../components/home/Newsletter.jsx";
import Testimonials from "../../../components/home/Testimonials/Testimonials";
import Header from "./Header";
import Products from "./Products";
import SuperHost from "./SuperHost";

function Category() {
    return (
        <>
            {/* <Hero /> */}
            <div className="container">
                <Breadcrumbs subs={["Stays", "New Zealand", "South Island"]} />
                <Header />
                <Products />
                <Newsletter />
                <SuperHost />
                <Testimonials />
            </div>
        </>
    );
}

export default Category;
