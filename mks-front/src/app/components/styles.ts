"use client";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0f52ba;
`;

export const TituloContainer = styled.div`
  display: flex;
  background-color: #0f52ba;
  padding: 28px 65px;
  align-items: center;
  gap: 10px;
`;

export const MksTitle = styled.p`
  color: #fff;
  text-align: left;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
`;
export const SistemasText = styled.p`
  color: #fff;
  text-align: end;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  justify-self: baseline;
`;

export const CartContainer = styled.div`
  min-width: 52px;
  min-height: 26px;
  display: flex;
  border-radius: 8px;
  background: #fff;
  align-items: center;
  justify-content: space-around;
`;
export const CartNumber = styled.p`
  color: #000;

  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
