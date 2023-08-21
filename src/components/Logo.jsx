import { Link } from "react-router-dom";

function Logo() {
    return (
        <>
            <Link className="flex items-center gap-x-2">
                <img src="./src/assets/logo.svg" alt="Logo" className="w-8 md:w-9 h-8 md:h-9" />
                <span className="text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-2xl md:text-[27px]">
                    fleet
                </span>
            </Link>
        </>
    );
}

export default Logo;
