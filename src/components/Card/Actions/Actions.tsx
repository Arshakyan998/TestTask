import React from "react";
import styles from "./Actions.module.scss";
import gallery from "assets/gallery.svg";
import photo from "assets/photo.svg";
import { useNavigate } from "react-router-dom";

const Actions: React.FC = () => {
  const navigation = useNavigate();
  const actions = [
    {
      src: gallery,
      description: "Choose photo from gallery",
    },
    { src: photo, description: "Take photo with camera" },
  ];

  return (
    <div className={styles.actions__wrapper}>
      {actions.map(({ description, src }) => (
        <div
          key={src}
          className={styles.actions__wrapper__actions}
          onClick={() => navigation("/avatar")}
        >
          <img src={src} alt="icon" />

          <div className={styles.actions__wrapper__actions__descriptions}>
            {description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Actions;
