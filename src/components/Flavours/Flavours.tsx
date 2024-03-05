import { FC } from "react";
import flavoursModule from "./Flavours.module.css";

type ButtonProps = {};

const Flavours: FC<ButtonProps> = () => {
  return (
    <section className={flavoursModule.container}>
      <h1 className={flavoursModule.text}>NUESTROS PRODUCTOS</h1>
      <div style={{ height: 6, width: 60, background: "#93805C" }}></div>
    </section>
  );
};

export default Flavours;
