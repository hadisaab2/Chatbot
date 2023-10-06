import React from "react";
import {
  HeaderContainer,
  Logo,
  LogoImage,
  Title,
  LogoContainer,
  ExitContainer,
  HeaderLayout,
} from "../styles";
import { BsFillXCircleFill } from "react-icons/bs";
import monty from "../../assets/MONTYLOGO.png";
export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLayout>
        <LogoContainer>
          <Logo>
            <LogoImage src={monty} />
          </Logo>
          <Title>MontyMobile</Title>
        </LogoContainer>
        <ExitContainer>
          <BsFillXCircleFill
            size={30}
            className="exit"
            onClick={() => {
              props.settoggle(false);
              window.parent.postMessage("hides", "*");

            }}
          />
        </ExitContainer>
      </HeaderLayout>
    </HeaderContainer>
  );
}
