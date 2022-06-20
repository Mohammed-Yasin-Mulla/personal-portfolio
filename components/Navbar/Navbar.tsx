import NavbarSide from "./NavbarSide/NavbarSide";
import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import NavbarLink from "./NavbarLink";
import NavbarFloating from "./NavbarFloating";

interface Props {
  isMobile?: boolean;
}

const Navbar = styled.nav`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.colors.greenTint};
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

export default function Navbar_(props: Props) {
  const { isMobile = false } = props;
  if (!isMobile) {
    return (
      <>
        {/* Top NavBar */}
        <Navbar>
          <span>Logo</span>
          <Wrapper>
            {LinkGroup}
            <Button
              animate={{ x: [30, 0], opacity: 1 }}
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
