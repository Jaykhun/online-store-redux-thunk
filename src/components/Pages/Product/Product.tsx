import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import CurrentProduct from "./CurrentProduct";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchCurrentProduct} from "../../../store/asyncActions/productAsyncAction";

const Product = () => {
    const param = useParams()
    const {loading, error, currentProduct} = useTypedSelector(state => state.products)
    const {fetchCurrentProduct} = useActions()

    useEffect(() => {
        fetchCurrentProduct(param.id)
    }, [])

    return (
        <div className="products">
            {loading
                ? <p>Loading...</p>
                : error
                    ? <p>{error}</p>
                    : <CurrentProduct product={currentProduct}/>
            }
        </div>
    )
};

export default Product;