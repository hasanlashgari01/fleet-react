import { FlightSearchBox } from "../../components/FlightSearchBox/Index";
import Input from "../../components/FlightSearchBox/Input";

const Index = () => {
    return (
        <>
            <FlightSearchBox>
                <Input icon="calendar" placeholder="Fri, May 28" />
            </FlightSearchBox>
        </>
    );
};

export default Index;
