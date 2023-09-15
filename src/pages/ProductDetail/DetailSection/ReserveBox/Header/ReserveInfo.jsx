import React from "react";
import HostInfo from "../../../../../components/HostInfo";

const ReserveInfo = () => {
    return (
        <div>
            <div>
                <span className="text-neutral-5 font-DMSansBold text-2xl lg:text-[32px]/10 tracking-[-0.32px]">
                    $119
                </span>
                <span className="text-neutral-2 dark:text-neutral-8 font-DMSansBold text-2xl lg:text-[32px]/10 ml-3">$102</span>
                <span className="text-neutral-4 font-PoppinsRegular text-sm/6 lg:text-base ml-2.5">/night</span>
            </div>
            <HostInfo />
        </div>
    );
};

export default ReserveInfo;
