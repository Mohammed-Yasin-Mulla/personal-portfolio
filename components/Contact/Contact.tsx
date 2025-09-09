import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TWITTER_LINK } from "../../Constants";
import Button from "../Common/Button";

const Wrapper = styled.div<{ id?: string; children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem auto 13rem auto;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    margin: 2rem auto 7rem auto;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 1;
    text-align: center;
    width: 100%;
    margin: 1rem auto;
  }
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
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  return (
    <Wrapper id="Contact">
      <Title
        variants={variants}
        whileInView="visible"
        initial="hidden"
        custom={1}
        viewport={{ once: true }}
      >{`03. Contact Me`}</Title>
      <Heading
        variants={variants}
        whileInView="visible"
        initial="hidden"
        custom={2}
        viewport={{ once: true }}
      >{`Let's get in touch`}</Heading>
      <Content
        variants={variants}
        whileInView="visible"
        initial="hidden"
        custom={3}
        viewport={{ once: true }}
      >
        {` my inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!`}
      </Content>
      <a href={TWITTER_LINK} target="_blank" rel="noreferrer">
        <Button
          variants={variants}
          whileInView="visible"
          initial="hidden"
          custom={4}
          viewport={{ once: true }}
        >{`Hire me`}</Button>
      </a>
    </Wrapper>
  );
}
