import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import TitleSection from "../Common/TitleSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1080px;
  margin-top: 2rem;
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

export default function Technologies() {
  return (
    <Wrapper>
      <TitleSection number="02" title="Technologies"></TitleSection>
      <AboutText>
        These are some of the technologies and libraries I have been working
        recently with
      </AboutText>
    </Wrapper>
  );
}
