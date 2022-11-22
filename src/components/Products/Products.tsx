import "./Products.css"
import key from 'react-key-string'
import ProductItem from "./ProductItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Products = () => {
    const {products, loading, error} = useTypedSelector(state => state.products)

    return (
        <div className="products">
            <h1 className="products__title title">Products</h1>
            <div className="products__block">
                {loading
                    ? <p>Loading...</p>
                    : error
                        ? <p>{error}</p>
                        :
                        <>
                            {products && products.map(product => <ProductItem product={product} key={key.generate()}/>)}
                        </>
                }
            </div>
        </div>
    );
};

export default Products;