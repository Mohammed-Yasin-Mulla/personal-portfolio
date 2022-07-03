import NavbarSide from "./NavbarSide/NavbarSide";
import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import NavbarLink from "./NavbarLink";
import NavbarFloating from "./NavbarFloating";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  isMobile?: boolean;
}

const Navbar = styled.nav`
  display: flex;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.colors.greenTint};
  backdrop-filter: blur(15px);
`;

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkName = ["About", "Technologies", "Projects", "Contact"];
const LinkGroup = LinkName.map((name, index) => {
  return <NavbarLink key={index} label={name} index={index} />;
});

const SVGWrapper = styled(motion.div)`
  height: 40;
  width: 40;
`;

export default function Navbar_(props: Props) {
  const { isMobile = false } = props;
  if (!isMobile) {
    return (
      <>
        {/* Top NavBar */}
        <Navbar>
          <SVGWrapper>
            <Image src={Logo} alt="Logo" />
          </SVGWrapper>

          <Wrapper>
            {LinkGroup}
            <Button
              animate={{ x: [120, 0], opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              Resume
            </Button>
          </Wrapper>
        </Navbar>

        {/* Left Icons */}
        <NavbarSide positionCol="right" />

        {/* Right Email */}
        <NavbarSide positionCol="left" />
      </>
    );
  }
  if (isMobile) {
    return (
      <>
        <NavbarFloating />
      </>
    );
  }

  return null;
}
