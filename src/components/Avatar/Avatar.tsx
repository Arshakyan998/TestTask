import React from "react";
import styles from "./Avatar.module.scss";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
const Avatar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.avatar__wrapper}>
      <div className={styles.avatar__wrapper__image}>
        <img
          src="https://pbs.twimg.com/profile_images/1772382720875790336/Pvn0fspw_400x400.jpg"
          alt=""
        />
      </div>
      <div className={styles.avatar__wrapper__buttons}>
        <Button
          type="success"
          style={{
            width: "244px",
            height: "65px",
          }}
          fontType="bolder"
        >
          Save
        </Button>
        <Button
          fontType="normal"
          style={{ width: "190px", height: "65px" }}
          onClick={() => navigate("/")}
        >
          More pics
        </Button>
      </div>
    </div>
  );
};

export default Avatar;
