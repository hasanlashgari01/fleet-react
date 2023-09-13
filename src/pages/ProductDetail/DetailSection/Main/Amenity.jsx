const Amenity = ({ icon, title }) => {
    return (
        <div className="flex items-center gap-x-4">
            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-neutral-4">
                <use href={`#${icon}`}></use>
            </svg>
            <span className="font-PoppinsMedium text-sm lg:text-base">{title}</span>
        </div>
    );
};

export default Amenity;
