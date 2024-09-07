import clsx from "clsx";
import s from "./homePage.module.scss";
import "../../assets/styles/base/grid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Fragment } from "react";


const HomePage = () => {
  return (
    <Fragment>
      {/* Slider */}
      <div className={clsx(s.sliderSection)}>
        <div className="grid wide">
          <div className="row">
              <div className="col l-8 m-12 c-12">
                  <div className={s.sliderAuto}>
                      <img style={{borderRadius: '10px'}} width={'100%'} src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png"/>
                      <button className={s.btnLeft}><FontAwesomeIcon style={{color: '#fff'}} icon={faAngleLeft} /></button>
                      <button className={s.btnRight}><FontAwesomeIcon style={{color: '#fff'}} icon={faAngleRight} /></button>
                      <ul className={s.listBullet}>
                          <li className={s.itemBullet}></li>
                          <li className={clsx(s.itemBullet ,s.bulletActive)}></li>
                          <li className={s.itemBullet}></li>
                      </ul>
                  </div>
              </div>
              <div className="col l-4 m-0 c-0">
                <div className={s.sliderRight}>
                  <div>
                    {/* Tên1 */}
                    <img style={{borderRadius: '10px'}} width={'100%'} src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_58a281730e.png" />
                  </div>
                  <div>
                    {/* Tên 2 */}
                    <img style={{borderRadius: '10px'}} width={'100%'} src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_0ca00a3bd4.png" />
                  </div>
                </div>
              </div>
              
          </div>
          <div className={s.containerBtnTrademark}>
            <div className="row">
              <div className="col l-2">
                <Link to={''} className={s.btnTrademark}>
                  <span>Icon</span>
                  <span>ASUS</span>
                </Link>
              </div>
              <div className="col l-2">
                <Link to={''} className={s.btnTrademark}>
                  <span>Icon</span>
                  <span>Lenovo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products in page index */}
      <div className={s.productSection}>
        <div className={s.hook}>
          <img  src="https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/san_pham_ban_chay_website_320x41_3x_88c599649c.png"/>
          <span >Sản phẩm bán chạy</span>
        </div>
        <div className={clsx('grid wide',s.productContainer)}>
          <div className={clsx('row')} style={{margin: 0 ,paddingTop: '50px'}}>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            <div className="col l-2-4">
              <Link  className={s.productItem}>
                <div className={s.productImg}>
                  <img width={'80%'}  src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/iphone_13_dd_1_bc41842769.jpg'/>
                </div>
                <span className={s.oldPrice}>10.000.000 vnđ</span>
                <span className={s.currentPrice}>9.000.000 vnđ</span>
                <span className={s.nameProduct}>Laptop Lenovo ThinkPad E16/256G/512SSD</span>
                
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
