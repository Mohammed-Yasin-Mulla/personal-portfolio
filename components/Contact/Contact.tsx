import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem auto 13rem auto;
  max-width: 600px;
`;

const Title = styled(motion.p)`
  color: ${(props) => props.theme.colors.green};
  font-size: 1rem;
  margin: 0.25rem auto;
  font-family: ${(props) => props.theme.fonts.secondary};
`;
const Heading = styled(motion.p)`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 3.75rem;
  margin: 0 auto;
`;

const Content = styled(motion.p)`
  color: ${(props) => props.theme.colors.slate};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  text-align: center;
  margin: auto 1rem;
  margin-bottom: 3rem;
`;

export default function Contact() {
  return (
    <Wrapper>
      <Title>{`03. Contact Me`}</Title>
      <Heading>{`Let's get in touch`}</Heading>
      <Content>
        {` my inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!`}
      </Content>
      <Button>{`Say hello`}</Button>
    </Wrapper>
  );
}
