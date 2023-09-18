import UserReview from "./UserReview";

function Newsletter() {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 pb-16 lg:pb-0">
            <div className="lg:w-[352px] space-y-10 py-16">
                <div>
                    <h1 className="text-neutral-2 dark:text-neutral-8 font-DMSansBold text-4xl lg:text-5xl/[56px] tracking-[-0.96px]">
                        Join our newsletter 🎉
                    </h1>
                    <p className="mt-4 text-neutral-4 font-PoppinsRegular text-base">
                        Stacks is a production-ready library of stackable content blocks built in React Native.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-y-4">
                    <div className="space-x-2 lg:space-x-4">
                        <span className="inline-block bg-primary-4 w-[44px] py-0.5 px-3 text-neutral-8 font-PoppinsMedium text-center text-sm rounded-full">
                            01
                        </span>
                        <span className="inline-flex text-neutral-2 dark:text-neutral-8 font-PoppinsMedium">
                            Get more discount
                        </span>
                    </div>
                    <div className="space-x-2 lg:space-x-4">
                        <span className="inline-block bg-primary-3 w-[44px] py-0.5 px-3 text-neutral-8 font-PoppinsMedium text-center text-sm rounded-full">
                            02
                        </span>
                        <span className="inline-flex text-neutral-2 dark:text-neutral-8 font-PoppinsMedium">
                            Get premium travel magazine
                        </span>
                    </div>
                </div>
                <div className="form__item-wrapper xs:w-80 lg:w-64">
                    <input type="email" placeholder="Enter your email" className="form__item-input" />
                    <span className="form__item-btn">
                        <svg className="w-6 h-6 text-neutral-8">
                            <use href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="relative w-[416px] h-96 flex justify-center items-center">
                <div>
                    <div className="absolute top-0 left-[131px] bg-primary-11 w-1.5 h-1.5 rotate-[105deg] rounded-sm"></div>
                    <div className="absolute top-9 left-8 bg-primary-9 w-1.5 h-1.5 rotate-[105deg] rounded-sm"></div>
                    <div className="absolute top-20 left-10 bg-primary-10 w-1 h-1 rotate-[105deg] rounded-sm"></div>
                    <div className="absolute top-32 right-3 bg-primary-8 w-1.5 h-1.5 rotate-[105deg] rounded-sm"></div>
                    <div className="absolute top-40 right-8 bg-primary-10 w-1 h-1 rotate-[105deg] rounded-sm"></div>
                    <div className="absolute bottom-4 left-[135px] bg-primary-10 w-1 h-1 rotate-[105deg] rounded-sm"></div>
                </div>
                <div>
                    <UserReview style="hidden top-auto lg:bottom-[350px] -left-0 lg:w-64 lg:mx-auto" />
                    <UserReview style="hidden top-auto lg:bottom-[350px] -left-0 lg:w-64 lg:mx-auto" />
                </div>
                <div className="absolute top-10 w-[188px] 2xl:w-[252px] aspect-square rounded-[10px] overflow-hidden z-10 hover:z-30">
                    <img
                        src="/src/assets/images/newsletter/newsletter-1.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 w-10 h-10 p-2 bg-neutral-8 rounded-full overflow-hidden">
                        <img
                            src="/src/assets/images/Profile-1.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-full"
                        />
                    </span>
                </div>
                <div className="absolute top-[175px] right-2/4 2xl:right-[60%] w-[137px] 2xl:w-[256px] rounded-[10px] overflow-hidden z-20 hover:z-30">
                    <img
                        src="/src/assets/images/newsletter/newsletter-2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-1/2 right-0 h-48 2xl:h-72 rounded-[10px] overflow-hidden z-0 hover:z-30">
                    <img
                        src="/src/assets/images/newsletter/newsletter-3.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
