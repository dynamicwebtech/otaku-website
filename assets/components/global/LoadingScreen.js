/**
 *
 *  This is the Loading Screen
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import { COMPANY_LOGO } from "../../cdns/CDNImgs";

import styles from "../../styles/modules/Global/Global.module.css";

export const LoadingScreen = () => {
  return (
    <div className={`${styles.loading_screen}`} id="loadingScreen">
      <div className={`${styles.loading_screen_inner}`}>
        <LazyLoadImage src={COMPANY_LOGO} alt={`TheOtakuLab's Logo.`} />

        <div className={`${styles.loading_dots}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
