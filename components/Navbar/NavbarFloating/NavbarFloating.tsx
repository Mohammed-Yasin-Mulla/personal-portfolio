import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const NavbarFloating = styled(motion.nav)`
  background: ${(props) => props.theme.colors.greenTint};
  position: fixed;
  width: max-content;
  border-radius: 3rem;
  border-color: ${(props) => props.theme.colors.green};
  border-style: solid;
  border-width: 1px;
  backdrop-filter: blur(15px);
  color: ${(props) => props.theme.colors.white};
  font-size: 0.712rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  padding: 0.7rem 1.5rem;
  z-index: 1;
  position: fixed;
  left: 50%;
  bottom: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  align-items: center;

  a {
    background: transparent;
    padding: 0.55rem;
    cursor: pointer;
    &:active {
      color: ${(props) => props.theme.colors.green};
    }
  }
`;

export default function NavbarFloating_() {
  return (
    <NavbarFloating
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      initial={{ y: 20, x: "-50%", opacity: 0 }}
    >
      <motion.a
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        About
      </motion.a>
      <motion.a
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 * 2 }}
      >
        Technologies
      </motion.a>
      <motion.a
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 * 3 }}
      >
        Project
      </motion.a>
      <motion.a
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 * 4 }}
      >
        Contact
      </motion.a>
    </NavbarFloating>
  );
}
