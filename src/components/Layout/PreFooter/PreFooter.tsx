"use client";
import { FC } from "react";
import preFooterStyles from "./PreFooter.module.css";

type PreFooterProps = {};

const PreFooter: FC<PreFooterProps> = () => {
  return <section className={preFooterStyles.main}>
    <h1>
      Sobre Nosotros
    </h1>
  </section>;
};

export default PreFooter;
