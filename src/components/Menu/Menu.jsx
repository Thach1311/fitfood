import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { GrPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('menu')}>
            <div className={cx('form')}>
                <h1 className={cx('headingText')}>THỰC ĐƠN</h1>
                <div className={cx('line')}></div>
                <p>Thực đơn Fitfood là sự kết hợp tinh tế của ẩm thực Đông Tây</p>
                <p>
                    Từng bữa ăn được thiết kế bởi bếp trưởng nhà hàng cùng đội ngũ dinh dưỡng để đảm bảo được sự cân
                    bằng trong hương vị nhưng vẫn giữ được chất lượng ở mức cao nhất. Tất cả các món đều đảm bảo ko bột
                    ngọt và ít đường
                </p>
                <div className={cx('dateAndOrder')}>
                    <div className={cx('date')}>
                        <div className="hover:text-[#FF2200] flex justify-center items-center">
                            <GrPrevious />

                            <div className="hover:text-[#FF2200]">TUẦN TRƯỚC</div>
                        </div>
                        <div className="text-[30px] font-[700]"> 15.04</div>
                        <div className="text-[30px] font-[700]">
                            <GrLinkNext />
                        </div>
                        <div className="text-[30px] font-[700]">19.04</div>
                        <div className="hover:text-[#FF2200] flex justify-center items-center">
                            TUẦN SAU
                            <div className="hover:text-[#FF2200]">
                                <GrNext />
                            </div>
                        </div>
                    </div>
                    <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                </div>

                <div className={cx('day')}>
                    <div className="flex justify-between items-center font-[700] text-[20px] text-[#ff2200]">NGÀY</div>
                    <span className="w-[1px] h-[30px] bg-[#dddd]"></span>
                    <div className="flex justify-between items-center font-[700] text-[20px] text-[#ffff]">SÁNG</div>
                    <span className="w-[1px] h-[30px] bg-[#dddd]"></span>
                    <div className="flex justify-between items-center font-[700] text-[20px] text-[#ffff]">TRƯA</div>
                    <span className="w-[1px] h-[30px] bg-[#dddd]"></span>
                    <div className="flex justify-between items-center font-[700] text-[20px] text-[#ffff]">TỐI</div>
                </div>

                <div className={cx('formItem')}>
                    <div className={cx('item')}></div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
