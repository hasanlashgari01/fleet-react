import Hero from "../home/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "./Header";

function Category() {
    return (
        <>
            <Hero />
            <div className="container">
                <Breadcrumbs />
                <Header />
            </div>
        </>
    );
}

export default Category;
