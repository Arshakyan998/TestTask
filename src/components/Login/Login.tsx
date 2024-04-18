import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.scss";
import Button from "components/Button/Button";

interface Props {
  isModal?: boolean;
  closeModal?: () => void;
}

const login: React.FC<Props> = ({ isModal = false, closeModal }) => {
  const navigate = useNavigate();

  const isOpenAsModal = isModal
    ? {
        background: "none",
        backdropFilter: " blur(50px)",
      }
    : {};

  return (
    <div className={styles.login} style={isOpenAsModal}>
      <div
        className={styles.login__close}
        onClick={() => closeModal?.() || navigate("/")}
      >
        &#10060;
      </div>
      <div className={styles.login__positions}>
        <div className={styles.login__wrapper}>
          <div className={styles.login__wrapper__inputs}>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
          </div>

          <div className={styles.login__wrapper__button}>
            <Button type="success" style={{ width: "169px", height: "55px" }}>
              Sign in{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
