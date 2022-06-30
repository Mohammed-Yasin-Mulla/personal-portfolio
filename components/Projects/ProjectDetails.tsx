import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {
  title: string;
  description: string;
  index: number;
}

interface StyledProps {
  index: number;
}

const ProjectWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  margin: 2rem auto;
`;

const ProjectImage = styled(motion.div)<StyledProps>`
  background-color: ${(props) => props.theme.colors.slate};
  grid-column-start: ${(props) => (props.index % 2 === 0 ? 1 : 3)};
  grid-column-end: ${(props) => (props.index % 2 === 0 ? 4 : 6)};
  grid-row-start: 1;
  grid-row-end: 2;
  padding-top: 62.511%;
  border-radius: 0.25rem;
`;

const FlexStart = css`
  align-items: flex-start;
`;

const FlexEnd = css`
  align-items: flex-end;
`;

const ProjectDescription = styled(motion.div)<StyledProps>`
  display: flex;
  flex-direction: column;
  ${(props) => (props.index % 2 === 0 ? FlexEnd : FlexStart)};
  justify-content: center;
  z-index: 2;

  grid-column-start: ${(props) => (props.index % 2 === 0 ? 3 : 1)};
  grid-column-end: ${(props) => (props.index % 2 === 0 ? 6 : 4)};
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 0.25rem;
`;

const Title = styled(motion.h3)`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  color: ${(props) => props.theme.colors.slate};
  margin: 0;
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightNavy};
  border-radius: 0.8rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.slate};
  margin: 0;
  margin-bottom: 1rem;
  padding-top: 24.68%;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
        /* transform: translateY(-5px); */
      }
      p {
        color: ${(props) => props.theme.colors.green};
        /* transform: translateY(-5px); */
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

export function ProjectDetails({ title, description, index }: Props) {
  return (
    <ProjectWrapper>
      <ProjectImage index={index} />
      <ProjectDescription index={index}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkWrapper>
          <Link>
            <FiGithub />
          </Link>
          <Link>
            <FiExternalLink />
          </Link>
        </LinkWrapper>
      </ProjectDescription>
    </ProjectWrapper>
  );
}
