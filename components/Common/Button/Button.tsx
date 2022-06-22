import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

interface Props extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  mx?: number; // margin-left and margin-right
  my?: number; // margin-top and margin-bottom
}

const mx = css<Props>`
  margin: 0 ${(props) => props.mx}rem;
`;
const my = css<Props>`
  margin: ${(props) => props.my}rem 0;
`;

const Button = styled(motion.button)<Props>`
  background-color: transparent;
  color: ${(props) => props.theme.colors.green};
  border: 2px solid ${(props) => props.theme.colors.green};
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 0.8125rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  cursor: pointer;
  &:active {
    transform: translateY(0);
    background-color: ${(props) => props.theme.colors.greenTint};
  }
  ${(props) => props.mx && mx}
  ${(props) => props.my && my}
`;

function Button_({ children, ...props }: Props) {
  return (
    <Button whileHover={{ y: -5 }} whileTap={{ scale: 0.95, y: 0 }} {...props}>
      {children}
    </Button>
  );
}

export default Button_;
