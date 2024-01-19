import { FC, ReactNode } from "react";

type FlexContainerProps = {
  children: ReactNode;
  type?: "column" | "row";
  gap: number;
};

const FlexContainer: FC<FlexContainerProps> = ({ children, type = "row", gap }) => {
  return <div style={{ display: "flex", flexDirection: type, gap: gap }}>{children}</div>;
};

export default FlexContainer;
