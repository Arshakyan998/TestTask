import React from "react";
import styles from "./Main.module.scss";

import Header from "./Header/Header";
import Image from "./Image/Image";
import SignIn from "components/Login/Login";
import Footer from "./Footer/Footer";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const images = [
    {
      src: "https://us.123rf.com/450wm/f8studio/f8studio1704/f8studio170400862/75756429-young-woman-taking-selfie-from-hands-with-mobile-phone-in-sunny-city-street.jpg?ver=6",
      name: "Lego",
      id: "1",
    },
    {
      src: "https://us.123rf.com/450wm/f8studio/f8studio1704/f8studio170400862/75756429-young-woman-taking-selfie-from-hands-with-mobile-phone-in-sunny-city-street.jpg?ver=6",
      name: "Lego",
      id: "2",
    },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <div className={styles.main}>
        {images.map((el) => (
          <Image {...el} key={el.id} />
        ))}
      </div>
      <Footer />
      {isModalOpen && <SignIn isModal={true} closeModal={closeModal} />}
    </>
  );
};

export default Main;
