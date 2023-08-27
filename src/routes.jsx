import Home from "./pages/home/Home";
import FlightsIndex from "./pages/Flights/Index";
import CarsIndex from "./pages/Cars/Index";
import Category from "./pages/Category/Category";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/flights", element: <FlightsIndex /> },
    { path: "/cars", element: <CarsIndex /> },
    { path: "/category", element: <Category /> },
];

export default routes;
