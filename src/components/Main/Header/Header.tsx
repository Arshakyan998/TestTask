import React from "react";
import styles from "./Header.module.scss";
import Button from "components/Button/Button";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setIsModalOpen }) => {
  return (
    <div className={styles.header}>
      <h1>OneAI </h1>

      <Button type="outlet" onClick={() => setIsModalOpen(true)}>
        Sign in{" "}
      </Button>
    </div>
  );
};

export default Header;
