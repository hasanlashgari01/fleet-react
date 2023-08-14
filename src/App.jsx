import { useRoutes } from "react-router";
import Header from "./components/Header.jsx";
import routes from "./routes.jsx";

function App() {
    const router = useRoutes(routes);

    return (
        <>
            <Header />
            {router}
        </>
    );
}

export default App;
