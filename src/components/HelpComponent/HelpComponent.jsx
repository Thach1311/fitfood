import classNames from 'classnames/bind';
import styles from './HelpComponent.module.scss';
const cx = classNames.bind(styles);
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
                <div className={cx('form_table')}>
                    <div className={cx('layout__table')}>
                        <div className="item">
                            <div className={cx('form_info')}>
                                <div>Giới tính</div>
                                <div>
                                    <input type="radio" name="range" className='mr-[10px] ml-[20px]'/> Nam
                                    <input type="radio" name="range" className='mr-[10px] ml-[20px]'/> Nữ
                                </div>
                            </div>
                        </div>
    
                        <div className="item">
                            <div className={cx('form_info')}>
                                <div>Giới tính</div>
                                <div>
                                    <input type="radio" name="range" className='mr-[10px] ml-[20px]'/> Nam
                                    <input type="radio" name="range" className='mr-[10px] ml-[20px]'/> Nữ
                                </div>
                            </div>
                        </div>
                          <div className="item">
                            <div className={cx('form_info')}>
                                <div>Giới tính</div>
                                <div>
                                    <input type="radio" name="range" className='mr-[10px] ml-[20px]'/> Nam
                                    <input type="radio" name="range" className='mr-[10px] ml-[20px]'/> Nữ
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default HelpComponent;
