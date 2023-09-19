import FlightInfo from "./FlightInfo";

const FlightCard = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-y-3 gap-x-8">
            <div className="text-center flex-1 lg:max-w-[160px] py-4 bg-neutral-7 dark:bg-neutral-3 dark:text-neutral-8 h-[59px] rounded-lg">Emirates</div>
            <div className="flex flex-1 justify-between items-center">
                <FlightInfo location="AKL" time="6:45" />
                <div className="flex flex-col gap-y-2">
                    <span className="inline-block w-full h-[1px] bg-neutral-6 dark:bg-neutral-3 rounded-full"></span>
                    <span className="text-neutral-4 font-PoppinsRegular text-xs/5">nonstop</span>
                </div>
                <FlightInfo location="SGN" time="9:45" isBeforeMidday={false} />
            </div>
        </div>
    );
};

export default FlightCard;
