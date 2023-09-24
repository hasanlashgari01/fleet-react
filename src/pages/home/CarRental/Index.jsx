import Breadcrumbs from "../../../components/home/Breadcrumbs";
import Card from "./Card";

const Index = () => {
    return (
        <div className="container">
            <Breadcrumbs subs={["Stays", "New Zealand", "South Island"]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-16 2xl:mt-20">
                <Card image="src/assets/images/cars/cars-1.jpg" />
                <Card image="src/assets/images/cars/cars-2.jpg" />
                <Card image="src/assets/images/cars/cars-1.jpg" />
                <Card image="src/assets/images/cars/cars-2.jpg" />
                <Card image="src/assets/images/cars/cars-1.jpg" />
                <Card image="src/assets/images/cars/cars-2.jpg" />
                <Card image="src/assets/images/cars/cars-1.jpg" />
                <Card image="src/assets/images/cars/cars-2.jpg" />
            </div>
        </div>
    );
};

export default Index;
