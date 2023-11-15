"use client";
import React from "react";
import {
  CartContainer,
  MksTitle,
  SistemasText,
  TituloContainer,
  NavbarContainer,
  CartNumber,
} from "../styles";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <NavbarContainer>
        <TituloContainer>
          <MksTitle>MKS</MksTitle>
          <SistemasText>Sistemas</SistemasText>
        </TituloContainer>
        <CartContainer>
          <Image width={20} height={20} alt="cart" src="/CartVector.svg" />
          <CartNumber>0</CartNumber>
        </CartContainer>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
