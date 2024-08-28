import { Fragment, memo } from "react";
import s from "./styleCateHover.module.scss";

const CateHover = () => {
  // Tạo chi tiết cho bảng catesub
  // Tạo thuộc tính scroll
  // Tạo 1 componnent Button dùng chung
  console.log('cmponent con!-');
  

  return (
    <Fragment>
      <div className={s.cateSubMenu}>
        <div className={s.cateSubMenuWrapForRelative}>

          <div className={s.cateSubMenuItem}>
            <ul className={s.listItem}>
              <li className={s.item}>
                <a href="" className={s.itemTagA}>
                  Icon và chữ
                </a>
                <div className={s.cateSubMenuChild}></div>
              </li>
              <li className={s.item}>
                <a href="" className={s.itemTagA}>
                  Icon và chữ
                </a>
                <div className={s.cateSubMenuChild}></div>
              </li>
              
            </ul>
            <div className={s.line}>  </div>
          </div>

          <div className={s.cateSubMenuItem}>
            <ul className={s.listItem}>
              <li className={s.item}>
                <a href="" className={s.itemTagA}>
                  Icon và chữ
                </a>
              </li>
              <li className={s.item}>
                <a href="" className={s.itemTagA}>
                  Icon và chữ
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default memo(CateHover);
