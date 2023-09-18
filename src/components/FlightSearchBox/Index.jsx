import Background from "./Background";
import Navigation from "./Navigation";
import Main from "./Main";

const Index = ({ children }) => {
    return (
        <div className="relative h-[375px] lg:h-64 flex justify-center spcae-wrapper__x mb-8">
            <Background image="/src/assets/images/hero/flight-round.jpg" />
            <div className="search-box w-full h-[280px] lg:h-52 self-end -mb-8 lg:-mb-6 p-5 lg:p-10 shadow-modal rounded-3xl z-10">
                <Navigation />
                <Main>{children}</Main>
            </div>
        </div>
    );
};

export { Index as FlightSearchBox };
