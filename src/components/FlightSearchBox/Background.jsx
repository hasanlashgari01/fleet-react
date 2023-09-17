import React from "react";

const Background = ({ image }) => {
    return (
        <>
            <img src={image} alt="" className="absolute w-full h-full object-cover -z-10" />
        </>
    );
};

export default Background;
