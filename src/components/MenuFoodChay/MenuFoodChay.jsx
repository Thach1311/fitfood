import classNames from 'classnames/bind';
import styles from './MenuFoodChay.module.scss';
import { GrPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { useState } from 'react';
import imgChay from '../../assets/img/menu/chay.jpeg';
const cx = classNames.bind(styles);
function Menu() {
    const [mouse, setMouse] = useState(false);
    return (
        <>
            <div className={cx('menu')}>
                <div className={cx('form')}>
                    <h1 className={cx('headingText')}>THỰC ĐƠN CHAY</h1>
                    <div className={cx('line')}></div>

                    <div className={cx('dateAndOrder')}>
                        <div className={cx('date')}>
                            <div className="hover:text-[#4bc849] flex justify-center items-center">
                                <GrPrevious />

                                <div className="hover:text-[#4bc849]">TUẦN TRƯỚC</div>
                            </div>
                            <div className="text-[30px] font-[700]"> 15.04</div>
                            <div className="text-[30px] font-[700]">
                                <GrLinkNext />
                            </div>
                            <div className="text-[30px] font-[700]">19.04</div>
                            <div className="hover:text-[#4bc849] flex justify-center items-center">
                                TUẦN SAU
                                <div className="hover:text-[#4bc849]">
                                    <GrNext />
                                </div>
                            </div>
                        </div>
                        <button className="w-[170px] h-[50px] bg-[#4bc849] text-[#ffff] text-[16px] hover:bg-[#4bc850]">
                            Đặt Ngay
                        </button>
                    </div>

                    <div className={cx('day')}>
                        <div className="flex justify-between items-center font-[700] text-[20px] text-[#4bc849] ">
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
                        <div className={cx('item')} onClick={() => setMouse(true)}>
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

                    <h1 className="text-[24px] font-[700] text-[#FF2033]">Note</h1>
                    <p className="text-[14px] font-[500] text-[#686868] ">
                        Các phần ăn được tính toán calories cẩn thận. Chỉ số dinh dưỡng dưới tên phần ăn được liệt kê
                        theo thứ tự Năng lượng (Kcal/Calories), Tinh Bột, Chất béo và Chất đạm. <br></br> Lưu ý: Các
                        phần ăn của Fitfood luôn được giao lạnh, đựng trong hộp nhựa thân thiện với lò vi sóng. Vui lòng
                        bảo quản lạnh sau khi nhận hàng và hâm nóng từ 2-3 phút trước khi dùng.<br></br> Phần ăn bình
                        thường chỉ bao gồm thịt và rau củ, Tinh bột phức (gạo lức, gạo nâu, mì rau củ, bún, bánh mì nâu)
                        sẽ được gửi kèm trong phần ăn có ghi chú dấu (+)
                    </p>
                </div>
            </div>

            <div
                className={cx('menuFoodChayMouse')}
                style={mouse === true ? { display: 'block' } : { display: 'none' }}
            >
                <div onClick={() => setMouse(false)}>
                    <img src={imgChay} alt="" />
                </div>
            </div>
        </>
    );
}

export default Menu;
