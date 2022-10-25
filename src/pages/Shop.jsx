import React, {useState} from 'react';
import Commonsection from '../components/UI/Commonsection';
import Helmet from '../components/Helmet/Helmet';
import '../style/shop.css';
import Products from '../assets/data/products';
import ProductsList from '../components/UI/ProductList';

const Shop = () => {
    const [productsData,setProductsData] = useState(Products);

    const handleFilter = (event) => {
        const filterValue = event.target.value;
        if(filterValue === "sofa") {
            const filteredProducts = Products.filter((item) => item.category === "sofa");

            setProductsData(filteredProducts);
        }

        if(filterValue === "mobile") {
            const filteredProducts = Products.filter((item) => item.category === "mobile");

            setProductsData(filteredProducts);
        }

        if(filterValue === "watch") {
            const filteredProducts = Products.filter((item) => item.category === "watch");

            setProductsData(filteredProducts);
        }

        if(filterValue === "wireless") {
            const filteredProducts = Products.filter((item) => item.category === "wireless");

            setProductsData(filteredProducts);
        }

        if(filterValue === "chair") {
            const filteredProducts = Products.filter((item) => item.category === "chair");

            setProductsData(filteredProducts);
        }
    }

    const handleSearch = (event) => {
        const searchTemp = event.target.value;
        
        const searchedProducts = Products.filter((item) => item.productName.toLowerCase().includes(searchTemp.toLowerCase()))

        setProductsData(searchedProducts)
    }
  return (
    <Helmet title='Shop'>
    <Commonsection title='Products'></Commonsection>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 md-3">
                    <div className="filter__widget">
                        <select onClick={handleFilter}>
                            <option>Filter By Category</option>
                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="chair">Chair</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 md-3">
                    <div className="filter__widget">
                        <select>
                            <option>Sort By</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6 md-6">
                    <div className="search__box">
                        <input type="text" placeholder='Search......' onChange={handleSearch}/>
                        <span>
                            <i class="ri-search-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='pt-0'>
        <div className="container">
            <div className="row">
                {
                    productsData.length ===  0 ? (<h1 className='textnotification' >No Products are found!</h1>) : (<ProductsList data={productsData}/>)
                }
            </div>
        </div>
    </section>
  </Helmet>
  )
}


export default Shop