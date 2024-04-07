import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import bg from '../../assets/img/bg-testimonial.png';
const cx = classNames.bind(styles);
function Customer() {
    return (
        <>
            <div className={cx('customer')} style={{ backgroundImage: `url(${bg})` }}>
                <h1 className={cx('head2')}>CÂU CHUYỆN KHÁCH HÀNG</h1>
                <div className={cx('line')}></div>
                <div className={cx('des')}>
                    Những câu chuyện thành công từ khách hàng thân yêu của Fitfood, khi chúng tôi đồng hành trên con
                    đường thúc đẩy lối sống hành mạnh cùng họ.
                </div>
                <div className={cx('listItem')}>
                    <div className={cx('item')}>
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2024-02-29-at-1236-17091856655829.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2024-02-29-at-1232-17091856875811.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/351483765-1012144213528072-8104367635288915713-n-16922428272551.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/untitled-design-3-1678849725503.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/393257680-707564021417290-8784056869319395349-n-1700305399772.jpeg" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/357497989-650192427154450-6680058188453543747-n-16922424873813.jpeg" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/img-1194-16922432123783.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2023-11-18-at-173423-17003037228107.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2023-11-18-at-173828-17003039405904.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/5-17003043491009.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2023-11-18-at-174912-17003045808427.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screenshot-20201030-215530-facebook-16040699181733.jpg" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/356212643-645914697582223-8858909892311272615-n-16922426387753.jpeg" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/fitfood-post-1-16922576406384.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/july-27le-van-tien-157379866175.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/untitled-design-4-16788531049964.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/364707834-665966525577040-2335237567905602921-n-16922423064952.jpeg" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/aug-11paulo-15737984935492.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/untitled-design-8-16788547608348.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/untitled-design-7-16788545928454.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/untitled-design-9-16788559734405.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2024-02-29-at-115414-17091824660075.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2023-12-02-at-124314-17014958061663.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/untitled-design-10-16788561895022.png" alt="" />
                        <img src="https://fitfood.vn/img/0x1080/images/screen-shot-2024-02-29-at-122526-17091844988678.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customer;
