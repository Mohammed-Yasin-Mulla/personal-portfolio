import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface WrapperProps {
  isMobile?: boolean;
  positionLeftCol?: boolean;
  positionRightCol?: boolean;
}
const positionLeftCol = css`
  position: fixed;
  justify-content: center;
  flex-direction: column;
  left: 0;
  bottom: 0;
  z-index: 1;
`;
const positionRightCol = css`
  position: fixed;
  flex-direction: column;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
export const Wrapper = styled(motion.div)<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  ${(props) => props.positionLeftCol && positionLeftCol}
  ${(props) => props.positionRightCol && positionRightCol}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const VerticalLine = styled(motion.div)`
  height: 100px;
  border-left: 2px solid ${(props) => props.theme.colors.slate};
  z-index: 1;
  display: inline-block;
  left: 25%;
`;
export const Link = styled(motion.a)`
  text-decoration: none;
  font-size: 0.8125rem;
  padding: 10px;
  cursor: pointer;
  p {
    color: ${(props) => props.theme.colors.slate};
    font-family: ${(props) => props.theme.fonts.secondary};
    writing-mode: tb-rl;
  }
  svg {
    stroke: ${(props) => props.theme.colors.slate};
    width: 20px;
    height: 20px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        stroke: ${(props) => props.theme.colors.green};
      }
      p {
        color: ${(props) => props.theme.colors.green};
      }
    }
    &:active {
      svg,
      p {
        transform: translateY(0);
      }
    }
  }
  &:active {
    svg {
      stroke: ${(props) => props.theme.colors.greenTint};
    }
    p {
      color: ${(props) => props.theme.colors.greenTint};
    }
  }
`;
