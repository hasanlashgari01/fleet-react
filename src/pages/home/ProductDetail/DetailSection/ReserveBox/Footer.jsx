const Footer = () => {
    return (
        <div className="flex justify-center items-center gap-x-2 text-neutral-4">
            <svg className="w-3 h-3">
                <use href="#flag"></use>
            </svg>
            <span className="text-xs/5 font-PoppinsRegular">Report this property</span>
        </div>
    );
};

export default Footer;
