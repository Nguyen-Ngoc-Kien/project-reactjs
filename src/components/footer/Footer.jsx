import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/eco-logo.png';

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <div className="logo">
                            <div>
                                <h1 className="text-white">Multimart</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus vero earum recusandae consequuntur et, facilis debitis excepturi reiciendis hic!   
                            </p>
                </div>
                <div className="col-lg-3">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Top Categories</h4>
                        <ul class="list-group">
                            <li class="list-group-item ps-0 border-0"><Link to="#">Mobile Phones</Link></li>
                            <li class="list-group-item ps-0 border-0"><Link to="#">Modern Sofa</Link></li>
                            <li class="list-group-item ps-0 border-0"><Link to="#">Arm chair</Link></li>
                            <li class="list-group-item ps-0 border-0"><Link to="#">Smart Watches</Link></li>
                        </ul>                       
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ul class="list-group">
                            <li class="list-group-item ps-0 border-0"><Link to="/shop">Shop</Link></li>
                            <li class="list-group-item ps-0 border-0"><Link to="/cart">Cart</Link></li>
                            <li class="list-group-item ps-0 border-0"><Link to="/login">Login</Link></li>
                            <li class="list-group-item ps-0 border-0"><Link to="#">Privacy Policy</Link></li>
                        </ul>                       
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Contact</h4>
                        <ul class="list-group footer__contact">
                            <li class="list-group-item ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-map-pin-line"></i></span>
                                <p>29 Khương Hạ, Khương Đình, Thanh Xuân, Hà Nội</p>
                            </li>
                            <li class="list-group-item ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-phone-line"></i></span>
                                <p>0375078588</p>
                            </li>
                            <li class="list-group-item ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-mail-line"></i></span>
                                <p>ngngockien2002@gmail.com</p>
                            </li>
                        </ul>                       
                    </div>
                </div>

                {/* <div className="col-lg-12">
                    <div className="footer__copyright">Copyright {year} developed by Nguyễn Ngọc Kiên.</div>
                </div> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer