import clsx from "clsx";
import logo from '../../../../assets/images/logo.png';
import loginMobile from '../../../../assets/images/login_mobile.png';
import '../../../../assets/styles/base/grid.scss';
import CateHover from "./CateHover";
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faCartShopping, faSearch, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



const Header = () => {
    console.log('re-rendering---');
    //Css cho Phần Cate OverPlay cho thiết bị mobile
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <header className={clsx(style.mainHeader)}>
            <div className="grid wide">
                <div className={clsx(style.containerMainHeader)}>
                    <img className={style.logoHeader} src={logo} width={'80px'}/>

                    <div className={style.searchAndCate}>

                        <div className={style.btnCate}
                             onMouseEnter={() => setIsHovered(true)}
                             onMouseLeave={() => setIsHovered(false)}
                        >
                            <FontAwesomeIcon icon={faBars} />                
                            <span className={style.btnCateText}>Danh mục</span>               
                            {isHovered && <CateHover />}                 
                        </div>

                        <div className={isHovered ? style.cateOverPlay : ''}></div>

                        <div className={style.searchInputContainer}>
                            <form className={clsx('flex')} style={{alignItems: 'center'}}  action="" method="">
                                <input className={clsx(style.searchInput)} placeholder="Nhập tên cần tìm ..."></input>
                                <button className={style.btnSearch}>
                                    <FontAwesomeIcon icon={faSearch} style={{marginTop: '3px'}}/>
                                </button>

                            </form>
                        </div>

                    </div>

                    <div className={style.cartAndInfo}>
                        <button className={style.btnInfo}>
                            <FontAwesomeIcon icon={faUser} size="lg"/>
                        </button>

                        <a href="" className={style.btnCart}>
                            <FontAwesomeIcon icon={faCartShopping}/>
                            <span className={style.btnCartText}>Giỏ hàng</span>
                        </a>
                            
                    </div>

                </div>
            </div>
            
            <div className={style.navCateMobileOverPlay}>
                <div className={style.navCateMobile}>
                    <div className={style.navCateHeaderMobile}>
                        <div>
                            <img src={logo} width={'50px'} style={{marginTop: '2px', marginLeft: '4px'}} />
                        </div>
                        <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: '#fff', marginRight: '10px'}}/>
                    </div>
                    <div className={style.navContentMobile}>
                        <div className={style.navIntroduceMobile}>
                            <div className={style.navCateHeaderMobileTop}>
                                <div className={style.navIntroduceRight}>
                                    <span className={style.navIntroduceRightText}>Đăng nhập hoặc đăng ký để nhận thêm nhiều ưu đãi hấp dẫn</span>   
                                    <button className={style.btnSignUpMobile}>Đăng ký</button>
                                    <button className={style.btnSignInMobile}>Đăng nhập</button>
                                </div>
                                <div className={style.navIntroduceRight}>
                                    <img src={loginMobile} width={'126px'}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className={style.navItemCateMobileWrap}>
                            <ul style={{padding:'0', margin:'0'}}>
                                <li className={style.navItemCateMobile}>
                                    <a className={style.navItemMobileTagA} href="">Icon và chữ</a>
                                </li>
                                <li className={style.navItemCateMobile}>
                                    <a className={style.navItemMobileTagA} href="">Icon và chữ</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.navItemCateMobileWrap}>
                            <ul style={{padding:'0', margin:'0'}}>
                                <li className={style.navItemCateMobile}>
                                    <a className={style.navItemMobileTagA} href="">Icon và chữ</a>
                                </li>
                                <li className={style.navItemCateMobile}>
                                    <a className={style.navItemMobileTagA} href="">Icon và chữ</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.navItemCateMobileWrap}>
                            <ul style={{padding:'0', margin:'0'}}>
                                <li className={style.navItemCateMobile}>
                                    <a className={style.navItemMobileTagA} href="">Icon và chữ</a>
                                </li>
                                <li className={style.navItemCateMobile}>
                                    <a className={style.navItemMobileTagA} href="">Icon và chữ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>     
        </header>
    );
};

export default Header;