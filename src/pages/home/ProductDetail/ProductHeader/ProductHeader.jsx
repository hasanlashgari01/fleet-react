import React from "react";
import ProductHeaderActions from "./ProductHeaderActions";
import ProductInfo from "./ProductInfo";

const ProductHeader = () => {
    return (
        <div className="mt-6">
            <div className="flex justify-between container">
                <ProductInfo />
                <div className="hidden lg:flex flex-row gap-4 h-fit">
                    <ProductHeaderActions />
                </div>
            </div>
            <span className="inline-block lg:hidden my-8 w-full h-[1px] bg-neutral-6 dark:bg-neutral-3"></span>
            <div className="container flex lg:hidden justify-center gap-4 h-fit">
                <ProductHeaderActions />
            </div>
        </div>
    );
};

export default ProductHeader;
