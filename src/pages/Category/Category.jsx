import Hero from "../home/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "./Header";
import Products from "./Products";
import SuperHost from "./SuperHost";

function Category() {
    return (
        <>
            <Hero />
            <div className="container">
                <Breadcrumbs />
                <Header />
                <Products />
                <SuperHost />
            </div>
        </>
    );
}

export default Category;
