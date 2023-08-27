function Search() {
    return (
        <div className="absolute bottom-0 right-0 bg-primary-1 p-4 rounded-full lg:cursor-pointer">
            <svg className="w-6 h-6 text-white">
                <use href="#search"></use>
            </svg>
        </div>
    );
}

export default Search;
