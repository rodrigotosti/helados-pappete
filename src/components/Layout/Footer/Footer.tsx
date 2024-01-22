"use client";
import { FC, useMemo } from "react";
import footerStyles from "./Footer.module.css";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  const date = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={footerStyles.main}>
      <div className={footerStyles.container}>
        <div>
          <p>Heladeria Pappete {date} ©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
