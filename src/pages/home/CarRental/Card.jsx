import React from "react";
import HostInfo from "../../../components/home/HostInfo";

const Card = ({ image }) => {
    return (
        <div className="relative flex flex-col 2xl:flex-row border border-neutral-6 rounded-2xl overflow-hidden">
            <span className="absolute top-4 left-4 bg-neutral-8 py-2 px-3 rounded shadow-sm">popular</span>
            <img src={image} alt="" className="w-full 2xl:w-64 h-[310px] 2xl:h-[225px] object-cover" />
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-neutral-1 font-PoppinsMedium text-base">London - Kings Cross</h3>
                    <div className="max-w-fit p-2 text-primary-4 text-center font-PoppinsBold text-xs/3 border-2 border-primary-4 rounded">
                        $300 <span className="inline-block max-xs:mt-1.5 text-neutral-5 uppercase">/ Day</span>
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-neutral-4">
                    <div className="flex gap-x-2 max-w-[148px]">
                        <svg className="w-4 h-4 shrink-0">
                            <use href="#route"></use>
                        </svg>
                        <h5 className="max-h-14 font-PoppinsRegular text-xs/5 line-clamp-3">
                            136 - 150, Pentonville Road, Kings Cross, London, UK
                        </h5>
                    </div>
                    <div className="flex gap-x-2">
                        <svg className="w-4 h-4 shrink-0">
                            <use href="#user"></use>
                        </svg>
                        <span className="font-PoppinsRegular text-xs/5">1 Supplier</span>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-neutral-6 my-4"></div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm/5">$1000 total</span>
                    <HostInfo />
                </div>
            </div>
        </div>
    );
};

export default Card;
