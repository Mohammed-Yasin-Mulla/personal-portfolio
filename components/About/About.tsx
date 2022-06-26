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
const AboutImage = styled.div`
  background-color: ${(props) => props.theme.colors.lightNavy};
  border-radius: 1rem;
  width: 22rem;
  height: 22rem;
  overflow: hidden;
`;

export default function About() {
  return (
    <Wrapper>
      <TitleSection number="01" title="About" />
      <AboutSection>
        <AboutText>
          {` My passion for computers began at the age of 8 with a Windows XP
          system that introduced me to the world of flash games like Miniclip. 4
          years and a burned up power supply later, I knew computers and
          electronics is where my interests lay. As a mechanical engineering
          student with varied interests, I spent a lot of time learning a lot
          more about coding and design and taught myself both React.js and
          Fusion360. Today, I’m a well equipped front end developer who is
          constantly evolving towards being a full stack developer.`}
        </AboutText>
        <AboutImage>
          <Image src={ProfilePic} alt="My profile-pic" layout="responsive" />
        </AboutImage>
      </AboutSection>
    </Wrapper>
  );
}
