import classNames from 'classnames/bind';
import styles from './Natural.module.scss';
import natural1 from '../../assets/img/natural/natural1.jpg';
import natural2 from '../../assets/img/natural/natural2.jpg';
import natural3 from '../../assets/img/natural/natural3.jpg';
const cx = classNames.bind(styles);
function Natural() {
    return (
        <>
            <div className={cx('natural')}>
                <h1 className={cx('head1')}>CHUNG TAY BẢO VỆ</h1>
                <h1 className={cx('head2')}>MÔI TRƯỜNG</h1>
                <div className={cx('line')}></div>
                <div className={cx('listItem')}>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={natural1} alt="" />
                        </div>
                        <div className={cx('des')}>
                            Nhà cung cấp duy nhất sử dung túi Nylon sinh học tự hủy thân thiện với môi trường
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={natural2} alt="" />
                        </div>
                        <div className={cx('des')}>
                            Rửa sạch lại hộp nhựa đen để nhận hoàn tiền 5,000 vnd cho mỗi 10 hộp
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={natural3} alt="" />
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

export default Natural;
