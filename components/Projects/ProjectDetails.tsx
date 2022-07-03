import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// ----------------------------------Images--------------------------------------------
// import pokemon from "../../public/images/ProjectImages/PokemonApp.png";
import memeGenerator from "../../public/images/ProjectImages/memeGenerator.png";
// ------------------------------------------------------------------------------
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  index: number;
}

interface StyledProps {
  index: number;
}
interface StyledImageProps {
  index: number;
  img: StaticImageData;
}

const ProjectWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  margin: 2rem auto;
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
  pointer-events: none;
`;

const ProjectImage = styled(motion.div)<StyledImageProps>`
  grid-column-start: ${(props) => (props.index % 2 === 0 ? 1 : 3)};
  grid-column-end: ${(props) => (props.index % 2 === 0 ? 4 : 6)};
  grid-row-start: 1;
  grid-row-end: 2;
  padding-top: 62.511%;
  border-radius: 0.25rem;
  background: url(${(props) => props.img.src});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    z-index: 1;
  }

  &:hover + ${ProjectDescription} {
    transition: z-index 0.5s;
    z-index: 0;
    ${Description} {
      border: 2px solid ${(props) => props.theme.colors.greenTint};
      color: ${(props) => props.theme.colors.slateTint};
      transition: background-color 1s, backdrop-filter 0.25s;
      background-color: transparent;
      backdrop-filter: blur(15px);
    }
  }
`;

const FlexStart = css`
  align-items: flex-start;
`;

const FlexEnd = css`
  align-items: flex-end;
`;

const Title = styled(motion.h3)`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  color: ${(props) => props.theme.colors.slate};
  margin: 0;
  margin-bottom: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  pointer-events: all;
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
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      },
    },
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? 60 : -60,
    }),
    visibleImage: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      },
    },
    hiddenImage: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
    }),
    whileHover: {
      y: -5,
    },
    whileHoverImage: {
      scale: 1.1,
      transition: { type: "spring", duration: 0.5 },
    },
    whileTap: {
      y: 0,
    },
    whileTapImage: {
      scale: 1.05,
    },
  };

  return (
    <ProjectWrapper>
      <ProjectImage
        variants={variants}
        whileInView="visibleImage"
        initial="hiddenImage"
        whileHover="whileHoverImage"
        whileTap="whileTapImage"
        viewport={{ once: true }}
        index={index}
        custom={1}
        img={memeGenerator}
      />
      <ProjectDescription
        variants={variants}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        index={index}
        custom={index}
      >
        <Title
          variants={variants}
          whileInView="visibleImage"
          initial="hiddenImage"
          viewport={{ once: true }}
          custom={index + 1}
        >
          {title}
        </Title>
        <Description>{description}</Description>
        <LinkWrapper>
          <Link
            variants={variants}
            whileHover="whileHover"
            whileTap="whileTap"
            whileInView="visibleImage"
            initial="hiddenImage"
            viewport={{ once: true }}
            custom={index + 1}
          >
            <FiGithub />
          </Link>
          <Link
            variants={variants}
            whileHover="whileHover"
            whileTap="whileTap"
            whileInView="visibleImage"
            initial="hiddenImage"
            viewport={{ once: true }}
            custom={index + 1}
          >
            <FiExternalLink />
          </Link>
        </LinkWrapper>
      </ProjectDescription>
    </ProjectWrapper>
  );
}
