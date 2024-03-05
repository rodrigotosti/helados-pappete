import { FC } from "react";
import heroModule from "./Hero.module.css";

type ButtonProps = {};

const Hero: FC<ButtonProps> = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.valence.com.ar/wp-content/uploads/2020/05/banner-2.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 793,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={heroModule.text}>QUE COMIENCE EL VALENCEADO</h1>
    </div>
  );
};

export default Hero;
