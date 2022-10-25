import React, {useState,useRef,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSelection from '../components/UI/Commonsection';
import '../style/product-details.css';
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import {toast} from 'react-toastify';

const ProductDetails = () => {
    const [tab,setTab] = useState('desc')
    const [rating,setRating] = useState(null)

    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()
    const {id} = useParams();
    const product = products.find((item) => {
        if(item.id === id){
            return item;
        }
        return '';
    });
    const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product;

    const relatedProducts =  products.filter(item => item.category === category)

    const submitHandler = (event) => {
        event.preventDefault()

        const reviewUserName = reviewUser.current.value;
        const reviewUserMsg =  reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewObj)
        toast.success('Review submitted')
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price
        }))

        toast.success('Product added successfully')
    }

    useEffect(()=> {
        window.scrollTo(0,0)
    },[product])
    return (
    <Helmet title={productName}>
        <CommonSelection title={productName}/>
        <section className='pt-0'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="product__details">
                            <h2>{productName}</h2>
                            <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                <div>
                                    <span>
                                        <i class="ri-star-s-fill"></i>
                                    </span >
                                    <span>
                                        <i class="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i class="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i class="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i class="ri-star-half-s-line"></i>
                                    </span>
                                </div>
                                <p>(<span>{avgRating}</span>   ratings)</p>
                            </div>
                            <div className='d-flex align-items-center gap-5'>
                                <span className='product__price pd-5'>${price}</span>
                                <span >Category: {category.toUpperCase()}</span>
                            </div>
                            <p className='mt-3'>{shortDesc}</p>

                            <motion.button whileHover={{scale:1.1}} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tab__wrapper d-flex align-items-center gap-5 ">
                            <h6 className={`pd-5 + ${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')} >Description</h6>
                            <h6 className={`pd-5 + ${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                        </div>
                            {
                                tab === 'desc' ? (
                                    <div className="tab__content mt-5">
                                        <p>{description}</p>
                                    </div>
                                ) : (
                                    <div className='product__review mt-5'>
                                        <div className="review__wrapper">
                                            <ul>
                                                {
                                                    reviews?.map((item,index)=> (
                                                        <li key={index}>
                                                            <h6 className='mb-1'>Tên Người</h6>
                                                            <span>{item.rating} (rating)</span>
                                                            <p className='mb-3'>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                            <div className="review__form">
                                                <h4>Leave Your Experience</h4>
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form__group" >
                                                        <input type="text" placeholder='Enter name' ref={reviewUser} requirerd />
                                                    </div>
                                                    <div className="form__group d-flex align-items-center pd-5">
                                                        <span  onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                                        <span  onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                                        <span  onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                                        <span  onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                                        <span  onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></span>
                                                    </div>
                                                    <div className="form__group">
                                                        <textarea rows={4} type="text" placeholder='Review Massage...' ref={reviewMsg} requirerd />
                                                    </div>

                                                    <motion.button whileHover={{scale:1.1}}  type ="submit" className="buy__btn">Submit</motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                    <div className="col-lg-12 mt-5">
                        <h2 className="related__title">You might also like</h2>
                    </div>

                    <ProductsList data={relatedProducts}></ProductsList>
                </div>
            </div>
        </section>
    </Helmet>
  )
}

export default ProductDetails