import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function SearchBox({ children }) {
    const searchBoxRef = useRef();

    const isSearchLinkActive = ({ isActive }) => (isActive ? "search__link search__link--active" : "search__link");

    useLayoutEffect(() => {
        const links = [...searchBoxRef.current.children];
        const activeLink = links.find((link) => link.classList.contains("search__link--active"));

        const activeLinkPosition = activeLink.offsetLeft;
        const activeLinkWidth = activeLink.offsetWidth;

        const line = searchBoxRef.current.nextElementSibling.firstElementChild;
        line.style.width = `${activeLinkWidth}px`;
        line.style.left = `${activeLinkPosition}px`;
    }, []);

    return (
        <div className="absolute inset-x-1 lg:inset-x-10 2xl:inset-x-20 top-[80%] p-5 lg:p-10 bg-gradient-to-br from-neutral-8 dark:from-neutral-2 from-0% to-neutral-8/[83%] dark:to-neutral-2/70 to-100% border border-neutral-8 dark:border-neutral-3 backdrop-blur-lg shadow-xl lg:shadow-dropdown rounded-[20px] z-50">
            {/* Header */}
            <div className="mb-6 z-50">
                <nav className="flex gap-x-8 w-full" ref={searchBoxRef}>
                    <NavLink to="/" className={isSearchLinkActive}>
                        Stays
                    </NavLink>
                    <NavLink to="/flights" className={isSearchLinkActive}>
                        Flights
                    </NavLink>
                    <NavLink to="/cars" className={isSearchLinkActive}>
                        Cars
                    </NavLink>
                    <NavLink to="/things-to-do" className={isSearchLinkActive}>
                        Things to do
                    </NavLink>
                </nav>
                <div className="relative mt-[30px] w-full h-[1px] bg-neutral-6 dark:bg-neutral-4 rounded-[1px]">
                    <span className="absolute left-5 lg:left-10 top-0 inline-block w-[38px] h-full bg-neutral-2 dark:bg-neutral-8 rounded-sm -translate-x-5 lg:-translate-x-10 transition-all duration-300 ease-linear"></span>
                </div>
            </div>
            {/* Footer */}
            {children}
        </div>
    );
}

export default SearchBox;
