import classNames from 'classnames/bind';
import styles from './HelpComponent.module.scss';
const cx = classNames.bind(styles);
let arrayAge = [];
for (let i = 18; i <= 80; i++) {
    arrayAge.push(i);
}
let arrayKg = [];
for (let i = 50; i <= 150; i++) {
    arrayKg.push(i);
}
let arrayHeigh = [];
for (let i = 110; i <= 210; i++) {
    arrayHeigh.push(i);
}

function HelpComponent() {
    return (
        <div className={cx('help')}>
            <div className={cx('form')}>
                <h1 className={cx('headText')}>TƯ VẤN</h1>
                <div className={cx('line')}></div>
                <p>
                    Fitfood sử dụng Công Cụ Tính Chỉ Số BMR (Basal Metabolic Rate) để tính toán tỷ lệ trao đổi chất cơ
                    bản trong cơ thể bạn, lượng năng lượng mà bạn tiêu tốn dựa trên tần suất vận động trong một ngày.
                </p>
                <p>
                    Bạn chỉ cần nhập thông tin theo yêu cầu bên dưới và lựa chọn mục tiêu mong muốn, hệ thống tư vấn của
                    Fitfood sẽ gợi ý cho bạn Gói Ăn cũng như combo các sản phẩm dùng kèm phù hợp.
                </p>
            </div>
            <div className={cx('table')}>
                <div className={cx('table__form')}>
                    <div className={cx('table__form-item')}>
                        <span>Giới tính</span>
                        <div className="flex justify-around w-[60%]">
                            <div>
                                <input type="radio" name="range" />
                                Nam{' '}
                            </div>
                            <div>
                                <input type="radio" name="range" /> Nữ
                            </div>
                        </div>
                    </div>
                    <div className={cx('table__form-item')}>
                        <span>Tuổi</span>
                        <select className="w-[60%] h-[30px] text-[#686868] font-[600]">
                            {arrayAge.map((data) => (
                                <option>{data}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('table__form-item')}>
                        <span>Cân nặng</span>
                        <select className="w-[60%] h-[30px] text-[#686868] font-[600]">
                            {arrayKg.map((data) => (
                                <option>{data}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('table__form-item')}>
                        <span>Chiều cao</span>
                        <select className="w-[60%] h-[30px] text-[#686868] font-[600]">
                            {arrayHeigh.map((data) => (
                                <option>{data}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('table__form-item')}>
                        <span>Hoạt động</span>
                        <select name="" id="" className="w-[60%] h-[30px] text-[#686868] font-[600]">
                            <option value="">Không tập thể dục, chỉ thở</option>
                            <option value="">Vận động nhẹ nhàng (1 - 3 buổi/ tuần )</option>
                            <option value="">Vận động thường xuyên (3 - 5 buổi/ tuần )</option>
                            <option value="">Vận động tích cực (6 - 7 buổi/ tuần )</option>
                            <option value="">Thể dục là đam mê (2 buổi/ngày - 7 ngày/ tuần )</option>
                        </select>
                    </div>
                    <div className={cx('table__form-item')}>
                        <span>Mục tiêu</span>
                        <select name="" id="" className="w-[60%] h-[30px] text-[#686868] font-[600]">
                            <option value="">Giảm cân, Giảm mở bụng</option>
                            <option value="">Giữ cân sống lành mạnh</option>
                            <option value="">Tăng cân tăng cơ</option>
                        </select>
                    </div>
                </div>

                <div className={cx('table__form-item-btn', 'flex items-center justify-center')}>
                    <button className="font-[600] text-[14px] bg-[#FF2033] text-white h-[30px] w-[170px]">
                        Tư vấn sản phầm{' '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HelpComponent;
