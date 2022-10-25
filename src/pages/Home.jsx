import React, {useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import '../style/home.css'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import Products from '../assets/data/products';
import CounterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

const Home = () => {
    const [trendingProducts,setTrendingProducts] = useState([]);
    const [bestSalesProducts,setBestSalesProducts] = useState([]);
    const [mobileProducts,setMobileProducts] = useState([]);
    const [wirelessProducts,setWirelessProducts] = useState([]);
    const [popularProducts,setPopularProducts] = useState([]);

    const year = new Date().getFullYear()

    useEffect(() => {
        const filteredTrendingProducts = Products.filter(item => item.category === 'chair');

        const filteredBestSalesProducts = Products.filter(item => item.category === 'sofa');        

        const filteredMobileProducts = Products.filter(item => item.category === 'mobile');    

        const filteredWirelessProducts = Products.filter(item => item.category === 'wireless');

        const filteredPopularProducts = Products.filter(item => item.category === 'watch');    

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    },[])
        return (
            <Helmet title={"Home"}> 
                <section className='hero__section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 md-6">
                                <div className="hero__content">
                                    <p className="hero__subtitle">Trending product in {year}</p>
                                    <h2>Make Your Interior More Minimalistic & modern </h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, nesciunt molestias quos omnis eaque minus consectetur tempora vitae est cumque ab consequatur laboriosam ipsam dolores possimus delectus exercitationem. Cum, dolores!</p>
                                    <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop' >SHOP NOW</Link></motion.button>
                                </div>
                            </div>
                            <div className="col-lg-6 md-6">
                                <div className="hero__img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Services>
                </Services>
                <section className="trending__products">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section__title">Trending Products</h2>
                            </div>
                            <ProductList data={trendingProducts}/>
                        </div>
                    </div>
                </section>

                <section className="best__sales">
                <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section__title">Best Sales</h2>
                            </div>

                            <ProductList data={bestSalesProducts}/>
                        </div>
                    </div>
                </section>

                <section className="timer__count">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 md-6">
                                <div className="clock__top-content">
                                    <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                                    <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                                </div>
                                <Clock></Clock>
                                <motion.button whileHover={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
                            </div>
                            <div className="col-lg-6 md-6 text-end">
                                <img src={CounterImg} alt="" />
                            </div>
                        </div>
                    </div>

                </section>

                <section className="new__arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="section__title">New Arrivals</h2>
                            </div>
                            <ProductList data={mobileProducts}/>
                            <ProductList data={wirelessProducts}/>
                        </div>
                    </div>
                </section>

                <section className="popular__category">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="section__title">Popular In Category</h2>
                            </div>
                            <ProductList data={popularProducts}/>
                        </div>
                    </div>                    
                </section>
            </Helmet> // doi ten title
        );
    }
    


export default Home;