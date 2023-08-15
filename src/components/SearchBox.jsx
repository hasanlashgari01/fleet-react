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
        line.style.left = `${activeLinkPosition - 20}px`;
    };

    return (
        <div className=" absolute inset-x-1 bottom-1 h-44 p-5 bg-gradient-to-tr from-neutral-8 from-40% to-neutral-8/[83%] to-100% border border-neutral-8 backdrop-blur-lg shadow-dropdown rounded-[20px] z-50">
            <div>
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
        </div>
    );
}

export default SearchBox;
