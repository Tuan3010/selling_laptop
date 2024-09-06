import clsx from "clsx";
import s from "./homePage.module.scss";
import "../../assets/styles/base/grid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
  return (
    <div className={clsx(s.slider)}>
      <div className="grid wide">
        <div className="row">
            <div className="col l-8">
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
            <div className="col l-4">
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
        <div className="cate_Btn">

        </div>
      </div>
    </div>
  );
};

export default HomePage;
