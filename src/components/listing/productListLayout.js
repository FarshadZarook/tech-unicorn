import React, { useEffect, useState } from "react";
import useCart from '../../store/store';
import { _GETPRODUCTS, PRODUCT_LIMIT } from "../shared/constants";
import axios from 'axios';

const productListLayout = () => {

    const storeCart = useCart((state) => state.cart);
    const addTocart = useCart((state) => state.addTocart);
    const removeFromCart = useCart((state) => state.removeFromCart);

    const [productList, setProductList] = useState([]);
    const [originalResults, setOriginalResults] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        setCart(storeCart);
    }, [storeCart]);

    const loadData = async () => {
        const data = await getProductList(PRODUCT_LIMIT);
        setProductList(data);
        setLoading(false);
    }

    const searchHandler = async (event) => {
        const searchValue = event.target.value;
        if (searchValue) {
            const filtered = originalResults.filter((x) => x.title.toLowerCase().includes(searchValue));
            setProductList(filtered);
            return;
        }
        setProductList(originalResults);
    }

    const getProductList = async (limit) => {
        setLoading(true);
        const { data } = await axios({
            method: 'get',
            url: `${_GETPRODUCTS}${limit ? `?limit=${limit}` : ''}`,
        });
        setOriginalResults(data);
        setLoading(false);
        return data;
    }

    const seeMoreClickHandler = async () => {
        const data = await getProductList(originalResults.length + PRODUCT_LIMIT);
        setProductList(data);
    }

    const cartToggle = async (product, index) => {
        const isItemExisting = cart.findIndex((item) => item.id === product.id);

        if (isItemExisting < 0) {
            addTocart(product);
        } else {
            removeFromCart(product)
        }
    }

    return (
        <>
            {/* Home banner */}
            <section className='home-banner'>
                <div className='container d-flex align-items-center justify-content-end h-100'>
                    <div className='banner-body col-lg-5'>
                        <h1>Home Shopping, Your Choice!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </section>

            {/* Listing body */}
            <section className='listing-body d-flex flex-wrap container custom-padding'>
                {/* Filter section */}
                <div className='col-12 col-lg-3 listing-left'>
                    <div className='search-bar'>
                        <input type="text" placeholder="Search what you need" onChange={(e) => searchHandler(e)} disabled={isLoading} />
                        <img src='images/icons/search.png' />
                    </div>
                    <div className='price-range'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='mb-0'>Price</h5>
                            <img src='images/icons/filter.png' />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h5 className='mb-4'>Product Categories</h5>
                        <div className='categories'>
                            <a href="#">Coat and Jackets <img src='images/icons/arrow.png' /></a>
                            <a href="#">Dressses <img src='images/icons/arrow.png' /></a>
                            <a href="#">Playsuit <img src='images/icons/arrow.png' /></a>
                            <a href="#">Short <img src='images/icons/arrow.png' /></a>
                            <a href="#">Top <img src='images/icons/arrow.png' /></a>
                            <a href="#">Bottoms <img src='images/icons/arrow.png' /></a>
                        </div>
                    </div>
                    {/* Featured products */}
                    <div className='d-none d-lg-block'>
                        <h5 className='mb-4'>Featured Product</h5>
                        <div className='featured-products'>
                            <a href="#">
                                <img src='images/box.png' />
                                <div className=''>
                                    <p>Tropical Playsuit</p>
                                    <span>$100</span>
                                </div>
                            </a>
                            <a href="#">
                                <img src='images/box.png' />
                                <div className=''>
                                    <p>Tropical Playsuit</p>
                                    <span>$100</span>
                                </div>
                            </a>
                            <a href="#">
                                <img src='images/box.png' />
                                <div className=''>
                                    <p>Tropical Playsuit</p>
                                    <span>$100</span>
                                </div>
                            </a>
                            <a href="#">
                                <img src='images/box.png' />
                                <div className=''>
                                    <p>Tropical Playsuit</p>
                                    <span>$100</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Product listing */}
                <div className='col-lg-9 listing-right d-flex flex-wrap'>
                    {productList.map((product, index) => (
                        <div className='col-12 col-lg-6'>
                            <div className='product-item'>
                                <img src={product.image} />
                                <a className='add-wishlist' onClick={() => cartToggle(product, index)}>
                                    <img src='images/icons/heart-orange.png' />
                                </a>
                                <div className='product-detail'>
                                    <h4>{product.title}</h4>
                                    <ul className='flex-ul justify-content-center'>
                                        {
                                            [...Array(Math.round(product.rating.rate))].map((e) => (
                                                <li><img src='images/icons/star.png' /></li>
                                            ))
                                        }
                                    </ul>
                                    <span>{product.description}</span>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='col-12 col-lg-12 mt-3 mt-lg-5 d-flex justify-content-center align-items-center'>
                        <button type='button' className='btn btn-orange' onClick={seeMoreClickHandler}>
                            See More
                        </button>
                    </div>
                </div>
            </section>

            {/* News letter */}
            <section className='container text-center custom-padding'>
                <div className='news-letter-wrapper '>
                    <h1>Join Our News Letters</h1>
                    <p className='mx-auto'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster </p>
                    <div className='email-input'>
                        <form action="#">
                            <div class="input-group">
                                <input type="email" placeholder='Insert your mail here' required />
                                <button type="submit" className='btn btn-orange-icon'>
                                    <img src='images/icons/circle-arrow.png' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

export default productListLayout;