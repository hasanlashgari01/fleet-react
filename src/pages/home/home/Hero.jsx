import { useEffect, useRef, useState } from "react";
import SearchBox from "../../../components/home/SearchBox/SearchBox.jsx";
import Guest from "../../../components/home/SearchBox/Guest.jsx";
import Search from "../../../components/home/SearchBox/Search";

function Hero({ bgId }) {
    const data = [
        { title: "New York, NY" },
        { title: "New York, Manhattan, New York, NY" },
        { title: "New Zealand" },
        { title: "New Smyrna Beach, FL" },
        { title: "Newark, NJ" },
    ];

    const [searchValue, setSearchValue] = useState("");
    const [travelers, setTravelers] = useState({ adults: 0, children: 0, infants: 0 });
    const [result, setResult] = useState(travelers.adults + travelers.children + travelers.infants);

    const guestRef = useRef();
    const searchRef = useRef();

    useEffect(() => {
        if (travelers.adults + travelers.children + travelers.infants == 0) {
            setResult("Travelers");
        } else {
            setResult(travelers.adults + travelers.children + travelers.infants + " " + "quest");
        }
    }, [travelers]);

    const searchHandler = () => {
        showModal(searchRef.current);
    };

    const guestHandler = () => {
        showModal(guestRef.current);
    };

    const increaseHandler = (name) => {
        setTravelers({ ...travelers, [name]: travelers[name] + 1 });
    };

    const decreaseHandler = (name) => {
        if (travelers[name] > 0) {
            setTravelers({ ...travelers, [name]: travelers[name] - 1 });
        }
    };

    function showModal(elem) {
        elem.parentElement.nextElementSibling.classList.remove("hidden");
        elem.parentElement.nextElementSibling.classList.add("flex");
        hideModal(elem);
    }

    const hideModal = (elem) => {
        window.addEventListener("click", (e) => {
            if (elem && !elem.contains(e.target)) {
                elem.parentElement.nextElementSibling.classList.remove("flex");
                elem.parentElement.nextElementSibling.classList.add("hidden");
            }
        });
    };

    return (
        <div className="relative mb-52 mx-4 lg:mx-10 2xl:mx-20">
            <div className="relative h-screen rounded-3xl overflow-hidden">
                <div className="max-h-96 lg:max-h-full w-full lg:w-2/3 relative lg:absolute top-0 left-0 bottom-0 flex flex-col pt-20 lg:pt-[98px] 2xl:pt-[145px] pb-[50px] px-4 lg:pl-32 bg-gradient-to-b lg:bg-gradient-to-br from-75% lg:from-0% to-100% lg:to-50% from-neutral-7 lg:from-gradient-1/[84%] to-neutral-7/1 lg:to-gradient-1/5 z-20 overflow-hidden">
                    <h1 className="max-w-[250px] lg:max-w-[350px] mx-auto lg:mx-0 mb-4 text-neutral-2 text-center lg:text-left font-DMSansBold text-4xl/[48px] lg:text-[64px]/[64px] tracking-[-1.28px]">
                        Air, sleep, dream
                    </h1>
                    <p className="mb-6 lg:w-fit text-neutral-2 text-center font-PoppinsMedium text-base">
                        Find and book a great experience.
                    </p>
                    <span className="search-btn mx-auto">Start your search</span>
                </div>
                <div
                    id={bgId}
                    className="bg-[17%] -mt-56 lg:mt-0 bg-248 xs:bg-175 sm:bg-135 lg:bg-cover bg-no-repeat h-full z-0"
                ></div>
            </div>

            <SearchBox>
                <div className="relative">
                    <div className="grid grid-cols-1 xs:grid-cols-2 2xl:grid-cols-4 h-fit">
                        <div className="relative flex items-start gap-x-4 p-2 lg:p-4 order-first">
                            <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                                <use href="#location-arrow"></use>
                            </svg>
                            <div className="flex flex-col">
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Location"
                                    className="w-full bg-transparent text-neutral-2 dark:text-neutral-8 placeholder:text-neutral-2 dark:placeholder:text-neutral-8 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                                    value={searchValue}
                                    onClick={searchHandler}
                                    onChange={(e) => setSearchValue(e.target.value)}
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
                                className="absolute hidden flex-col w-full xs:w-80 lg:w-[508px] max-h-[306px] bottom-28 left-0 p-2 bg-neutral-8 shadow-dropdown rounded-3xl z-30 overflow-y-auto scroll-smooth"
                                onClick={(e) => setSearchValue(e.target.textContent)}
                            >
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <div
                                            className="group flex items-center gap-x-3 p-3 rounded-xl hover:bg-neutral-7 transition-colors duration-200 cursor-default"
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
                                <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                                    <use href="#calendar"></use>
                                </svg>
                                <div className="flex flex-col">
                                    <input
                                        id="date"
                                        type="text"
                                        placeholder="Check in"
                                        className="w-full bg-transparent text-neutral-2 dark:text-neutral-8 placeholder:text-neutral-2 dark:placeholder:text-neutral-8 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
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
                                <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                                    <use href="#calendar"></use>
                                </svg>
                                <div className="flex flex-col">
                                    <input
                                        id="location"
                                        type="text"
                                        placeholder="Check out"
                                        className="w-full bg-transparent text-neutral-2 dark:text-neutral-8 placeholder:text-neutral-2 dark:placeholder:text-neutral-8 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
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
                        <div className="relative flex items-start gap-x-4 p-2 lg:p-4 xs:order-first 2xl:order-last">
                            <svg className="w-6 h-6 shrink-0 text-neutral-5 dark:text-neutral-4">
                                <use href="#user"></use>
                            </svg>
                            <div className="flex flex-col">
                                <input
                                    id="travelers"
                                    type="text"
                                    placeholder="Travelers"
                                    className="w-full bg-transparent text-neutral-2 dark:text-neutral-8 placeholder:text-neutral-2 dark:placeholder:text-neutral-8 font-PoppinsSemiBold text-lg lg:text-2xl outline-0"
                                    value={result}
                                    onClick={guestHandler}
                                    ref={guestRef}
                                    readOnly
                                />
                                <label
                                    htmlFor="travelers"
                                    className="text-neutral-4 font-PoppinsRegular text-xs lg:text-base"
                                >
                                    Add guests
                                </label>
                            </div>
                            {/* Modal */}
                            <div className="absolute hidden flex-col space-y-6 w-[426px] lg:w-[508px] h-[294px] bottom-24 right-0 p-10 bg-neutral-8 shadow-dropdown rounded-3xl z-30">
                                <Guest
                                    traveler="adults"
                                    count={travelers.adults}
                                    increase={increaseHandler}
                                    decrease={decreaseHandler}
                                />
                                <Guest
                                    traveler="children"
                                    count={travelers.children}
                                    increase={increaseHandler}
                                    decrease={decreaseHandler}
                                />
                                <Guest
                                    traveler="infants"
                                    count={travelers.infants}
                                    increase={increaseHandler}
                                    decrease={decreaseHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <Search />
                </div>
            </SearchBox>
        </div>
    );
}

export default Hero;
