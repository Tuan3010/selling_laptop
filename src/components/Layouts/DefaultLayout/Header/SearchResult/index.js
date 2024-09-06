import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import ad_search from "../../../../../assets/images/ad_search.png";
import style from './searchResult.module.scss';



const SearchResult = () => {
  return (
    <div className={clsx(style.searchTable)}>

      <div className={style.wrapCtnSearchTable}>
        <div className={style.adSearch}>
          <img
            src={ad_search}
            width={"100%"}
            style={{ borderRadius: "10px" }}
          />
        </div>

        <ul className={style.listStorySearch}>
          <li className={style.itemStorySearch}>
            <Link to={"#"} className={style.aItemStorySearch}>
              <span>Item</span>
              <FontAwesomeIcon icon={faXmark} style={{ float: "right" }} />
            </Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default SearchResult;
