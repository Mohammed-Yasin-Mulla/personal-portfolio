import React from "react";
import styled from "styled-components";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  index: number;
  label: string;
  link?: string;
  target?: string;
  onClick?: () => void;
}

const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  margin-right: 1.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.navy};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border: 2px solid ${(props) => props.theme.colors.greenTint};
      color: ${(props) => props.theme.colors.green};
      border-radius: 5px;
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
  font-family: "Fira Code", monospace;
  font-weight: 500;
  color: ${(props) => props.theme.colors.green};

  ${Link}:hover & {
    color: ${(props) => props.theme.colors.white};
  }
`;

const TextWrapper = styled.section`
  display: inline-block;
  margin-left: 0.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  ${Link}:hover & {
    color: ${(props) => props.theme.colors.green};
  }
`;

export default function NavbarLink({
  index,
  label,
  link,
  target,
  onClick,
  ...props
}: Props) {
  const formattedNumber = (index + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <Link href={link} target={target} onClick={onClick} {...props}>
      <NumberWrapper>{formattedNumber}.</NumberWrapper>
      <TextWrapper>{label}</TextWrapper>
    </Link>
  );
}
