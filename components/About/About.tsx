import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import TitleSection from "../Common/TitleSection";
import ProfilePic from "../../public/images/profile-pic.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1080px;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const AboutSection = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const AboutText = styled(motion.p)`
  font-size: 1rem;
  max-width: 500px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.slate};
  margin: 0;
`;
const AboutImage = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.lightNavy};
  border-radius: 1rem;
  width: 22rem;
  height: 22rem;
  overflow: hidden;
`;

export default function About() {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.6,
      },
    },
    hidden: (side = "left") => ({
      opacity: 0,
      x: side === "left" ? -60 : 60,
    }),
    onHover: {
      scale: 1.1,
      rotate: "-0.02turn",
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    onHoverOut: {
      scale: 1,
      rotate: "0turn",
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Wrapper>
      <TitleSection number="01" title="About" />
      <AboutSection>
        <AboutText
          variants={variants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          {` My passion for computers began at the age of 8 with a Windows XP
          system that introduced me to the world of flash games like Miniclip. 4
          years and a burned up power supply later, I knew computers and
          electronics is where my interests lay. As a mechanical engineering
          student with varied interests, I spent a lot of time learning a lot
          more about coding and design and taught myself both React.js and
          Fusion360. Today, I’m a well equipped front end developer who is
          constantly evolving towards being a full stack developer.`}
        </AboutText>
        <AboutImage
          variants={variants}
          whileInView="visible"
          initial="hidden"
          custom={"right"}
          whileHover="onHover"
          whileTap={"onHoverOut"}
          viewport={{ once: true }}
        >
          <Image src={ProfilePic} alt="My profile-pic" layout="responsive" />
        </AboutImage>
      </AboutSection>
    </Wrapper>
  );
}
