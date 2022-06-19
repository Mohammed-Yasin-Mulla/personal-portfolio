import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import NavbarLink from "../NavbarLink";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.5rem 0; */
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.colors.greenTint};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkName = ["About", "Technologies", "Projects", "Contact"];
const LinkGroup = LinkName.map((name, index) => {
  // Appends a 0 to the beginning of the number if it is less than 10
  return <NavbarLink key={index} label={name} index={index} />;
});

export default function Navbar_() {
  return (
    <Navbar>
      <span>Logo</span>

      <Wrapper>
        {LinkGroup}
        <Button>Resume</Button>
      </Wrapper>
    </Navbar>
  );
}
