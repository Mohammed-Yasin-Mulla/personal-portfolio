import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.green};
  border: 2px solid ${(props) => props.theme.colors.green};
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  @media (hover: hover) and (pointer: fine) {
    // conditionally add the hover styles only if the browser supports pointer events
    &:hover {
      /* background-color: ${(props) => props.theme.colors.greenTint}; */
      transform: translateY(-5px);
      box-shadow: 11px 10px 26px 5px ${(props) => props.theme.colors.greenTint};
    }
    &:active {
      box-shadow: 11px 6px 5px 1px ${(props) => props.theme.colors.greenTint};
    }
  }
  &:active {
    transform: translateY(0);
    background-color: ${(props) => props.theme.colors.greenTint};
  }
`;

function Button_({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}

export default Button_;
