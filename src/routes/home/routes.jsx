import { Home, Flights, Cars, CarsRental, Category, ProductDetail, FlightOneWay, FlightRoundTrip } from "./index.routes";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/flights", element: <Flights /> },
    { path: "/flight-trip", element: <FlightRoundTrip /> },
    { path: "/flight-one", element: <FlightOneWay /> },
    { path: "/cars", element: <Cars /> },
    { path: "/cars-rental", element: <CarsRental /> },
    { path: "/category", element: <Category /> },
    { path: "/product-detail", element: <ProductDetail /> },
];

export default routes;
