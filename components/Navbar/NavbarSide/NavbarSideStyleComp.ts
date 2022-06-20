import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  isMobile?: boolean;
  positionLeftCol?: boolean;
  positionRightCol?: boolean;
}
const positionLeftCol = css`
  position: absolute;
  justify-content: center;
  flex-direction: column;
  left: 0;
  bottom: 0;
  z-index: 1;
`;
const positionRightCol = css`
  position: absolute;
  flex-direction: column;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  ${(props) => props.positionLeftCol && positionLeftCol}
  ${(props) => props.positionRightCol && positionRightCol}
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
  padding: 10px;
  p {
    color: ${(props) => props.theme.colors.slate};
    font-family: ${(props) => props.theme.fonts.secondary};
    writing-mode: tb-rl;
    transition: all 0.15s ease-in-out;
  }
  svg {
    stroke: ${(props) => props.theme.colors.slate};
    width: 25px;
    height: 25px;
    transition: all 0.15s ease-in-out;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        stroke: ${(props) => props.theme.colors.green};
        transform: translateY(-5px);
      }
      p {
        color: ${(props) => props.theme.colors.green};
        transform: translateY(-5px);
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
