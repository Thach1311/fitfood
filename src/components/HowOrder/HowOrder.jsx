import classNames from 'classnames/bind';
import styles from './HowOrder.module.scss';
import { CiViewList } from 'react-icons/ci';
import { PiCookingPotLight } from 'react-icons/pi';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiTelevisionThin } from 'react-icons/pi';
const cx = classNames.bind(styles);
function HowOrder() {
    return (
        <div className={cx('howOrder')}>
            <h1 className={cx('heading')}>CÁCH ĐẶT HÀNG</h1>
            <div className={cx('line')}></div>
            <div className={cx('listItem')}>
                <div className={cx('formItem')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <CiViewList />
                        </div>
                        <div className={cx('name')}>Chọn Gói Ăn</div>
                        <div className={cx('title')}>
                            Chọn gói ăn phù hợp với nhu cầu của bạn và điền đầy đủ thông tin giao hàng
                        </div>
                    </div>
                </div>

                <div className={cx('formItem')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <PiCookingPotLight />
                        </div>
                        <div className={cx('name')}>Fitfood nấu</div>
                        <div className={cx('title')}>
                            Chúng tôi lựa chọn những nguyên liệu tốt nhất và nấu trong bếp công nghiệp hiện đại
                        </div>
                    </div>
                </div>

                <div className={cx('formItem')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <LiaShippingFastSolid />
                        </div>
                        <div className={cx('name')}>Giao hàng</div>
                        <div className={cx('title')}>
                            Đội ngũ giao hàng của Fitfood sẽ giao tận nơi các phần ăn cho bạn mỗi ngày
                        </div>
                    </div>
                </div>

                <div className={cx('formItem')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <PiTelevisionThin />
                        </div>
                        <div className={cx('name')}>Thưởng thức</div>
                        <div className={cx('title')}>
                            Không cần suy nghĩ, shopping hay nấu nướng dầu mỡ, chỉ cần hâm và thưởng thức!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowOrder;
