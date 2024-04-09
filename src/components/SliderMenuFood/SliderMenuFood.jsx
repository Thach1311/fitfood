import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from '../../assets/img/slide1.webp';
import slide2 from '../../assets/img/slide2.webp';
import classNames from 'classnames/bind';
import styles from './SliderMenuFood.module.scss';
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
                        <span className="text-[40px] text-[#ffff] font-[300]">WEEKLY MEAL PLAN</span>
                        <span className="text-[75px] text-[#ffff] font-[700]">08.04 12.04</span>
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={cx('form')} style={{ backgroundImage: `url(${slide2})` }}>
                        <span className="text-[40px] text-[#ffff] font-[300]">WEEKLY MEAL PLAN</span>
                        <span className="text-[75px] text-[#ffff] font-[700]">08.04 12.04</span>
                        <button className="w-[170px] h-[50px] bg-[#FF2033] text-[#ffff] text-[16px]">Đặt Ngay</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
