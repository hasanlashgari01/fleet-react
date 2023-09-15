import TopMain from "./TopMain";
import Info from "./Info";
import Description from "./Description";
import Amenities from "./Amenities";

const LeftSection = () => {
    return (
        <>
            <>
                <TopMain />
                <div className="my-6 border border-neutral-6 dark:border-neutral-2 rounded-full"></div>
                <Info />
                <Description />
            </>
            <Amenities />
        </>
    );
};

export default LeftSection;
