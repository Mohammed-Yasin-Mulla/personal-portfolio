import NavbarSide from "./NavbarSide/NavbarSide";
import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import NavbarLink from "./NavbarLink";

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
`;

const LinkName = ["About", "Technologies", "Projects", "Contact"];
const LinkGroup = LinkName.map((name, index) => {
  return <NavbarLink key={index} label={name} index={index} />;
});

export default function Navbar_() {
  return (
    <>
      {/* Top NavBar */}
      <Navbar>
        <span>Logo</span>
        <Wrapper>
          {LinkGroup}
          <Button>Resume</Button>
        </Wrapper>
      </Navbar>

      {/* Left Icons */}
      <NavbarSide positionCol="right" />

      {/* Right Email */}
      <NavbarSide positionCol="left" />
    </>
  );
}
