import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

const Button = styled(motion.button)`
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
`;

function Button_({ children, ...props }: Props) {
  return (
    <Button whileHover={{ y: -5 }} whileTap={{ scale: 0.95, y: 0 }} {...props}>
      {children}
    </Button>
  );
}

export default Button_;
