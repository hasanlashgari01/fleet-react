import AmazingCard from "../../../components/home/AmazingCard";
import SectionTop from "../../../components/home/SectionTop";

function AmazingServices() {
    return (
        <div className="pb-16 lg:pb-28 2xl:pb-34 space-y-12 lg:space-y-[92px]">
            <div className="flex flex-col items-center">
                <SectionTop title="Amazing Services" description="A creative agency that lead and inspire" />
                <span className="inline-block mt-8 py-4 px-6 bg-primary-1 text-neutral-8 font-DMSansBold leading-4 rounded-full">
                    Contact Us
                </span>
            </div>
            <div className="flex flex-wrap gap-6">
                <AmazingCard fillIcon="text-primary-1" title="Discovery & Strategy" />
                <AmazingCard fillIcon="text-primary-2" title="Branding" />
                <AmazingCard fillIcon="text-primary-4" title="UI & UX Design" />
            </div>
        </div>
    );
}

export default AmazingServices;
