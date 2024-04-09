import Menu from '../Menu/Menu';
import classNames from 'classnames/bind';
import styles from './FormMenu.module.scss'
const cx = classNames.bind(styles)
function FormMenuFood() {
    return (
        <div className={cx('form')}>
            <Menu></Menu>
        </div>
    );
}

export default FormMenuFood;
