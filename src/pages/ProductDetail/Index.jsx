import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductHeader from "./ProductHeader";
import Gallery from "./Gallery";
import ProductDetail from "./DetailSection/Index";

const Index = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <ProductHeader />
            <Gallery />
            <ProductDetail />
        </>
    );
};

export default Index;
