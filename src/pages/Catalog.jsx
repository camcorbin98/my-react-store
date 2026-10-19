
import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useEffect, useState } from "react";

function Catalog() {

    const [products, setProducts] = useState([]);
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let service = new DataService();
        let data = service.getProduct();

        setProducts(data);
        setProductsToDisplay(data);

        let cats = ["candy", "merchandise", "dairy"];
        setCategories(cats);
    }, []);

    function filter(expectedCategory) {
        let list = [];

        for (let i = 0; i < products.length; i++) {
            let prod = products[i];

            if (prod.category === expectedCategory) {
                list.push(prod);
            }
        }

        setProductsToDisplay(list);
    }

    function clearFilters() {
        setProductsToDisplay(products);
    }

    return (
        <div className="catalog" id="catalog">

            <h1>Check our new products</h1>

            <div className="catalog-filters">

                {categories.map((tempCategory) => (
                    <button
                        key={tempCategory}
                        onClick={() => filter(tempCategory)}
                    >
                        {tempCategory}
                    </button>
                ))}

                <button onClick={clearFilters}>
                    Clear Filters
                </button>

            </div>

            <div className="products-grid">

                {productsToDisplay.map((prod) => (
                    <Product
                        key={prod._id}
                        data={prod}
                    />
                ))}

            </div>

        </div>
    );
}

export default Catalog;




