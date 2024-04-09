import Menu from '../Menu/Menu';
import MenuFoodChay from '../MenuFoodChay/MenuFoodChay';

import classNames from 'classnames/bind';
import styles from './FormMenu.module.scss';
const cx = classNames.bind(styles);
function FormMenuFood() {
    return (
        <div className={cx('form')}>
            <Menu></Menu>
            <MenuFoodChay></MenuFoodChay>
        </div>
    );
}

export default FormMenuFood;
