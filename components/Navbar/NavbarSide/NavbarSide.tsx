import React from "react";
import styled, { css } from "styled-components";
import { FaBeer } from "react-icons/fa";

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

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* transition: all 1s ease-in; */
  ${(props) => props.positionLeftCol && positionLeftCol}
  ${(props) => props.positionRightCol && positionRightCol}
  svg {
    margin-left: 0.5rem;
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.colors.white};
    &:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      fill: ${(props) => props.theme.colors.green};
      transform: translateY(-5px);
    }
  }
`;

const VerticalLine = styled.div`
  height: 150px;
  border-left: 2px solid ${(props) => props.theme.colors.white};
  z-index: 1;
  display: inline-block;
  left: 25%;
`;

export default function NavbarSide({}) {
  return (
    <Wrapper positionLeftCol>
      <FaBeer accentHeight="2px" className="svgIcons" />

      <VerticalLine />
    </Wrapper>
  );
}
