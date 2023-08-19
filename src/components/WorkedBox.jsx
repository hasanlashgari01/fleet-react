function WorkedBox({ title, description, children }) {
    return (
        <div className="w-64">
            {children}
            <div className="mt-8 text-center">
                <h4 className="text-neutral-2 font-PoppinsSemiBold text-2xl">{title}</h4>
                <p className="mt-2 text-neutral-4  font-PoppinsRegular text-sm/6">{description}</p>
            </div>
        </div>
    );
}

export default WorkedBox;
