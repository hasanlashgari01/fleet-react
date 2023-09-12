import React from "react";

const ProductHeaderActions = () => {
    return (
        <>
            <span className="product-header__icon-wrapper group">
                <svg className="product-header__icon">
                    <use href="#location-arrow"></use>
                </svg>
            </span>
            <span className="product-header__icon-wrapper group">
                <svg className="product-header__icon">
                    <use href="#share-square"></use>
                </svg>
            </span>
            <span className="product-header__icon-wrapper group">
                <svg className="product-header__icon">
                    <use href="#heart"></use>
                </svg>
            </span>
        </>
    );
};

export default ProductHeaderActions;
