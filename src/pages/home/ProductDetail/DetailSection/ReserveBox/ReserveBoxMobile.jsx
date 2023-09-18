import ReserveButton from "./Button/ReserveButton";
import ReserveInfo from "./Header/ReserveInfo";

const ReserveBoxMobile = () => {
    return (
        <div className="mobile-box gradient-mobile dark:gradient-mobile--dark">
            <ReserveInfo />
            <ReserveButton />
        </div>
    );
};

export default ReserveBoxMobile;
