import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  color: ${(props) => props.theme.colors.slate};
  font-size: 0.75rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  margin: 2rem auto;
  text-align: center;
`;

const TextWrapper = styled(motion.div)`
  display: inline;
  margin-bottom: 2rem;
`;

const Link = styled(motion.a)`
  color: ${(props) => props.theme.colors.green};
`;

export default function Footer() {
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
    <Wrapper>
      <div>
        <TextWrapper
          variants={variants}
          whileInView="visible"
          initial="hidden"
          custom={1}
        >{`Build by `}</TextWrapper>
        <Link
          variants={variants}
          whileInView="visible"
          initial="hidden"
          custom={2}
        >
          Mohammed Yasin Mulla
        </Link>
      </div>
      <div>
        <TextWrapper
          variants={variants}
          whileInView="visible"
          initial="hidden"
          custom={3}
        >{`Inspired by `}</TextWrapper>
        <Link
          variants={variants}
          whileInView="visible"
          initial="hidden"
          custom={4}
        >
          Brittany Chiang
        </Link>
      </div>
    </Wrapper>
  );
}
