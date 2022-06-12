import Link from 'next/link';
import { useEffect, useState } from 'react';
import useCart from '../../store/store';

const navMenu = () => {

  const storeTotalItems = useCart((state) => state.totalItems);
  const storeCart = useCart((state) => state.cart);

  const [itemCount, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(storeTotalItems);
  }, [storeCart]);

  return (
    <header>
      <div className='top-header'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center py-4'>
            <Link href="product-list">
              <img src="images/logo.png" alt="logo" />
            </Link>
            <div className='header-right'>
              <ul className='flex-ul'>
                <li className='d-none d-lg-block'>
                  <a href="#">
                    <img className='pe-2' src='images/icons/phone.png' />
                    <span>Call Center</span>
                  </a>
                </li>
                <li className='d-none d-lg-block'>
                  <a href="#">
                    <img className='pe-2' src='images/icons/truck.png' />
                    <span>Shipping & Returns</span>
                  </a>
                </li>
                <li className='me-0 d-block d-lg-none'><a href="#"><img src='images/icons/notification.png' /></a></li>
                <li className='d-block d-lg-none'>
                  <a href="/cart"><img src='images/icons/cart.png' />
                    <span className="cart-count">
                      {itemCount}
                    </span>
                  </a>
                </li>
                <li className='d-block d-lg-none'><a href="#"><img src='images/icons/profile.png' /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className='container my-3 my-lg-4 py-2'>
        <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='col-12 col-lg-3'>
            <ul className='flex-ul'>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Promo</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className='col-12 col-lg-5 search-bar mt-3 mt-lg-0 mb-0 my-lg-0'>
            <input type="text" placeholder="Search what you need" />
            <img src='images/icons/search.png' />
          </div>
          <div className='col-12 col-lg-3 mt-3 mt-lg-0 d-none d-lg-block'>
            <ul className='flex-ul justify-content-end nav-right'>
              <li><a href="#"><img src='images/icons/heart.png' /></a></li>
              <li>
                <a href="/cart"><img src='images/icons/cart.png' />
                  <span className="cart-count">
                    {itemCount}
                  </span>
                </a>
              </li>
              <li><a href="#"><img src='images/icons/profile.png' /></a></li>
              <li className='me-0'><a href="#"><img src='images/icons/notification.png' /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navMenu;
