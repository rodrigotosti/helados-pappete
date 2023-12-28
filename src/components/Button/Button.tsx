import React, { FC, useMemo } from "react";
import buttonStyles from "./Button.module.css";

type ButtonProps = {
  onClick: (params: any) => void;
  label: string;
  state?: "disabled" | "loading";
  modifier?: "default" | "with-background" | "footer";
};

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  state,
  modifier = "default",
}) => {
  const styleClasses = useMemo(() => {
    const modifierString = buttonStyles[modifier];

    if (state) {
      const stateString = buttonStyles[`${modifier}-${state}`];
      return `${modifierString} ${stateString}`;
    }

    return modifierString;
  }, [modifier, state]);

  return <button className={styleClasses}>{label}</button>;
};

export default Button;
