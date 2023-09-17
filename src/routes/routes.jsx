import { Home, Flights, Cars, Category, ProductDetail, FlightOneWay, FlightRoundTrip } from "./index.routes";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/product-detail", element: <ProductDetail /> },
    { path: "/flights", element: <Flights /> },
    { path: "/flight-trip", element: <FlightRoundTrip /> },
    { path: "/flight-one", element: <FlightOneWay /> },
    { path: "/cars", element: <Cars /> },
    { path: "/category", element: <Category /> },
];

export default routes;
