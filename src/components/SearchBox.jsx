import { useRef } from "react";
import { NavLink } from "react-router-dom";

function SearchBox() {
    const searchRef = useRef();

    const isSearchLinkActive = ({ isActive }) => (isActive ? "search__link search__link--active" : "search__link");

    const linkHandler = (e) => {
        searchRef.current.querySelector(".search__link--active").classList.remove("search__link--active");
        e.target.classList.add("search__link--active");

        const links = [...searchRef.current.children];
        const activeLink = links.find((link) => link.classList.contains("search__link--active"));
        const activeLinkPosition = activeLink.offsetLeft;
        const activeLinkWidth = activeLink.offsetWidth;

        const line = searchRef.current.nextElementSibling.firstElementChild;
        line.style.width = `${activeLinkWidth}px`;
        line.style.left = `${activeLinkPosition}px`;
    };

    return (
        <div className="absolute inset-x-1 lg:inset-x-10 2xl:inset-x-20 top-[80%] p-5 lg:p-10 bg-gradient-to-br from-neutral-8 from-0% to-neutral-8/[83%] to-100% border border-neutral-8 backdrop-blur-lg shadow-dropdown rounded-[20px] z-50">
            <div className="mb-6">
                <nav className="flex gap-x-8 w-full" ref={searchRef}>
                    <span to="/" className="search__link search__link--active" onClick={(e) => linkHandler(e)}>
                        Stays
                    </span>
                    <span to="/fligts" className="search__link" onClick={(e) => linkHandler(e)}>
                        Flights
                    </span>
                    <span to="/cars" className="search__link" onClick={(e) => linkHandler(e)}>
                        Cars
                    </span>
                    <span to="/things-to-do" className="search__link" onClick={(e) => linkHandler(e)}>
                        Things to do
                    </span>
                </nav>
                <div className="relative mt-[30px] w-full h-[1px] bg-neutral-6 rounded-[1px]">
                    <span className="absolute left-0 inline-block w-[38px] h-full bg-neutral-2 rounded-sm transition-all duration-500 ease-linear"></span>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 xs:grid-cols-2 2xl:grid-cols-4 h-fit">
                    <div className="flex items-start gap-x-4 p-2 lg:p-4 order-first">
                        <svg className="w-6 h-6 shrink-0 text-neutral-5">
                            <use href="#location-arrow"></use>
                        </svg>
                        <div className="flex flex-col">
                            <input
                                id="location"
                                type="text"
                                placeholder="Location"
                                className="w-full bg-transparent text-neutral-2 placeholder:text-neutral-2 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                            />
                            <label
                                htmlFor="location"
                                className="w-full text-neutral-4 font-PoppinsRegular text-xs lg:text-base"
                            >
                                Where are you going?
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 col-span-2">
                        <div className="flex items-start gap-x-4 p-2 lg:p-4">
                            <svg className="w-6 h-6 shrink-0 text-neutral-5">
                                <use href="#calendar"></use>
                            </svg>
                            <div className="flex flex-col">
                                <input
                                    id="date"
                                    type="text"
                                    placeholder="Check in"
                                    className="w-full bg-transparent text-neutral-2 placeholder:text-neutral-2 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                                />
                                <label
                                    htmlFor="location"
                                    className="text-neutral-4 font-PoppinsRegular text-xs lg:text-base"
                                >
                                    Add date
                                </label>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-4 p-2 lg:p-4">
                            <svg className="w-6 h-6 shrink-0 text-neutral-5">
                                <use href="#calendar"></use>
                            </svg>
                            <div className="flex flex-col">
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Check out"
                                    className="w-full bg-transparent text-neutral-2 placeholder:text-neutral-2 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                                />
                                <label
                                    htmlFor="location"
                                    className="text-neutral-4 font-PoppinsRegular text-xs lg:text-base"
                                >
                                    Add date
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-x-4 p-2 lg:p-4 xs:order-first 2xl:order-last">
                        <svg className="w-6 h-6 shrink-0 text-neutral-5">
                            <use href="#user"></use>
                        </svg>
                        <div className="flex flex-col">
                            <input
                                id="travelers"
                                type="text"
                                placeholder="Travelers"
                                className="w-full bg-transparent text-neutral-2 placeholder:text-neutral-2 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                            />
                            <label
                                htmlFor="travelers"
                                className="text-neutral-4 font-PoppinsRegular text-xs lg:text-base"
                            >
                                Add guests
                            </label>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-primary-1 p-4 rounded-full lg:cursor-pointer">
                    <svg className="w-6 h-6 text-white">
                        <use href="#search"></use>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
