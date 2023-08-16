import Product from "./Product";
import SectionTop from "./SectionTop";

function ProductCard() {
    return (
        <div className="container space-y-12 py-16 lg:py-10 2xl:py-20 bg-neutral-7">
            <SectionTop title="Go somewhere" description="Let’s go on an adventure" />
            <div className="grid gap-8">
                <Product
                    title="The grand resort"
                    subTitle="Yasminfurt"
                    offPrice="356"
                    price="267"
                    startDate="Tue, Jul 20"
                    endDate="Fri, Jul 23"
                    score="4.8"
                />
            </div>
        </div>
    );
}

export default ProductCard;
