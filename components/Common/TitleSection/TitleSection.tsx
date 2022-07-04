import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
  isMobile?: boolean;
  number: string;
  title: string;
}

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.white};
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;
const NumberWrapper = styled(motion.section)`
  /* display: inline-block; */
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 300;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.green};
`;

const TextWrapper = styled(motion.section)`
  /* display: inline-block; */
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;

export const HorizontalLine = styled(motion.div)`
  width: clamp(20vw, 22vw, 35vw);

  margin: 0 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.greenTint};
  z-index: 1;
  display: inline-block;
  bottom: 25%;
  @media screen and (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;

export default function TitleSection(props: Props) {
  const { number, title } = props;

  const variant = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: i * 0.4 },
    }),
    hidden: { opacity: 0, x: -60 },
  };

  return (
    <Wrapper>
      <NumberWrapper
        variants={variant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        custom={3}
      >
        {number}.
      </NumberWrapper>
      <TextWrapper
        variants={variant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        custom={2}
      >
        {title}
      </TextWrapper>
      <HorizontalLine
        variants={variant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        custom={1}
      />
    </Wrapper>
  );
}
