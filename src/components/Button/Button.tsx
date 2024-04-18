import React, { HTMLAttributes } from "react";
import "./Button.scss";

interface Props
  extends React.PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  type?: "outlet" | "default" | "success";
  fontType?: "bold" | "bolder" | "normal";
}

const Button: React.FC<Props> = ({
  type = "default",
  fontType,
  children,
  ...props
}) => {
  return (
    <button className={`button button_${type} button_${fontType}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
