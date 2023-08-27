import { createPortal } from "react-dom";

function ModalLogin({ isModalLogin, setIsModalLogin, modalChange }) {
    const closeModal = () => {
        setIsModalLogin(false);
    };

    return createPortal(
        <div
            className={`fixed inset-0 transition-all duration-500 ease-linear z-50 ${
                isModalLogin ? "opacity-100 visible" : "opacity-10 invisible"
            }`}
        >
            <div className="absolute w-full h-full bg-neutral-1/30 dark:bg-neutral-2/80" onClick={closeModal}></div>
            <div className={`modal__wrapper ${isModalLogin ? "md:-translate-y-1/2" : "translate-y-full"}`}>
                <span
                    className="hidden lg:block absolute -top-6 -right-6 p-2 bg-neutral-8 dark:bg-neutral-2 shadow-md z-50 rounded-full cursor-pointer"
                    onClick={closeModal}
                >
                    <svg className="w-6 h-6">
                        <use href="#close"></use>
                    </svg>
                </span>
                <h1 className="text-neutral-1 dark:text-neutral-8 font-DMSansBold text-center text-[40px]/[48px]">Sign in</h1>
                <form className="flex flex-col">
                    <label className="form__item-wrapper">
                        <input type="email" placeholder="Enter your email" className="form__item-input" />
                    </label>
                    <label className="form__item-wrapper">
                        <input type="email" placeholder="Enter your email" className="form__item-input" />
                    </label>
                    <input
                        type="submit"
                        className="mt-4 px-4 py-3.5 bg-primary-1 text-white rounded-full"
                        value="Login"
                    />
                </form>
                <div className="flex justify-between">
                    <span className="block mt-4 lg:mt-8 text-neutral-3 dark:text-neutral-6 font-PoppinsRegular text-center text-xs/5">
                        Forgot password?
                    </span>
                    <span
                        className="block mt-4 lg:mt-8 font-PoppinsSemiBold text-primary-1 text-center text-xs/5 lg:cursor-pointer"
                        onClick={modalChange}
                    >
                        Register
                    </span>
                </div>
            </div>
        </div>,
        document.getElementById("login-modal")
    );
}

export default ModalLogin;
