import { useSelector, useDispatch } from "react-redux";
import { setClear, setDecrement, setIncrement } from "../redux/cart/action";

const ShoppingCart = () => {
    const { cart } = useSelector((state => state.shoppingCart));
    const dispatch = useDispatch()

    const handleIncrement = (productId) => {

        dispatch(setIncrement(productId))
    }

    const handleDecrement = (productId) => {

        dispatch(setDecrement(productId))
    }
    const handleClearFromCart=()=>{
        dispatch(setClear())
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12 pl-3 pt-3">
                    {cart.length === 0 ?
                        <div class="alert alert-warning" role="alert">
                            <i class="bi bi-exclamation-triangle-fill"></i> The Shopping Cart is Empty
                        </div>
                        :

                        <table className="table table-hover border bg-white">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th style={{ width: '10%' }}>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart && cart.map(product => (
                                    <tr>
                                        <td className="align-middle">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <img
                                                        src={product.image}
                                                        alt="..."
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="col-lg-10">
                                                    <h5> {product.name} </h5>
                                                    <p> {product.description} </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{product.price}</td>
                                        <td className="align-middle">
                                            <button onClick={() => handleIncrement(product.id)} className="btn btn-sm btn-dark me-2">
                                                +
                                            </button>
                                            <span>{product.qty}</span>
                                            <button onClick={() => handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2">
                                                -
                                            </button>
                                        </td>
                                        <td className="align-middle">{product.price * product.qty}</td>
                                        <td className="align-middle" style={{ width: '15%' }}>
                                            <button className="btn btn-danger btn-sm">delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button onClick={()=> handleClearFromCart()} className="btn btn-dark">Clear Cart</button>
                                    </td>
                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td className="hidden-xs text-center" style={{ width: '15%' }}>
                                        <strong>Total : {cart.reduce((a, c) => {
                                            return a + c.price * c.qty
                                        }, 0)}</strong>
                                    </td>
                                    <td>
                                        <a href="/" className="btn btn-success btn-block">Checkout</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;