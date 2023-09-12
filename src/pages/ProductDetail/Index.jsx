import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductHeader from "./ProductHeader";
import Gallery from "./Gallery";

const Index = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <ProductHeader />
            <Gallery />
        </>
    );
};

export default Index;
