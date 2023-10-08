import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/products/action"
import { setCart } from "../redux/cart/action";

const Products = () => {
    const { products } = useSelector((state => state.product))
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        console.log('click ...');
        dispatch(setCart(product))
    }
   
    useEffect(() => {
        let myData = [
            {
                id: 1,
                name: "Samsung Galaxy A31",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image:
                    "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 700,
            },
            {
                id: 2,
                name: "Redmi Note 8",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image:
                    "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 600,
            },


            {
                id: 3,
                name: "Samsung Galaxy S20",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image:
                    "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 300,
            },

            {
                id: 4,
                name: "iPhone 13 Pro",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 500,
            }

        ];
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                data = myData
                dispatch(getProducts(data))
            })
            .catch(err => console.log(err.message))
    }, [dispatch]);

   

    return (
        <div className="container">
            <div className="row mt-5 g-3">
                {products && products.map(product => (
                    <div className="col-md-3" key={product.id} >

                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button onClick={() => handleAddToCart(product)} className="btn btn-sm btn-outline-success">
                                    Add to cart
                                </button>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;