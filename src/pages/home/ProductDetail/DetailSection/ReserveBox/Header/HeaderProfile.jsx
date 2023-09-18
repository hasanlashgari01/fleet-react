const HeaderProfile = () => {
    return (
        <div className="relative w-16 aspect-square shrink-0 h-full">
            <img src="/src/assets/images/Profile-1.jpg" alt="" className="w-full h-full object-cover rounded-full" />
            <svg className="absolute top-0 right-0 w-6 h-6 text-neutral-8 bg-primary-4 rounded-full">
                <use href="#check"></use>
            </svg>
        </div>
    );
};

export default HeaderProfile;
