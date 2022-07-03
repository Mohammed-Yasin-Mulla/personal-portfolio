import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import TitleSection from "../Common/TitleSection";
// -------------------------LOGO-----------------------------------
import ReactLogo from "../../public/images/react-logo.svg";
import AntDLogo from "../../public/images/antd-logo.svg";
import CssLogo from "../../public/images/css-logo.svg";
import FramerLogo from "../../public/images/framer-logo.svg";
import HtmlLogo from "../../public/images/html-logo.svg";
import NextLogo from "../../public/images/nextjs-logo.svg";
import NodeLogo from "../../public/images/node-logo.svg";
import ReactQueryLogo from "../../public/images/react-query-logo.svg";
import StyledCompLogo from "../../public/images/styled-comp.svg";
import TypeScriptLogo from "../../public/images/typescript-logo.svg";

const logos = [
  ReactLogo,
  AntDLogo,
  CssLogo,
  FramerLogo,
  HtmlLogo,
  NextLogo,
  NodeLogo,
  ReactQueryLogo,
  StyledCompLogo,
  TypeScriptLogo,
];
// ------------------------------------------------------------

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.slate};
  margin: 0;
`;

const LogoList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 13px;
  align-items: center;

  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    margin: 1rem 0 0.5rem 0;
  }
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding: 5px;
  height: 120px;
  border-radius: 10%;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
    padding: 0;
  }
`;

export default function Technologies() {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
    hidden: {
      opacity: 0,
      x: -60,
    },
    onHover: (i: number) => ({
      scale: 1.1,
      rotate: i % 2 === 0 ? "-0.02turn" : "0.02turn",
      transition: {
        type: "spring",
        stiffness: 500,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
    onHoverOut: {
      scale: 1,
      rotate: "0turn",
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Wrapper>
      <TitleSection number="02" title="Technologies"></TitleSection>
      <AboutText
        variants={variants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        These are some of the technologies and libraries I have been working
        recently with
      </AboutText>
      <LogoList>
        {logos.map((logo, index) => (
          <LogoWrapper
            variants={variants}
            whileInView="visible"
            initial="hidden"
            whileHover="onHover"
            whileTap="onHoverOut"
            custom={index}
            viewport={{ once: true }}
            key={index}
          >
            <Image src={logo} width={120} alt={`${logo}`} height={120} />
          </LogoWrapper>
        ))}
      </LogoList>
    </Wrapper>
  );
}
