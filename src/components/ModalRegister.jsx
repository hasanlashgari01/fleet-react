import { createPortal } from "react-dom";

function ModalRegister({ isModalRegister, setIsModalRegister, modalChange }) {
    const closeModal = () => {
        setIsModalRegister(false);
    };

    return createPortal(
        <div
            className={`fixed inset-0 transition-all duration-500 ease-linear z-50 ${
                isModalRegister ? "opacity-100 visible" : "opacity-10 invisible"
            }`}
        >
            <div className="absolute w-full h-full bg-neutral-1/30 dark:bg-neutral-2/80" onClick={closeModal}></div>
            <div className={`modal__wrapper ${isModalRegister ? "md:-translate-y-1/2" : "translate-y-full"}`}>
                <span
                    className="hidden lg:block absolute -top-6 -right-6 p-2 bg-neutral-8 dark:bg-neutral-2 shadow-md z-50 rounded-full cursor-pointer"
                    onClick={closeModal}
                >
                    <svg className="w-6 h-6">
                        <use href="#close"></use>
                    </svg>
                </span>
                <h1 className="text-neutral-1 dark:text-neutral-8 font-DMSansBold text-center text-[40px]/[48px]">Sign up on Fleet</h1>
                <h3 className="mt-3 text-neutral-4 font-PoppinsRegular text-center">Use Your OpenID to Sign up</h3>
                <div className="my-4 lg:my-8 flex justify-center gap-x-3">
                    <span className="flex items-center bg-primary-1 text-neutral-8 font-DMSansBold leading-4 py-4 px-6 gap-x-3 rounded-full">
                        <svg className="w-4 h-4">
                            <use href="#google"></use>
                        </svg>
                        Google
                    </span>
                    <span className="flex items-center bg-neutral-1 text-neutral-8 font-DMSansBold leading-4 py-4 px-6 gap-x-3 rounded-full dark:border-2 border-neutral-3">
                        <svg className="w-4 h-4">
                            <use href="#apple"></use>
                        </svg>
                        Apple
                    </span>
                </div>
                <div className="mb-4 lg:mb-8 text-neutral-4 font-PoppinsRegular text-center text-xs/5">
                    Or continue with email
                </div>
                <form className="flex flex-col">
                    <label className="form__item-wrapper">
                        <input type="email" placeholder="Enter your email" className="form__item-input" />
                    </label>
                    <label className="form__item-wrapper">
                        <input type="email" placeholder="Enter your email" className="form__item-input" />
                    </label>
                    <input type="submit" className="mt-4 px-4 py-3.5 bg-primary-1 text-white rounded-full" />
                </form>
                <div className="mt-4 lg:mt-8 text-neutral-3 dark:text-neutral-6 font-PoppinsRegular text-center text-xs/5 md:text-sm">
                    Already have an account?
                    <span className="font-PoppinsSemiBold text-primary-1 ml-1 lg:cursor-pointer" onClick={modalChange}>
                        Login
                    </span>
                </div>
            </div>
        </div>,
        document.getElementById("register-modal")
    );
}

export default ModalRegister;
