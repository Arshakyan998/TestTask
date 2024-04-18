import React from "react";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <h2>Get help at support@avgen.me </h2>

        <span>Copyright © 2024 Mook Ltd. All rights reserved. </span>
      </div>
    </div>
  );
};

export default Footer;
