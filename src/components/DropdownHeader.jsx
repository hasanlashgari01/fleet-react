import { useEffect, useRef } from "react";

function DropdownHeader({ title, icon, profile, children, layout, position }) {
    const dropdownRef = useRef(false);

    useEffect(() => {
        window.removeEventListener("click", hideDropdown);
    }, []);

    const hideDropdown = () => {
        window.addEventListener("click", (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                dropdownRef.current.nextSibling.classList.remove("dropdown--show");
                dropdownRef.current.nextSibling.classList.add("dropdown--hide");
            }
        });
    };

    function setIsDropdownOpen() {
        dropdownRef.current.nextSibling.classList.toggle("dropdown--show");
        hideDropdown();
    }

    return (
        <>
            <span
                className={`flex ${layout} items-center gap-x-2 py-1 text-neutral-4 hover:text-neutral-2 select-none`}
                ref={dropdownRef}
                onClick={setIsDropdownOpen}
            >
                <span className="font-DMSansBold text-sm/4">{title}</span>
                {icon ? (
                    <svg className="w-6 h-6">
                        <use href={`#${icon}`}></use>
                    </svg>
                ) : (
                    <img src={profile} alt="Avatar" className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover" />
                )}
            </span>
            <div className={`dropdown ${position}`}>{children}</div>
        </>
    );
}

export default DropdownHeader;
