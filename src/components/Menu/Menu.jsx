import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { GrPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import imgHealthy from '../../assets/img/menu/healthy.jpeg';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Menu() {
    const [mouse, setMouse] = useState(false);

    return (
        <>
            <div className={cx('menu')}>
                <div className={cx('form')}>
                    <h1 className={cx('headingText')}>THỰC ĐƠN</h1>
                    <div className={cx('line')}></div>
                    <p>Thực đơn Fitfood là sự kết hợp tinh tế của ẩm thực Đông Tây</p>
                    <p>
                        Từng bữa ăn được thiết kế bởi bếp trưởng nhà hàng cùng đội ngũ dinh dưỡng để đảm bảo được sự cân
                        bằng trong hương vị nhưng vẫn giữ được chất lượng ở mức cao nhất. Tất cả các món đều đảm bảo ko
                        bột ngọt và ít đường
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
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px] hover:bg-[#ff203ad1]">
                            Đặt Ngay
                        </button>
                    </div>

                    <div className={cx('day')}>
                        <div className="flex justify-between items-center font-[700] text-[20px] text-[#ff2200] ">
                            NGÀY
                        </div>
                        <span className="w-[1px] h-[30px] bg-[#dddd]"></span>
                        <div className="flex justify-between items-center font-[700] text-[20px] text-[#ffff] w-[10%]">
                            SÁNG
                        </div>
                        <span className="w-[1px] h-[30px] bg-[#dddd]"></span>
                        <div className="flex justify-between items-center font-[700] text-[20px] text-[#ffff] w-[10%]">
                            TRƯA
                        </div>
                        <span className="w-[1px] h-[30px] bg-[#dddd]"></span>
                        <div className="flex justify-between items-center font-[700] text-[20px] text-[#ffff] w-[10%]">
                            TỐI
                        </div>
                    </div>

                    <div className={cx('formItem')}>
                        <div
                            className={cx('item')}
                            onClick={() => {
                                setMouse(true);
                            }}
                        >
                            <div className={cx('time', 'w-[10%]')}>
                                <div className={cx('time__day')}>T2</div>
                                <div className={cx('time__date')}>15.04</div>
                            </div>

                            <div className={cx('menuMorning', 'w-[25%]')}>
                                <div className="text-[14px] font-[700] ">BÒ KHOAI TÂY ĐÚT LÒ</div>
                                <div className="text-[14px] font-[500] ">Loaded Baked Potatoes</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">437 Kcal | 42, 17, 26</div>
                            </div>

                            <div className={cx('menuLunch', 'w-[20%]')}>
                                <div className="text-[14px] font-[700] ">HEO SỐT Á + MÌ RAU CỦ</div>
                                <div className="text-[14px] font-[500] ">Grilled Pork W Bell Pepper + Noodles</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">600 Kcal | 43, 24, 40</div>
                            </div>

                            <div className={cx('menuLunch', 'w-[20%]')}>
                                <div className="text-[14px] font-[700] ">HEO SỐT Á + MÌ RAU CỦ</div>
                                <div className="text-[14px] font-[500] ">Charsiu Chicken + Brơwn Rice</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">506 Kcal | 48, 8, 50</div>
                            </div>
                        </div>

                        <div className={cx('item')} onClick={() => setMouse(true)}>
                            <div className={cx('time', 'w-[10%]')}>
                                <div className={cx('time__day')}>T3</div>
                                <div className={cx('time__date')}>16.04</div>
                            </div>

                            <div className={cx('menuMorning', 'w-[25%]')}>
                                <div className="text-[14px] font-[700] ">**BÚN NƯA GÀ XÉ** (MÓN NƯỚC)</div>
                                <div className="text-[14px] font-[500] ">**Chicken Shirataki noodles Soup** (SOUP)</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">330 Kcal | 12, 10, 43</div>
                            </div>

                            <div className={cx('menuLunch', 'w-[20%]')}>
                                <div className="text-[14px] font-[700] ">BÒ XÀO SA TẾ + MÌ RAU CỦ</div>
                                <div className="text-[14px] font-[500] ">Spicy Stir-Fried Beef W Veggie Noodle</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">519 Kcal | 42, 9, 52</div>
                            </div>

                            <div className={cx('menuLunch', 'w-[20%]')}>
                                <div className="text-[14px] font-[700] ">MỰC KIỂU ẤN + GẠO LỨC</div>
                                <div className="text-[14px] font-[500] ">Indian Baby Squid with Brown Rice</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">526 Kcal | 46, 14, 43</div>
                            </div>
                        </div>

                        <div className={cx('item')} onClick={() => setMouse(true)}>
                            <div className={cx('time', 'w-[10%]')}>
                                <div className={cx('time__day')}>T4</div>
                                <div className={cx('time__date')}>17.04</div>
                            </div>

                            <div className={cx('menuMorning', 'w-[25%]')}>
                                <div className="text-[14px] font-[700] ">SALAD HEO XAY KIỂU NHẬT</div>
                                <div className="text-[14px] font-[500] ">Japanese Minced Pork Salad</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">421 Kcal | 21, 25, 30</div>
                            </div>

                            <div className={cx('menuLunch', 'w-[20%]')}>
                                <div className="text-[14px] font-[700] ">
                                    **CÁ SỐT MÙ TẠC VÀNG + LÚA MẠCH** (MÓN MỚI)
                                </div>
                                <div className="text-[14px] font-[500] ">**Fish w yellow mustard sauce**(NEW DISH)</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">552 Kcal | 40, 28, 35</div>
                            </div>

                            <div className={cx('menuLunch', 'w-[20%]')}>
                                <div className="text-[14px] font-[700] ">MÌ RAU CỦ XÀO GÀ SỐT XÍ MUỘI</div>
                                <div className="text-[14px] font-[500] ">Apricot chicken with veggies noodles</div>
                                <div className="text-[14px] font-[500] text-[#FF2033] ">520 Kcal | 30, 27, 28</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={cx('menuHealthyFoodMouse')}
                style={mouse === true ? { display: 'block' } : { display: 'none' }}
            >
                <div onClick={() => setMouse(false)}>
                    <img src={imgHealthy} alt="" />
                </div>
            </div>
        </>
    );
}

export default Menu;
