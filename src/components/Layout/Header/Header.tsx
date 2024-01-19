import React, { FC } from "react";
import headerStyles from "./Header.module.css";
import Button from "../../Button/Button";
import Image from "next/image";
import FlexContainer from "../FlexContainer/FlexContainer";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  // TODO: Si esta en home marcar como activo

  return (
    <header className={headerStyles.main}>
      <FlexContainer gap = {10}>
        <Button>Home</Button>
        <Button>Sabores</Button>
      </FlexContainer>
      <FlexContainer gap = {10}>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </FlexContainer>
      <FlexContainer gap =  {10}>
        <Button modifier="with-background">Pedido Online</Button>
        <Button>Locales</Button>
        <Button>RRHH</Button>
      </FlexContainer>
    </header>
  );
};

export default Header;
