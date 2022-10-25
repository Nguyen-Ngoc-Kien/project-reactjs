import React from 'react';
import '../style/cart.css';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/Commonsection';
import tdImg from '../assets/images/arm-chair-01.jpg';
import {motion} from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='cart'>
        <Commonsection title='Shopping Cart'/>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        {
                            cartItems.length === 0 ? (
                                <h2 className='fs-4 text-center'>No item added to the cart</h2>
                            ) : (
                                <table className='table bordered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
    
                                <tbody>
                                    {
                                        cartItems.map((item,index) => (
                                            <Tr item={item} key={index}></Tr>
                                        ))
                                    }
                                </tbody>
                                </table>
                            )
                        }

                    </div>
                    <div className="col-lg-3">
                        <h6 className='d-flex align-items-center justify-content-between'>Subtotal<span className='fs-4 fw-bold'>${totalAmount}</span></h6>
                        <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                    <div>
                        <button className="buy__btn w-100"><Link to='/checkout'>Checkout</Link></button>
                        <button className="buy__btn w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    </Helmet>
  )
};

const Tr = ({item}) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
    <tr>
        <td><img src={item.imgUrl} alt="" /></td>
        <td>{item.productName}</td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
        <td><span><i class="ri-delete-bin-line" onClick={deleteProduct}></i></span></td>
    </tr>
    )
}

export default Cart