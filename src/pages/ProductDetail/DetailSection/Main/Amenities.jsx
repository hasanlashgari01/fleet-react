import Amenity from "./Amenity";

const Amenities = () => {
    return (
        <div className="mt-12">
            <h1 className="text-neutral-2 dark:text-neutral-8 font-PoppinsSemiBold text-2xl">Amenities</h1>
            <ul className="mt-8 grid lg:grid-cols-2 gap-y-2 lg:gap-y-6 lg:gap-x-8 2xl:gap-x-20 text-neutral-4">
                <Amenity icon="modem" title="Free wifi 24/7" />
                <Amenity icon="monitor" title="Free computer" />
                <Amenity icon="medical-case" title="Free wifi 24/7" />
                <Amenity icon="apple-2" title="Free wifi 24/7" />
                <Amenity icon="toilet-paper" title="Free clean bathroom" />
                <Amenity icon="burger" title="Breakfast included" />
                <Amenity icon="credit-card" title="ATM" />
                <Amenity icon="building" title="Nearby city" />
            </ul>
            <span className="inline-block mt-12 py-3 px-4 dark:text-neutral-8 text-sm font-DMSansBold border-2 dark:border-neutral-3 rounded-full lg:cursor-pointer">
                More detail
            </span>
        </div>
    );
};

export default Amenities;
