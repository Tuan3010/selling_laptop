import s from './styleFooter.module.scss'
import '../../../../assets/styles/base/grid.scss'
import clsx from 'clsx';
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={clsx('grid wide', s.containerFlex)}>
                <div style={{flex: '1'}}>
                    <h4>Hệ thống Shop trên toàn quốc</h4>
                    <p>Cửa hàng chuyên buôn bán laptop tại Thành Phố Hồ Chí Minh</p>
                </div>
                <div >
                    <p>Logo</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;