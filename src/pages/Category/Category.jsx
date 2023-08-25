import Hero from "../home/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "./Header";
import Products from "./Products";

function Category() {
    return (
        <>
            <Hero />
            <div className="container">
                <Breadcrumbs />
                <Header />
                <Products />
            </div>
        </>
    );
}

export default Category;
