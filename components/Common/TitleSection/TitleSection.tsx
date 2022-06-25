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
const NumberWrapper = styled.section`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.green};
`;

const TextWrapper = styled.section`
  display: inline-block;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;

export const HorizontalLine = styled(motion.div)`
  width: 35vw;
  margin: 0 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.greenTint};
  z-index: 1;
  display: inline-block;
  bottom: 25%;
`;

export default function TitleSection(props: Props) {
  const { isMobile = false, number, title } = props;
  console.log("💡 ~ TitleSection ~ isMobile", isMobile);

  return (
    <Wrapper>
      <NumberWrapper>{number}.</NumberWrapper>
      <TextWrapper>{title}</TextWrapper>
      <HorizontalLine />
    </Wrapper>
  );
}
