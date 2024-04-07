import classNames from 'classnames/bind';
import styles from './Volunteer.module.scss';
import bg from '../../assets/img/bg-charity1.png';
import pic1 from '../../assets/img/volunteer/volunteer1.jpg';
import pic2 from '../../assets/img/volunteer/volunteer2.jpg';
import pic3 from '../../assets/img/volunteer/volunteer3.jpg';

const cx = classNames.bind(styles);
function Volunteer() {
    return (
        <>
            <div className={cx('volunteer')} style={{ backgroundImage: `url(${bg})` }}>
                <h1 className={cx('head')}>HOẠT ĐỘNG THIỆN NGUYỆN</h1>
                <div className={cx('line')}></div>
                <div className={cx('listItem')}>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={pic1} alt="" />
                        </div>
                        <div className={cx('des')}>
                            Nhà cung cấp duy nhất sử dung túi Nylon sinh học tự hủy thân thiện với môi trường
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={pic2} alt="" />
                        </div>
                        <div className={cx('des')}>
                            Rửa sạch lại hộp nhựa đen để nhận hoàn tiền 5,000 vnd cho mỗi 10 hộp
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={pic3} alt="" />
                        </div>
                        <div className={cx('des')}>
                            Fitfood chỉ cung cấp 01 bộ muỗng nĩa mỗi ngày để giảm thiểu rác thải nhựa
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Volunteer;
