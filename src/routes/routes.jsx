import { Home, Flights, Cars, Category, ProductDetail } from "./index.routes";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/flights", element: <Flights /> },
    { path: "/cars", element: <Cars /> },
    { path: "/category", element: <Category /> },
    { path: "/product-detail", element: <ProductDetail /> },
];

export default routes;
