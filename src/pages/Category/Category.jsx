import Hero from "../home/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";

function Category() {
    return (
        <>
            <Hero />
            <div className="container">
                <Breadcrumbs />
            </div>
        </>
    );
}

export default Category;
