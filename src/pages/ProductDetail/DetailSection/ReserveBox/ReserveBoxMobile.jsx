import ReserveButton from "./Button/ReserveButton";
import ReserveInfo from "./Header/ReserveInfo";

const ReserveBoxMobile = () => {
    return (
        <div className="gradient-mobile fixed bottom-0 left-0 right-0 flex justify-between lg:hidden gap-x-8 shadow-big h-[120px] p-8 border border-neutral-6 rounded-t-3xl z-30">
            <ReserveInfo />
            <ReserveButton />
        </div>
    );
};

export default ReserveBoxMobile;
