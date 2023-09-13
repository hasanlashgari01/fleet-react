import React from "react";
import HeaderProfile from "../../../pages/ProductDetail/DetailSection/ReserveBox/Header/HeaderProfile";
import HostInfo from "../../HostInfo";

const Header = () => {
    return (
        <div className="flex gap-x-[22px]">
            <HeaderProfile />
            <div className="flex flex-col justify-between">
                <h1 className="text-neutral-2 font-DMSansBold text-3xl/10 tracking-[-0.32px]">Zoe towne</h1>
                <HostInfo />
            </div>
        </div>
    );
};

export default Header;
