"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import headerStyles from "./Header.module.css";
import Button from "../../Button/Button";
import Image from "next/image";
import FlexContainer from "../FlexContainer/FlexContainer";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  // TODO: Si esta en home marcar como activo

  const [mobileHeaderIsVisible, setMobileHeaderIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 55;
    if (scrollPosition > triggerPosition) {
      setMobileHeaderIsVisible(() => true);
    }

    if (scrollPosition < 1) {
      console.log(scrollPosition);
      setMobileHeaderIsVisible(() => false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={headerStyles.main}>
      <div
        className={`${headerStyles.container} ${
          mobileHeaderIsVisible ? headerStyles.remove : ""
        }`}
      >
        <FlexContainer gap={10}>
          <Button>Home</Button>
          <Button>Sabores</Button>
        </FlexContainer>
        <FlexContainer gap={10}>
          <Image
            src="/logo.png"
            alt="logo"
            width={210}
            height={393}
            style={{ maxHeight: 95 }}
          />
        </FlexContainer>
        <FlexContainer gap={10}>
          <Button modifier="with-background">Home</Button>
          <Button>Locales</Button>
          <Button>RRHH</Button>
        </FlexContainer>
      </div>
      <div
        className={`${headerStyles.mobile} ${headerStyles.container} ${
          mobileHeaderIsVisible ? headerStyles.visible : headerStyles.remove
        }`}
      >
        <FlexContainer gap={10}>
          <Button>Home</Button>
          <Button>Sabores</Button>
        </FlexContainer>
        <FlexContainer gap={10}>
          <Image
            src="/logo.png"
            alt="logo"
            width={210}
            height={393}
            style={{ maxHeight: 95 }}
          />
        </FlexContainer>
        <FlexContainer gap={10}>
          <Button modifier="with-background">Home</Button>
          <Button>Locales</Button>
          <Button>RRHH</Button>
        </FlexContainer>
      </div>
    </header>
  );
};

export default Header;
