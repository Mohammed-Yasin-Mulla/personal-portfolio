import NavbarSide from "./NavbarSide/NavbarSide";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import NavbarLink from "./NavbarLink";
import NavbarFloating from "./NavbarFloating";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavbarProps {
  visible: boolean;
}

const Navbar = styled.nav<NavbarProps>`
  display: flex;
  z-index: 2;
  position: fixed;
  top: ${(props) => (props.visible ? "0" : "-90px")};
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
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkName = ["About", "Technologies", "Contact"];
const LinkGroup = LinkName.map((name, index) => {
  return (
    <NavbarLink key={index} label={name} index={index} link={`#${name}`} />
  );
});

const SVGWrapper = styled(motion.a)`
  height: 40;
  width: 40;
`;

export default function Navbar_() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -60 },
  };
  return (
    <>
      {/* Top NavBar */}
      <Navbar id="Navigation" visible={visible}>
        <SVGWrapper
          variants={variants}
          whileInView="visible"
          initial="hidden"
          href="#Hero"
          viewport={{ once: true }}
        >
          <Image src={Logo} alt="Logo" />
        </SVGWrapper>

        <Wrapper>
          {LinkGroup}
          <a
            href="/Mohammed-Yasin-Mulla-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              animate={{ x: [120, 0], opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              Resume
            </Button>
          </a>
        </Wrapper>
      </Navbar>

      {/* Left Icons */}
      <NavbarSide positionCol="right" />

      {/* Right Email */}
      <NavbarSide positionCol="left" />

      {/* Floating Navbar for mobile view */}
      <NavbarFloating />
    </>
  );
}
