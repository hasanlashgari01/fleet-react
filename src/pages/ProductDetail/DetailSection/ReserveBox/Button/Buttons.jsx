import ReserveButton from "./ReserveButton";
import SaveButton from "./SaveButton";

const Buttons = () => {
    return (
        <div className="flex items-center space-x-2">
            <SaveButton />
            <ReserveButton />
        </div>
    );
};

export default Buttons;
