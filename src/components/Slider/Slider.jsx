import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from '../../assets/img/slide1.webp';
import slide2 from '../../assets/img/slide2.webp';
import slide3 from '../../assets/img/slide3.webp';
import slide4 from '../../assets/img/slide4.webp';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
const cx = classNames.bind(styles);
function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                loop
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={cx('form')} style={{ backgroundImage: `url(${slide1})` }}>
                        <span className="text-[40px] text-[#ffff] font-[300]">KẾ HOẠCH BỮA ĂN HÀNG TUẦN CHO</span>
                        <span className="text-[75px] text-[#ffff] font-[700]">MỘT LỐI SỐNG LÀNH MẠNH</span>
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={cx('form')} style={{ backgroundImage: `url(${slide2})` }}>
                        <span className="text-[40px] text-[#ffff] font-[300]">TRẢI NGHIỆM BỮA ĂN SẠCH</span>
                        <span className="text-[75px] text-[#ffff] font-[700]">TƯƠI NGON GIÀU DINH DƯỠNG</span>
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('form')} style={{ backgroundImage: `url(${slide3})` }}>
                        <span className="text-[40px] text-[#ffff] font-[300]">NHÀ CUNG CẤP BỮA ĂN SẠCH</span>
                        <span className="text-[75px] text-[#ffff] font-[700]">LỚN NHẤT SÀI GÒN</span>
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('form')} style={{ backgroundImage: `url(${slide4})` }}>
                        <span className="text-[40px] text-[#ffff] font-[300]">GIẢI PHÁP HEALTHY FOOD</span>
                        <span className="text-[75px] text-[#ffff] font-[700]">GIAO TẬN NƠI</span>
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
