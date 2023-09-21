import FlightRoundMain from "../../../components/home/FlightRoundMain";
import { FlightSearchBox } from "../../../components/home/FlightSearchBox/Index";
import Input from "../../../components/home/FlightSearchBox/Input";
import Testimonials from "../../../components/home/Testimonials/Testimonials";

const Index = () => {
    return (
        <>
            <FlightSearchBox>
                <Input icon="calendar" placeholder="Fri, May 28" />
            </FlightSearchBox>
            <FlightRoundMain isTrip={true} />
            <div className="container">
                <Testimonials />
            </div>
        </>
    );
};

export default Index;
