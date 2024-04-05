import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo-fitfood.png';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                <img src={logo} alt="" />
            </div>
            <div className={cx('menu')}>
                <span>TRANG CHỦ</span>
                <span>THỰC ĐƠN</span>
                <span>TƯ VẤN</span>
                <span>ĐẶT HÀNG</span>
                <span>TIN TỨC</span>
                <span>FAQS</span>
            </div>
            <div className={cx('formSignUpAndSignIn')}>
                <div className={cx('signUp')}>Đăng ký</div>
                <div className={cx('signIn')}>Đăng nhập</div>
            </div>
        </div>
    );
}

export default Header;
