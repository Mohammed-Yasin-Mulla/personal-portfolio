import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import Button from "../Common/Button";

interface Props {
  isMobile?: boolean;
}

interface TextProps {
  secondary?: boolean;
}

const Wrapper = styled.div`
  /* background-color: ${(props) => props.theme.colors.greenTint}; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }
`;

const Heading = styled(motion.div)`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.green};
  margin-bottom: 1rem;
  margin-left: 4px;

  @media screen and (max-width: 768px) {
    margin-left: 3px;
  }
`;

const Secondary = css`
  color: ${(props) => props.theme.colors.slate};
`;

const Text = styled(motion.h2)<TextProps>`
  font-size: 4.585rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin: 0 0 1rem 0;
  ${(props) => props.secondary && Secondary}
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1rem;
  max-width: 500px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.slate};
  margin: 0;
`;

const Link = styled(motion.a)`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.green};
  margin: 0 0 1rem 0;
  text-decoration: none;
  cursor: pointer;
`;

export default function About({ isMobile = false }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: -10,
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
    <Wrapper>
      <Heading
        variants={variants}
        animate="visible"
        initial="hidden"
        custom={1}
      >
        Hi, my name is
      </Heading>
      <Text variants={variants} animate="visible" initial="hidden" custom={2}>
        Mohammed Yasin Mulla.
      </Text>
      <Text
        secondary
        variants={variants}
        animate="visible"
        initial="hidden"
        custom={3}
      >
        I build things for the web.
      </Text>
      <Paragraph
        variants={variants}
        animate="visible"
        initial="hidden"
        custom={4}
      >
        {` I'am a software engineer specializing in digital experience. I am
        Currently focused on building the UI of the mobile web and the admin
        panel at`}
      </Paragraph>
      <Link variants={variants} animate="visible" initial="hidden" custom={5}>
        Flurn
      </Link>
      <motion.section
        variants={variants}
        animate="visible"
        initial="hidden"
        custom={6}
      >
        <Button my={1}>Check out my Github</Button>
      </motion.section>
      {isMobile && (
        <motion.section
          variants={variants}
          animate="visible"
          initial="hidden"
          custom={7}
        >
          <Button>Resume</Button>
        </motion.section>
      )}
      {isMobile}
    </Wrapper>
  );
}
