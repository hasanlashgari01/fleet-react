import FlightRoundMain from "../../../components/home/FlightRoundMain";
import { FlightSearchBox } from "../../../components/home/FlightSearchBox/Index";
import Input from "../../../components/home/FlightSearchBox/Input";

const Index = () => {
    return (
        <>
            <FlightSearchBox>
                <Input icon="calendar" placeholder="Fri, May 28" />
            </FlightSearchBox>
            <FlightRoundMain />
        </>
    );
};

export default Index;
