import { useLocation, useRoutes } from "react-router";
import Header from "./layouts/home/Header.jsx";
import routes from "./routes/home/routes.jsx";
import Footer from "./layouts/home/Footer.jsx";
import { useEffect } from "react";

function App() {
    const router = useRoutes(routes);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header />
            {router}
            <Footer />
        </>
    );
}

export default App;
