import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropdownHeader from "../components/DropdownHeader.jsx";
import Logo from "../components/Logo.jsx";
import ModalRegister from "../components/Modal/ModalRegister.jsx";
import ModalLogin from "../components/Modal/ModalLogin.jsx";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalRegister, setIsModalRegister] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(false);

    const isLinkActive = ({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link");

    const modalChange = () => {
        if (isModalRegister) {
            setIsModalLogin(true);
            setIsModalRegister(false);
        } else {
            setIsModalLogin(false);
            setIsModalRegister(true);
        }
    };

    return (
        <header className="container pt-12 pb-6 md:py-5">
            <ModalRegister
                isModalRegister={isModalRegister}
                setIsModalRegister={setIsModalRegister}
                modalChange={modalChange}
            />
            <ModalLogin isModalLogin={isModalLogin} setIsModalLogin={setIsModalLogin} modalChange={modalChange} />
            <div className="flex justify-between items-center">
                {/* Left side */}
                <div className="flex">
                    <Logo />
                    <span className="hidden md:inline-block mx-10 bg-neutral-6 dark:bg-neutral-2 w-[1px]"></span>
                    <div className="relative hidden md:inline-flex cursor-default lg:cursor-pointer transition-colors">
                        <DropdownHeader icon="arrow-down-simple" title="Travelers" position="left-0">
                            <div className="grid grid-cols-1 w-[260px] child:items-center child:rounded-full">
                                <Link className="dropdown-link">
                                    <svg className="w-6 h-6">
                                        <use href="#comment"></use>
                                    </svg>
                                    Stays
                                </Link>
                                <Link className="dropdown-link">
                                    <svg className="w-6 h-6">
                                        <use href="#email"></use>
                                    </svg>
                                    Flights
                                </Link>
                                <Link className="dropdown-link">
                                    <svg className="w-6 h-6">
                                        <use href="#home"></use>
                                    </svg>
                                    Thing to do
                                </Link>
                                <Link className="dropdown-link">
                                    <svg className="w-6 h-6">
                                        <use href="#email"></use>
                                    </svg>
                                    Cars
                                </Link>
                            </div>
                        </DropdownHeader>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-x-5 md:gap-x-6">
                    <Link className="hidden 2xl:inline-block font-DMSansBold text-neutral-4 hover:text-neutral-2 dark:hover:text-neutral-6 text-sm/4 transition-colors">
                        Support
                    </Link>
                    <div className="relative hidden 2xl:inline-flex cursor-pointer transition-colors">
                        <DropdownHeader icon="globe" title="Language" layout="flex-row-reverse" position="-left-8">
                            <div className="grid grid-cols-2 w-[260px] child:rounded-lg child:flex-col">
                                <Link className="dropdown-link text-left max-w-24 bg-neutral-7 dark:bg-neutral-1">
                                    English
                                    <span className="text-xs/5 font-PoppinsRegular font-normal text-neutral-5">
                                        United States
                                    </span>
                                </Link>
                                <Link className="dropdown-link text-left max-w-24">
                                    Vietnamese
                                    <span className="text-xs/5 font-PoppinsRegular font-normal text-neutral-5">
                                        Vietnamese
                                    </span>
                                </Link>
                                <Link className="dropdown-link text-left max-w-24">
                                    Français
                                    <span className="text-xs/5 font-PoppinsRegular font-normal text-neutral-5">
                                        Belgique
                                    </span>
                                </Link>
                                <Link className="dropdown-link text-left max-w-24">
                                    Français
                                    <span className="text-xs/5 font-PoppinsRegular font-normal text-neutral-5">
                                        Canada
                                    </span>
                                </Link>
                            </div>
                        </DropdownHeader>
                    </div>
                    <Link className="hidden md:inline-block px-4 py-3 hover:bg-neutral-2 font-DMSansBold text-neutral-2 hover:text-neutral-8 dark:text-neutral-8 text-sm/4 border-2 border-neutral-6 hover:border-neutral-2 dark:border-neutral-4 rounded-full transition-colors">
                        List your property
                    </Link>
                    <div className="relative p-2">
                        <DropdownHeader icon="notification" position="absolute -right-32">
                            <div className="w-[322px] pt-6 pb-4">
                                <h1 className="p-4 pt-0 text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-2xl">
                                    Notification
                                </h1>
                                <div className="max-h-[285px] overflow-y-auto scroll-smooth">
                                    <div className="relative flex gap-6 p-4">
                                        <img
                                            src="/src/assets/images/Profile-1.jpg"
                                            className="w-12 h-12 rounded-full object-cover"
                                            alt="Profile"
                                        />
                                        <div>
                                            <h3 className="text-neutral-1 dark:text-neutral-8 font-PoppinsMedium font-medium text-base">
                                                Kohaku Tora
                                            </h3>
                                            <p className="text-neutral-3 dark:text-neutral-6 font-PoppinsRegular font-normal text-sm/6">
                                                just sent you a message
                                            </p>
                                            <div className="text-neutral-4 font-PoppinsRegular font-normal text-xs/5">
                                                <span>1</span> minute ago
                                            </div>
                                        </div>
                                        <span className="absolute top-1/2 right-4 w-3 h-3 bg-primary-1 rounded-3xl"></span>
                                    </div>
                                </div>
                            </div>
                        </DropdownHeader>
                    </div>
                    <div className="relative">
                        <DropdownHeader
                            profile="/src/assets/images/Profile-1.jpg"
                            position="fixed top-[120px] inset-0 bottom-auto shrink-0 md:h-fit md:left-auto md:right-24"
                        >
                            <div className="grid grid-cols-1 md:w-[260px]">
                                <div className="child:items-center child:rounded-full">
                                    <Link className="dropdown-link">
                                        <svg className="w-6 h-6">
                                            <use href="#comment"></use>
                                        </svg>
                                        Messages
                                    </Link>
                                    <Link className="dropdown-link">
                                        <svg className="w-6 h-6">
                                            <use href="#home"></use>
                                        </svg>
                                        Bookings
                                    </Link>
                                    <Link className="dropdown-link">
                                        <svg className="w-6 h-6">
                                            <use href="#email"></use>
                                        </svg>
                                        Wishlists
                                    </Link>
                                </div>
                                <span className="h-[1px] w-full bg-neutral-6 dark:bg-neutral-3 my-4"></span>
                                <div className="child:items-center child:rounded-full">
                                    <Link className="dropdown-link">
                                        <svg className="w-6 h-6">
                                            <use href="#building"></use>
                                        </svg>
                                        List your property
                                    </Link>
                                    <Link className="dropdown-link">
                                        <svg className="w-6 h-6">
                                            <use href="#flag"></use>
                                        </svg>
                                        Host an experience
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 mt-4 gap-x-2">
                                    <span className="flex justify-center items-center py-3 px-4 bg-primary-1 text-neutral-8 rounded-full cursor-pointer">
                                        Account
                                    </span>
                                    <span className="flex justify-center items-center py-3 px-4 text-neutral-2 dark:text-neutral-8 border-2 border-neutral-6 dark:border-neutral-4 rounded-full cursor-pointer">
                                        Log out
                                    </span>
                                </div>
                            </div>
                        </DropdownHeader>
                    </div>
                    {/* Hamburger Menu */}
                    <div
                        className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    ></div>
                </div>
            </div>
            {/* Mobile Nav */}
            <div
                className={`container fixed top-[104px] flex md:hidden flex-col justify-between px-8 z-50 
            ${
                isMenuOpen
                    ? "inset-0 visible opacity-100 pt-16 pb-[44px] transition-all ease-in duration-500"
                    : "h-0 invisible opacity-0"
            }`}
            >
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={isLinkActive}>
                                Travelers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/flights" className={isLinkActive}>
                                Flights
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/car-rental" className={isLinkActive}>
                                Car rental
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/thins-todo" className={isLinkActive}>
                                Thing to do
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" className={isLinkActive}>
                                Support
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Link className="shrink-0 text-center px-6 py-4 hover:bg-neutral-2 font-DMSansBold text-neutral-2 hover:text-neutral-8 dark:text-neutral-8 text-sm/4 border-2 border-neutral-6 hover:border-neutral-2 dark:border-neutral-2 rounded-full transition-colors cursor-default">
                    List your property
                </Link>
            </div>
        </header>
    );
}

export default Header;
