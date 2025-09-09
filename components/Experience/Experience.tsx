import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import TitleSection from "../Common/TitleSection";

const experiences = [
  {
    company: "Neuralbase",
    role: "Full Stack Developer",
    period: "Current - Present",
    location: "Remote",
    description:
      "Building cutting-edge AI-powered multimodal solutions that revolutionize how users interact with data and content. Developing innovative products that seamlessly integrate artificial intelligence with modern web technologies.",
    achievements: [
      "Architecting next-generation AI multimodal interfaces",
      "Implementing advanced machine learning pipelines",
      "Building scalable AI-powered web applications",
      "Creating innovative user experiences with AI integration",
    ],
    tech: ["AI/ML", "Next.js", "TypeScript", "Python", "Multimodal AI"],
    status: "current",
    isSecret: true,
  },
  {
    company: "Babylovegrowth.ai",
    role: "Contract Full Stack Developer",
    period: "Mar 2025 - Apr 2025",
    location: "Remote, New York",
    description:
      "Developed automated content generation pipelines and SEO optimization tools, enhancing content diversity and engagement by implementing AI-powered solutions.",
    achievements: [
      "Automated content generation using Model Context Protocol (MCP)",
      "Built competitor analysis tools through sitemap parsing",
      "Created JSON-LD schema generator for SEO enhancement",
      "Optimized LLM performance balancing cost and efficiency",
      "Designed brand voice mimicry modules",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Express.js",
      "AI Tools",
      "PostgreSQL",
    ],
    status: "completed",
  },
  {
    company: "Periskope",
    role: "Full Stack Software Engineer",
    period: "Jun 2024 - Dec 2024",
    location: "Remote, India",
    description:
      "Revolutionized customer support through AI integration and optimized data architecture, contributing to mobile PWA development and implementing comprehensive testing frameworks.",
    achievements: [
      "Integrated AI-driven summarization using Gemini AI",
      "Architected BigQuery integration for data optimization",
      "Implemented containerization for development efficiency",
      "Enhanced front-end with Cypress testing framework",
      "Built segmented marketing email flow system",
    ],
    tech: ["Next.js", "TypeScript", "GCP", "BigQuery", "Cypress", "Docker"],
    status: "completed",
  },
  {
    company: "Obmondo",
    role: "Full-Stack Engineer",
    period: "May 2023 - Jun 2024",
    location: "Remote, Denmark",
    description:
      "Optimized performance and user engagement through advanced technologies, achieving significant improvements in API efficiency and testing automation.",
    achievements: [
      "Increased user engagement metrics by 40%",
      "Reduced API calls from 200 to 70 (65% reduction)",
      "Implemented Cypress automation framework",
      "Achieved 30% increase in testing efficiency",
    ],
    tech: ["Next.js", "TypeScript", "GoLang", "Cypress"],
    status: "completed",
  },
  {
    company: "Flurn",
    role: "Software Engineer",
    period: "Apr 2022 - Apr 2023",
    location: "Bengaluru, India",
    description:
      "Developed a comprehensive CRM system and enhanced web/mobile applications, resulting in significant improvements in data processing efficiency and user engagement.",
    achievements: [
      "Developed CRM system reducing data processing time by 40%",
      "Designed intuitive dashboards increasing insights utilization by 35%",
      "Enhanced web and mobile apps using React Native",
      "Developed RESTful APIs with GoLang",
      "Improved teacher-student engagement metrics by 35%",
    ],
    tech: ["Next.js", "React Native", "GoLang", "AntDesign", "PostgreSQL"],
    status: "completed",
  },
  {
    company: "Flurn",
    role: "Software Engineer Intern",
    period: "Jan 2022 - Mar 2022",
    location: "Bengaluru, India",
    description:
      "Optimized API performance and developed data visualization strategies that enhanced teacher profiles and student engagement on the platform.",
    achievements: [
      "Optimized API performance achieving 15% decrease in error rates",
      "Developed data visualization strategy boosting performance metrics by 25%",
      "Enhanced teacher-student engagement features",
      "Facilitated early-stage CRM development with Next.js and AntDesign",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React Native",
      "GoLang",
      "PostgreSQL",
      "AntDesign",
    ],
    status: "completed",
  },
];

const Wrapper = styled.div<{ id?: string; children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 3rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.slate};
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.green},
      ${(props) => props.theme.colors.lightestNavy},
      ${(props) => props.theme.colors.green}
    );
    transform: translateX(-50%);
    z-index: 0;
  }

  @media screen and (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{
  $isLeft: boolean;
  $isCurrent: boolean;
  $isSecret?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  width: 100%;
  z-index: 1;

  ${(props) =>
    props.$isLeft
      ? `
    justify-content: flex-start;
  `
      : `
    justify-content: flex-end;
  `}

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const TimelineDot = styled(motion.div)<{
  $isCurrent: boolean;
  $isSecret?: boolean;
}>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.$isCurrent ? "20px" : "16px")};
  height: ${(props) => (props.$isCurrent ? "20px" : "16px")};
  border-radius: 50%;
  background: ${(props) =>
    props.$isSecret
      ? "linear-gradient(135deg, #8B5CF6, #06B6D4)"
      : props.$isCurrent
      ? props.theme.colors.green
      : props.theme.colors.lightestNavy};
  border: 3px solid ${(props) => props.theme.colors.navy};
  z-index: 2;

  ${(props) =>
    props.$isCurrent &&
    `
    box-shadow: 0 0 20px ${props.theme.colors.green}50;
  `}

  ${(props) =>
    props.$isSecret &&
    `
    box-shadow: 0 0 25px #8B5CF650;
    animation: pulse 2s infinite;
  `}
  
  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 25px #8b5cf650;
    }
    50% {
      box-shadow: 0 0 35px #8b5cf680, 0 0 50px #06b6d450;
    }
  }

  @media screen and (max-width: 768px) {
    left: 20px;
  }
`;

const ExperienceCard = styled(motion.div)<{
  $isLeft: boolean;
  $isCurrent: boolean;
  $isSecret?: boolean;
}>`
  background: ${(props) =>
    props.$isSecret
      ? "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))"
      : `linear-gradient(145deg, ${props.theme.colors.lightNavy}, ${props.theme.colors.navy})`};
  border: 1px solid
    ${(props) =>
      props.$isSecret
        ? "#8B5CF6"
        : props.$isCurrent
        ? props.theme.colors.green
        : props.theme.colors.lightestNavy};
  border-radius: 16px;
  padding: 2rem;
  width: 45%;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  ${(props) =>
    props.$isSecret &&
    `
    border-image: linear-gradient(135deg, #8B5CF6, #06B6D4) 1;
  `}

  &::before {
    content: "";
    position: absolute;
    ${(props) => (props.$isLeft ? "right: -12px;" : "left: -12px;")}
    top: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    ${(props) =>
      props.$isLeft
        ? `
      border-width: 12px 12px 12px 0;
      border-color: transparent ${
        props.$isSecret
          ? "#8B5CF6"
          : props.$isCurrent
          ? props.theme.colors.green
          : props.theme.colors.lightestNavy
      } transparent transparent;
    `
        : `
      border-width: 12px 0 12px 12px;
      border-color: transparent transparent transparent ${
        props.$isSecret
          ? "#8B5CF6"
          : props.$isCurrent
          ? props.theme.colors.green
          : props.theme.colors.lightestNavy
      };
    `}
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &::before {
      left: -12px;
      border-width: 12px 0 12px 12px;
      border-color: transparent transparent transparent
        ${(props) =>
          props.$isSecret
            ? "#8B5CF6"
            : props.$isCurrent
            ? props.theme.colors.green
            : props.theme.colors.lightestNavy};
    }
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const CompanyName = styled.h3<{
  $isSecret?: boolean;
  children?: React.ReactNode;
}>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => (props.$isSecret ? "#8B5CF6" : props.theme.colors.green)};
  margin: 0;

  ${(props) =>
    props.$isSecret &&
    `
    background: linear-gradient(135deg, #8B5CF6, #06B6D4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const Role = styled.h4`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin: 0.5rem 0;
`;

const Period = styled.span`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.slate};

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Location = styled.span`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.slateTint};
  font-style: italic;
`;

const Description = styled.p<{
  $isSecret?: boolean;
  children?: React.ReactNode;
}>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.slate};
  margin: 1rem 0;

  ${(props) =>
    props.$isSecret &&
    `
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
    padding: 1rem;
    border-radius: 8px;
    border-left: 3px solid #8B5CF6;
  `}
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const Achievement = styled(motion.li)`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.slate};
  margin: 0.5rem 0;
  padding-left: 1.2rem;
  position: relative;

  &::before {
    content: "▶";
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.colors.green};
    font-size: 0.7rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const TechChip = styled.span<{
  $isSecret?: boolean;
  children?: React.ReactNode;
}>`
  background: ${(props) =>
    props.$isSecret
      ? "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))"
      : props.theme.colors.greenTint};
  color: ${(props) => (props.$isSecret ? "#8B5CF6" : props.theme.colors.green)};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  border: 1px solid
    ${(props) =>
      props.$isSecret ? "#8B5CF630" : `${props.theme.colors.green}30`};
`;

const SecretBadge = styled(motion.div)`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 3;

  &::before {
    content: "🤫";
    margin-right: 0.3rem;
  }
`;

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const achievementVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <div ref={ref}>
      <Wrapper id="Experience">
        <TitleSection number="03" title="Experience" />

        <AboutText
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          My professional journey building innovative solutions and leading
          impactful projects
        </AboutText>

        <TimelineContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
                $isLeft={index % 2 === 0}
                $isCurrent={exp.status === "current"}
                $isSecret={exp.isSecret}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <TimelineDot
                  $isCurrent={exp.status === "current"}
                  $isSecret={exp.isSecret}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <ExperienceCard
                  $isLeft={index % 2 === 0}
                  $isCurrent={exp.status === "current"}
                  $isSecret={exp.isSecret}
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {exp.isSecret && (
                    <SecretBadge
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: index * 0.3 + 0.5,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      SECRET
                    </SecretBadge>
                  )}

                  <CompanyHeader>
                    <div>
                      <CompanyName $isSecret={exp.isSecret}>
                        {exp.company}
                      </CompanyName>
                      <Role>{exp.role}</Role>
                      <Location>{exp.location}</Location>
                    </div>
                    <Period>{exp.period}</Period>
                  </CompanyHeader>

                  <Description $isSecret={exp.isSecret}>
                    {exp.description}
                  </Description>

                  <AchievementsList>
                    {exp.achievements.map((achievement, achIndex) => (
                      <Achievement
                        key={achIndex}
                        variants={achievementVariants}
                        initial="hidden"
                        animate={hoveredIndex === index ? "visible" : "hidden"}
                        custom={achIndex}
                      >
                        {achievement}
                      </Achievement>
                    ))}
                  </AchievementsList>

                  <TechStack>
                    {exp.tech.map((tech, techIndex) => (
                      <TechChip key={techIndex} $isSecret={exp.isSecret}>
                        {tech}
                      </TechChip>
                    ))}
                  </TechStack>
                </ExperienceCard>
              </TimelineItem>
            ))}
          </motion.div>
        </TimelineContainer>
      </Wrapper>
    </div>
  );
}
