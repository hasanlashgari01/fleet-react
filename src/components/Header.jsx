import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLinkActive = ({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link";

  return (
    <header className="container pt-12 pb-6 md:py-5">
      <div className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex">
          <Link className="flex items-center gap-x-2">
            <img src="/public/logo.svg" alt="Logo" className="w-8 md:w-9 h-8 md:h-9" />
            <span className="text-neutral-2 font-PoppinsSemiBold text-2xl md:text-[27px]">fleet</span>
          </Link>
          <span className="hidden md:inline-block mx-10 bg-neutral-6 w-[1px]"></span>
          <div className="hidden md:inline-flex justify-center items-center gap-x-2 py-1 text-neutral-4 hover:text-neutral-2 lg:cursor-pointer transition-colors">
            <span className="font-DMSansBold text-sm/4">Travelers</span>

            <svg className="w-6 h-6">
              <use href="#arrow-down-simple"></use>
            </svg>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-x-5 md:gap-x-6">
          <Link className="hidden 2xl:inline-block font-DMSansBold text-neutral-4 hover:text-neutral-2 text-sm/4 transition-colors">Support</Link>
          <div className="hidden 2xl:inline-flex items-center gap-x-3 py-3 px-4 text-neutral-4 hover:text-neutral-2 cursor-pointer transition-colors">
            <svg className="w-4 h-4">
              <use href="#globe"></use>
            </svg>
            <span className="font-DMSansBold text-sm/4">Language</span>
          </div>
          <Link className="hidden md:inline-block px-4 py-3 hover:bg-neutral-2 font-DMSansBold text-neutral-2 hover:text-neutral-8 text-sm/4 border-2 border-neutral-6 hover:border-neutral-2 rounded-full transition-colors">List your property</Link>
          <div className="relative p-2">
            <span className="absolute top-0 right-0 flex-shrink-0 inline-block w-3 h-3 bg-primary-4 rounded-full"></span>
            <svg className="w-6 h-6 text-neutral-4">
              <use href="#notification"></use>
            </svg>
          </div>
          <div>
            <img src="/public/images/Profile 1.jpg" alt="Avatar" className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover" />
          </div>
          {/* Hamburger Menu */}
          <div className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}></div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className={`container fixed top-[104px] flex md:hidden flex-col justify-between px-8 z-50 ${isMenuOpen ? "inset-0 visible opacity-100 pt-16 pb-[44px] transition-all ease-in duration-500" : "h-0 invisible opacity-0"}`}>
        <nav>
          <ul>
            <li><NavLink to="/" className={isLinkActive}>Travelers</NavLink></li>
            <li><NavLink to="/flights" className={isLinkActive}>Flights</NavLink></li>
            <li><NavLink to="/car-rental" className={isLinkActive}>Car rental</NavLink></li>
            <li><NavLink to="/thins-todo" className={isLinkActive}>Thing to do</NavLink></li>
            <li><NavLink to="/support" className={isLinkActive}>Support</NavLink></li>
          </ul>
        </nav>
        <Link className="shrink-0 text-center px-6 py-4 hover:bg-neutral-2 font-DMSansBold text-neutral-2 hover:text-neutral-8 text-sm/4 border-2 border-neutral-6 hover:border-neutral-2 rounded-full transition-colors cursor-default">List your property</Link>
      </div>
    </header>
  );
}

export default Header;