import { useLocation, useRoutes } from "react-router";
import Header from "./layouts/Header.jsx";
import routes from "./routes/routes.jsx";
import Footer from "./layouts/Footer.jsx";
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
