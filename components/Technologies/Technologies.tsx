import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import TitleSection from "../Common/TitleSection";
// -------------------------LOGO-----------------------------------
const logos = [
  { src: "/images/react-logo.svg", name: "React" },
  { src: "/images/antd-logo.svg", name: "Ant Design" },
  { src: "/images/css-logo.svg", name: "CSS" },
  { src: "/images/framer-logo.svg", name: "Framer Motion" },
  { src: "/images/html-logo.svg", name: "HTML" },
  { src: "/images/nextjs-logo.svg", name: "Next.js" },
  { src: "/images/node-logo.svg", name: "Node.js" },
  { src: "/images/react-query-logo.svg", name: "React Query" },
  { src: "/images/styled-comp.svg", name: "Styled Components" },
  { src: "/images/typescript-logo.svg", name: "TypeScript" },
];
// ------------------------------------------------------------

const Wrapper = styled.div<{ id?: string; children?: React.ReactNode }>`
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
    <Wrapper id="Technologies">
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
            <img src={logo.src} alt={logo.name} width={120} height={120} />
          </LogoWrapper>
        ))}
      </LogoList>
    </Wrapper>
  );
}
