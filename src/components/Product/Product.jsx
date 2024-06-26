import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import produce1 from '../../assets/img/productHome/product1.png';
import produce2 from '../../assets/img/productHome/product2.jpg';
import produce3 from '../../assets/img/productHome/product3.jpg';
import produce4 from '../../assets/img/productHome/product4.jpg';
import produce5 from '../../assets/img/productHome/product5.jpg';
import produce6 from '../../assets/img/productHome/product6.jpg';
import produce7 from '../../assets/img/productHome/product7.jpg';
import produce8 from '../../assets/img/productHome/product8.jpg';
import backGroundRed from '../../assets/img/bg-red.png';
import { FaShoppingCart } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Product() {
    return (
        <>
            <div className={cx('featured-product')} style={{ backgroundImage: `url(${backGroundRed})` }}>
                <div className={cx('title')}>SẢN PHẨM TIÊU BIỂU</div>
                <div className={cx('line')}></div>
                <div className={cx('des')}>
                    Fitfood cung cấp nhiều gói ăn và thực phẩm dùng kèm đa dạng phù hợp với mọi nhu cầu của bạn
                </div>
                <div className={cx('list_item')}>
                    <div className={cx('listFirst')}>
                        <a href="https://fitfood.vn/san-pham/lunch-eatclean" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce1} alt="" />
                            </div>
                            <h2>Gói LUNCH</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">349,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>
                        <a href="https://fitfood.vn/san-pham/full" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce2} alt="" />
                            </div>
                            <h2>Gói FULL</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">750,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>

                        <a href="https://fitfood.vn/san-pham/fit3" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce3} alt="" />
                            </div>
                            <h2>Gói FIT 3</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">600,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>

                        <a href="https://fitfood.vn/san-pham/fit1" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce4} alt="" />
                            </div>
                            <h2>Gói FIT 1</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">600,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={cx('listSecond')}>
                        <a href="https://fitfood.vn/san-pham/fit2" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce5} alt="" />
                            </div>
                            <h2>Gói FIT 2</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">600,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>

                        <a href="https://fitfood.vn/san-pham/meat-s" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce6} alt="" />
                            </div>
                            <h2>Gói MEAT-S</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">1,200,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>
                        <a href="https://fitfood.vn/san-pham/meat" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce7} alt="" />
                            </div>
                            <h2>Gói MEAT</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">950,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>

                        <a href="https://fitfood.vn/san-pham/veg" className={cx('item')}>
                            <div className={cx('imgProduct')}>
                                <img src={produce8} alt="" />
                            </div>
                            <h2>Gói CHAY</h2>
                            <div className={cx('cost')}>
                                <span className="text-[14px] font-[500] text-[#686868]">600,000đ</span>
                                <div className={cx('icon')}>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
