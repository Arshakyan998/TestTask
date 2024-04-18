import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import Button from "components/Button/Button";
import Actions from "./Actions/Actions";
const Card: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const handleMouseMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const getXcords = e.clientX - rect.right;

    const getPercent = Math.abs(
      (getXcords / e.currentTarget.offsetWidth) * 100
    );

    if (ref.current) {
      ref.current.style.width = `${getPercent}%`;
    }
  };

  return (
    <div className="container">
      <Button onClick={() => navigate("/")} fontType="bolder">
        {" "}
        &#x2039; Go back{" "}
      </Button>
      <div className="slider__comparison" onMouseMove={handleMouseMove}>
        <div className="before">
          <img
            src="https://us.123rf.com/450wm/f8studio/f8studio1704/f8studio170400862/75756429-young-woman-taking-selfie-from-hands-with-mobile-phone-in-sunny-city-street.jpg?ver=6"
            alt="data"
          />
        </div>
        <div className="after" ref={ref}>
          <img
            src="https://cdn.toypro.com/media/cache/tp_product_detail/uploads/images/custom/27838-src.webp"
            alt="data"
          />
        </div>
      </div>
      <Actions />
    </div>
  );
};

export default Card;
