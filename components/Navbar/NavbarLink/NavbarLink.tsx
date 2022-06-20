import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  index: number;
  label: string;
  link?: string;
  target?: string;
  onClick?: () => void;
}

const Link = styled(motion.a)`
  color: ${(props) => props.theme.colors.white};
  margin-right: 1.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.navy};
  border-radius: 5px;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border: 2px solid ${(props) => props.theme.colors.greenTint};
      color: ${(props) => props.theme.colors.green};
      transform: translateY(-5px);
    }
    &:active {
      transform: translateY(0);
    }
  }
  &:active {
    background-color: ${(props) => props.theme.colors.greenTint};
  }
`;

const NumberWrapper = styled.section`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  color: ${(props) => props.theme.colors.green};

  ${Link}:hover & {
    color: ${(props) => props.theme.colors.white};
  }
`;

const TextWrapper = styled.section`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  ${Link}:hover & {
    color: ${(props) => props.theme.colors.green};
  }
`;

export default function NavbarLink(props: Props) {
  const { index, label, link, target } = props;

  const formattedNumber = (index + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ ease: "backIn", duration: 1, delay: 0.3 * index }}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link href={link} target={target}>
        <NumberWrapper>{formattedNumber}.</NumberWrapper>
        <TextWrapper>{label}</TextWrapper>
      </Link>
    </motion.div>
  );
}
