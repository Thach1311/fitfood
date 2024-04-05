import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import backgroundAbout from '../../assets/img/bg-about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);
AOS.init();
function Introduce() {
    return (
        <div className={cx('introduce')} style={{ backgroundImage: `url(${backgroundAbout})` }}>
            <div className={cx('main')}>
                <h1 className={cx('heading')} data-aos="fade-up">
                    FITFOOD VIETNAM
                </h1>
                <span className="h-[13px] w-[50px] bg-[#ff2033] mb-[24px]" data-aos="fade-right"></span>
                <span
                    className="text-[14px] font-[500] text-[#9999] mb-[24px]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Fitfood VN cung cấp các phần ăn lành mạnh hàng tuần giúp bạn duy trì một lối sống khỏe. Chúng tôi
                    tập trung vào chế độ ăn cân bằng được thiết kế chuyên biệt để hỗ trợ bạn kiểm soát cân nặng một cách
                    hiệu quả nhất.
                </span>
                <span className="text-[14px] font-[500] text-[#9999]" data-aos="fade-up" data-aos-duration="2200">
                    Nếu bạn đang tìm kiếm những bữa ăn ngon và tốt cho sức khỏe được chuẩn bị sẵn ở Saigon thì Fitfood
                    là một lựa chọn tối ưu. Thực đơn đa dạng với hơn 100 món của chúng tôi có thể giúp bạn thưởng thức
                    mà không ngán trong hơn 1 tháng.
                </span>
            </div>
        </div>
    );
}

export default Introduce;
