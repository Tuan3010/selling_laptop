import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import clsx from "clsx";
import s from "./DetailPage.module.scss";

const DetailPage = () => {
    

  return (
    <div>
      <Tippy 
        interactive
        render={attrs => (
            
            <div className={s.isActive} tabIndex="-1" {...attrs}>
                this is active
            </div>
        )}
      
      > 
        <h3 className={clsx(s.detail)}>Detail Page</h3>
      </Tippy>
    </div>
  );
};

export default DetailPage;
