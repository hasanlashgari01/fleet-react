import { Link } from "react-router-dom";

const Category = ({ count, title }) => {
    return (
        <Link to="" className="flex flex-col justify-between h-64 p-8 border-2 border-neutral-7 rounded-3xl aspect-square">
            <span className="w-fit py-1 px-3 bg-neutral-6 text-neutral-2 font-PoppinsBold text-xs lg:text-sm rounded-full">128</span>
            <div>
                <svg className="w-8 h-8 mb-6">
                    <use href="#car"></use>
                </svg>
                <h3 className="font-PoppinsMedium text-neutral-2">South Virgilland</h3>
                <span className="font-PoppinsRegular text-neutral-4 text-xs/5">From Rs. 1,461 per day</span>
            </div>
        </Link>
    );
};

export default Category;
