import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo-fitfood.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Header() {
    const [active, setActive] = useState('TRANG CHỦ');
    console.log(active);
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                <img src={logo} alt="" />
            </div>
            <div className={cx('menu')}>
                <div>
                    <Link
                        className={cx(`${active === 'TRANG CHỦ' ? 'active' : ''}`)}
                        onClick={() => {
                            setActive('TRANG CHỦ');
                        }}
                        to="/"
                    >
                        TRANG CHỦ
                    </Link>
                </div>
                <div>
                    <Link
                        className={cx(`${active === 'THỰC ĐƠN' ? 'active' : ''}`)}
                        onClick={() => {
                            setActive('THỰC ĐƠN');
                        }}
                        to="/menufood"
                    >
                        THỰC ĐƠN
                    </Link>
                </div>
                <div>
                    <Link
                        className={cx(`${active === 'TƯ VẤN' ? 'active' : ''}`)}
                        onClick={() => {
                            setActive('TƯ VẤN');
                        }}
                        to="/help"
                    >
                        TƯ VẤN
                    </Link>
                </div>
                <div>
                    <Link
                        className={cx(`${active === 'ĐẶT HÀNG' ? 'active' : ''}`)}
                        onClick={() => {
                            setActive('ĐẶT HÀNG');
                        }}
                        to="/order"
                    >
                        ĐẶT HÀNG
                    </Link>
                </div>
                <div>
                    <Link
                        className={cx(`${active === 'TIN TỨC' ? 'active' : ''}`)}
                        onClick={() => {
                            setActive('TIN TỨC');
                        }}
                        to="/news"
                    >
                        TIN TỨC
                    </Link>
                </div>
                <div>
                    <Link
                        className={cx(`${active === 'FAQS' ? 'active' : ''}`)}
                        onClick={() => {
                            setActive('FAQS');
                        }}
                        to="/faqs"
                    >
                        FAQS
                    </Link>
                </div>
            </div>
            <div className={cx('formSignUpAndSignIn')}>
                <div className={cx('signUp')}>Đăng ký</div>
                <div className={cx('signIn')}>Đăng nhập</div>
            </div>
        </div>
    );
}

export default Header;
