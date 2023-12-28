import { FC, ReactNode } from "react";

type FlexContainerProps = {
  children: ReactNode;
  type: "column" | "row";
};

const FlexContainer: FC<FlexContainerProps> = ({ children, type }) => {
  return <div style={{ display: "flex", flexDirection: type }}>{children}</div>;
};

export default FlexContainer;
