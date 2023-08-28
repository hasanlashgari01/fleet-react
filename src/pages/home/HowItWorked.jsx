import SectionTop from "../../components/SectionTop";
import WorkedBox from "../../components/WorkedBox";

function HowItWorked() {
    return (
        <div className="container">
            <SectionTop title="How It Worked" description="Keep calm & travel on" />
            <div className="flex flex-wrap justify-center items-center gap-12 2xl:gap-32 mt-8 lg:mt-16 mb-28 2xl:mb-34">
                <WorkedBox
                    title="Book & relax"
                    description="We realize ideas from simple to complex, everything becomes easy to use."
                >
                    <div className="relative flex justify-center items-center mx-auto w-64 h-[230px]">
                        <span className="absolute top-6 right-7 w-2 h-2 bg-primary-7 rotate-[20deg] rounded-sm"></span>
                        <span className="absolute bottom-6 left-[17px] w-3 h-3 bg-primary-8 rotate-[20deg] rounded-sm"></span>
                        <div>
                            <div className="mx-auto flex justify-center items-center w-32 h-40 bg-neutral-8 dark:bg-neutral-1 border border-neutral-7 dark:border-neutral-3 shadow-dropdown rounded-3xl -rotate-15">
                                <span className="p-5 bg-primary-4 rounded-full rotate-15">
                                    <svg className="w-6 h-6">
                                        <use href="#calendar-fill"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </WorkedBox>
                <WorkedBox
                    title="Smart checklist"
                    description="We realize ideas from simple to complex, everything becomes easy to use."
                >
                    <div className="relative flex justify-center items-center mx-auto w-64 h-[230px]">
                        <span className="absolute top-3.5 left-[30px] w-2 h-2 bg-primary-3 rotate-[20deg] rounded-sm"></span>
                        <span className="absolute top-20 right-1.5 w-3 h-3 bg-primary-9 rotate-[20deg] rounded-sm"></span>
                        <span className="absolute bottom-14 left-[21px] w-1 h-1 bg-primary-3 rotate-[20deg] rounded-sm"></span>
                        <div>
                            <div className="mx-auto flex justify-center items-center w-32 h-40 bg-neutral-8 dark:bg-neutral-1 border border-neutral-7 dark:border-neutral-3 shadow-dropdown rounded-3xl rotate-15">
                                <span className="p-5 bg-primary-4 rounded-full -rotate-15">
                                    <svg className="w-6 h-6">
                                        <use href="#check-fill"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </WorkedBox>
                <WorkedBox
                    title="Save more"
                    description="We realize ideas from simple to complex, everything becomes easy to use."
                >
                    <div className="relative flex justify-center items-center mx-auto w-64 h-[230px]">
                        <span className="absolute top-20 left-3 w-2 h-2 bg-primary-10 rotate-[20deg] rounded-sm"></span>
                        <span className="absolute top-[27px] right-9 w-3 h-3 bg-primary-11 rotate-[20deg] rounded-sm"></span>
                        <span className="absolute bottom-16 right-3 w-1 h-1 bg-secondary-3 rotate-[20deg] rounded-sm"></span>
                        <div>
                            <div className="mx-auto flex justify-center items-center w-32 h-40 bg-neutral-8 dark:bg-neutral-1 border border-neutral-7 dark:border-neutral-3 shadow-dropdown rounded-3xl -rotate-15">
                                <span className="p-5 bg-primary-4 rounded-full rotate-15">
                                    <svg className="w-6 h-6">
                                        <use href="#coin-fill"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </WorkedBox>
            </div>
        </div>
    );
}

export default HowItWorked;
