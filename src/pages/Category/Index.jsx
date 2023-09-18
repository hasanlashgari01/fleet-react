import Hero from "../home/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "./Header";
import Products from "./Products";
import Newsletter from "../../components/Newsletter";
import SuperHost from "./SuperHost";
import Testimonials from "../../components/Testimonials/Testimonials";

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
