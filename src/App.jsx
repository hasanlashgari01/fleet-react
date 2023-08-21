import { useRoutes } from "react-router";
import Header from "./layouts/Header.jsx";
import routes from "./routes.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
    const router = useRoutes(routes);

    return (
        <>
            <Header />
            {router}
            <Footer />
        </>
    );
}

export default App;
