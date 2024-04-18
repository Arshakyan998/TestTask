import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Slider.scss";

interface Props extends React.PropsWithChildren {
  direction: "right" | "left";
  pageName: string;
}

const Slider: React.FC<Props> = ({ children, direction, pageName }) => {
  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        key={pageName}
        timeout={500}
        unmountOnExit
        in={true}
        classNames={`slide-${direction}`}
      >
        <div className="slider">{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Slider;
