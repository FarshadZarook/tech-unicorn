import React, { useEffect, useState } from "react";
import useCart from '../../store/store';

const cartLayout = () => {

    const removeFromCart = useCart((state) => state.removeFromCart);
    const storeTotalItems = useCart((state) => state.totalItems);
    const storeTotal = useCart((state) => state.totalItems);
    const storeCart = useCart((state) => state.cart);

    const [totalItems, setTotalItems] = useState(0);
    const [total, setTotal] = useState(0.0);
    const [cart, setCart] = useState([]);

    console.log(cart)

    useEffect(() => {
        setTotalItems(storeTotalItems);
        setTotal(storeTotal);
        setCart(storeCart);
    }, [storeCart]);


    const remove = async (product) => {
        removeFromCart(product);
    }

    return (
        <>
            {/* Home banner */}
            <section className='home-banner'>
                <div className='container d-flex align-items-center justify-content-end h-100'>
                    <div className='banner-body col-lg-5'>
                        <h1>Our Gallery, Your Dreams!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </section>

            <section className="cart-body container custom-padding">
                <h1 className="mb-5 pb-3">My Cart</h1>
                {cart.map((x) => {
                    return (
                        <div className="cart-left d-flex align-items-end mb-5">
                            <div className="col-4 cart-image">
                                <img src={x.image} />
                            </div>
                            <div className="ms-3 ms-lg-5 item-detail col-7 col-lg-4">
                                <h3>{x.title}</h3>
                                <div className="col-4 col-lg-6">
                                    <p className="d-flex justify-content-between"><span className="col-lg-6">Size :</span> M</p>
                                    <p className="d-flex justify-content-between"><span className="col-lg-6">Quantity :</span> 1</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="price">${x.price}</p>
                                    <div className="d-flex">
                                        <button className="btn-outline" onClick={() => remove(x)}>
                                            <img src="images/icons/bin.png" />
                                        </button>
                                        <button className="btn-outline px-2 px-lg-4 d-flex align-items-center">
                                            <span className="d-none d-lg-block">Wishlist</span>
                                            <img className="ps-0 ps-lg-2" src="images/icons/wishlist-heart.png" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </section>
        </>
    );
};

export default cartLayout;