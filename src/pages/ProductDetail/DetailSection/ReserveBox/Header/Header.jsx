import HeaderProfile from "./HeaderProfile";
import ReserveInfo from "./ReserveInfo";

const Header = () => {
    return (
        <div className="flex justify-between">
            <ReserveInfo />
            <HeaderProfile />
        </div>
    );
};

export default Header;
