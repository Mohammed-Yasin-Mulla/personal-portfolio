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

const Link = styled.a`
  color: ${(props) => props.theme.colors.green};
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>
        <TextWrapper>{`Build by `}</TextWrapper>
        <Link>Mohammed Yasin Mulla</Link>
      </div>
      <div>
        <TextWrapper>{`Inspired by `}</TextWrapper>
        <Link>Brittany Chiang</Link>
      </div>
    </Wrapper>
  );
}
