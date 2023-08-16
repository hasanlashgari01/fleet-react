import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function SearchBox() {
    const data = [
        { title: "New York, NY" },
        { title: "New York, Manhattan, New York, NY" },
        { title: "New Zealand" },
        { title: "New Smyrna Beach, FL" },
        { title: "Newark, NJ" },
    ];

    const [searchValue, setSearchValue] = useState("");
    const [travelers, setTravelers] = useState({ adults: 0, children: 0, adults: 0 });
    const [result, setResult] = useState("Travelers");

    console.log(travelers.adults);

    const searchBoxRef = useRef();
    const searchRef = useRef();
    const searchModalRef = useRef();
    const travelersRef = useRef();

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

    const searchHandler = () => {
        searchRef.current.parentElement.nextElementSibling.classList.remove("hidden");
        hideModal();
    };

    const hideModal = () => {
        window.addEventListener("click", (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                searchRef.current.parentElement.nextElementSibling.classList.remove("flex");
                searchRef.current.parentElement.nextElementSibling.classList.add("hidden");
            }
        });
    };

    const travelersHandler = () => {
        if (travelers.adults + travelers.children + travelers.infants == 0) {
            setResult("Travelers");
        } else {
            setResult(travelers.adults + travelers.children + travelers.infants);
        }
    };

    return (
        <div className="absolute inset-x-1 lg:inset-x-10 2xl:inset-x-20 top-[80%] p-5 lg:p-10 bg-gradient-to-br from-neutral-8 from-0% to-neutral-8/[83%] to-100% border border-neutral-8 backdrop-blur-lg shadow-dropdown rounded-[20px] z-50">
            {/* Header */}
            <div className="mb-6">
                <nav className="flex gap-x-8 w-full" ref={searchBoxRef}>
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
            {/* Footer */}
            <div className="relative">
                <div className="grid grid-cols-1 xs:grid-cols-2 2xl:grid-cols-4 h-fit">
                    <div className="relative flex items-start gap-x-4 p-2 lg:p-4 order-first">
                        <svg className="w-6 h-6 shrink-0 text-neutral-5">
                            <use href="#location-arrow"></use>
                        </svg>
                        <div className="flex flex-col">
                            <input
                                id="location"
                                type="text"
                                placeholder="Location"
                                className="w-full bg-transparent text-neutral-2 placeholder:text-neutral-2 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                                value={searchValue}
                                onFocus={searchHandler}
                                ref={searchRef}
                            />
                            <label
                                htmlFor="location"
                                className="w-full text-neutral-4 font-PoppinsRegular text-xs lg:text-base"
                            >
                                Where are you going?
                            </label>
                        </div>
                        {/* Modal */}
                        <div
                            className={`absolute hidden flex-col w-full xs:w-80 max-h-[306px] bottom-28 left-0 p-2 bg-neutral-8 shadow-dropdown rounded-3xl z-30 overflow-y-auto scroll-smooth`}
                            ref={searchModalRef}
                            onClick={(e) => setSearchValue(e.target.textContent)}
                        >
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <div
                                        className="group flex items-center gap-x-3 p-3 rounded-xl hover:bg-neutral-7 transition-colors duration-200"
                                        key={index}
                                    >
                                        <span className="p-2 shrink-0 border border-neutral-6 rounded-full">
                                            <svg className="w-4 h-4">
                                                <use href="#route"></use>
                                            </svg>
                                        </span>
                                        <span className="flex-1 text-neutral-4 group-hover:text-neutral-2 font-PoppinsMedium text-base line-clamp-1">
                                            {item.title}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <h1>City nof found</h1>
                            )}
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
                                value={travelers.sum + " guests"}
                                onFocus={travelersHandler}
                                ref={travelersRef}
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
                {/* Search Btn */}
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
