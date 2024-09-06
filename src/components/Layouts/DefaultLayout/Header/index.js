import clsx from "clsx";
import logo from "../../../../assets/images/logo.png";
import loginMobile from "../../../../assets/images/login_mobile.png";
import "../../../../assets/styles/base/grid.scss";
import style from "./style.module.scss";

import CateHover from "./CateHover";
import BtnUserInfo from "./BtnUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import {
  faCartShopping,
  faL,
  faSearch,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import SearchResult from "./SearchResult";

const Header = () => {
  
  const divBtnCateContainer = useRef();
  const divOverPlay = useRef();
  const refInputSearch = useRef();
  

  const handleShowOverPlay = () => {
    divOverPlay.current.className = style.cateOverPlay;
    refInputSearch.current.blur();
  };
  const handleHidenOverPlay = () => {
    divOverPlay.current.classList.remove(style.cateOverPlay);
  };
  return (
    <header className={clsx(style.mainHeader)}>
      <div className="grid wide">
        <div className={clsx(style.containerMainHeader)}>
          <Link>
            <img className={style.logoHeader} src={logo} width={"80px"} />
          </Link>

          <div className={style.searchAndCate}>
            {/* Btn cate for PC */}

            <div ref={divBtnCateContainer} className={style.btnCateContainer}>
              <Tippy
                onHide={handleHidenOverPlay}
                onShow={handleShowOverPlay}
                placement="bottom-start"
                interactive
                render={(attrs) => <CateHover />}
              >
                <div className={style.btnCate}>
                  <FontAwesomeIcon icon={faBars} />
                  <span className={style.btnCateText}>Danh mục</span>
                </div>
              </Tippy>
            </div>

            <div ref={divOverPlay}></div>

            {/* Btn category for mobile */}
            <label htmlFor="nav-mobile-input" className={style.btnCateMobile}>
              <FontAwesomeIcon icon={faBars} />
            </label>
            <input
              hidden
              type="checkbox"
              id="nav-mobile-input"
              className={style.navMobileInput}
            />
            <div
              className={style.navCateMobileOverPlay}
              style={{ display: "block" }}
            >
              <div className={style.navCateMobile}>
                <div className={style.navCateHeaderMobile}>
                  <div>
                    <img
                      src={logo}
                      width={"50px"}
                      style={{ marginTop: "2px", marginLeft: "4px" }}
                    />
                  </div>
                  <label htmlFor="nav-mobile-input">
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="2xl"
                      style={{ color: "#fff", marginRight: "10px" }}
                    />
                  </label>
                </div>
                <div className={style.navContentMobile}>
                  <div className={style.navIntroduceMobile}>
                    <div className={style.navCateHeaderMobileTop}>
                      <div className={style.navIntroduceRight}>
                        <span className={style.navIntroduceRightText}>
                          Đăng nhập hoặc đăng ký để nhận thêm nhiều ưu đãi hấp
                          dẫn
                        </span>

                        <BtnUserInfo isActiveMB />
                      </div>
                      <div className={style.navIntroduceRight}>
                        <img src={loginMobile} width={"126px"} />
                      </div>
                    </div>
                  </div>

                  <div className={style.navItemCateMobileWrap}>
                    <ul style={{ padding: "0", margin: "0" }}>
                      <li className={style.navItemCateMobile}>
                        <a className={style.navItemMobileTagA} href="">
                          Icon và chữ
                        </a>
                      </li>
                      <li className={style.navItemCateMobile}>
                        <a className={style.navItemMobileTagA} href="">
                          Icon và chữ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={style.navItemCateMobileWrap}>
                    <ul style={{ padding: "0", margin: "0" }}>
                      <li className={style.navItemCateMobile}>
                        <a className={style.navItemMobileTagA} href="">
                          Icon và chữ
                        </a>
                      </li>
                      <li className={style.navItemCateMobile}>
                        <a className={style.navItemMobileTagA} href="">
                          Icon và chữ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={style.navItemCateMobileWrap}>
                    <ul style={{ padding: "0", margin: "0" }}>
                      <li className={style.navItemCateMobile}>
                        <a className={style.navItemMobileTagA} href="">
                          Icon và chữ
                        </a>
                      </li>
                      <li className={style.navItemCateMobile}>
                        <a className={style.navItemMobileTagA} href="">
                          Icon và chữ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chứa ô Input */}
            <div className={style.searchInputContainer}>
              <Tippy

              trigger="focusin"
              placement="bottom"
              interactive
              render={() => 
                <div className={style.tippyWrapResultSearch}>
                  <SearchResult />
                </div>
              }
              >
                <form
                  className={clsx("flex")}
                  style={{ alignItems: "center" }}
                  action=""
                  method=""
                >
                  <input
                    ref={refInputSearch}
                    className={clsx(style.searchInput)}
                    placeholder="Nhập tên cần tìm ..."
                  />
                  <button className={style.btnSearch}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ marginTop: "3px" }}
                    />
                  </button>
                </form>
              </Tippy>  
            </div>
          </div>


          <div className={style.cartAndInfo}>
            <BtnUserInfo isActivePC />

            <a href="" className={style.btnCart}>
              <FontAwesomeIcon icon={faCartShopping} />
              <span className={style.btnCartText}>Giỏ hàng</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
