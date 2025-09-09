import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import TitleSection from "../Common/TitleSection";

// -------------------------CATEGORIZED TECHNOLOGIES-----------------------------------
interface TechItem {
  src?: string;
  name: string;
  color: string;
  icon?: string;
}

interface TechCategories {
  [key: string]: TechItem[];
}

const techCategories: TechCategories = {
  Frontend: [
    { src: "/images/react-logo.svg", name: "React.js", color: "#61DAFB" },
    { src: "/images/nextjs-logo.svg", name: "Next.js", color: "#000000" },
    { name: "React Native", color: "#61DAFB", icon: "📱" },
    {
      src: "/images/typescript-logo.svg",
      name: "TypeScript",
      color: "#3178C6",
    },
    { name: "TailwindCSS", color: "#06B6D4", icon: "🎨" },
    { src: "/images/antd-logo.svg", name: "Ant Design", color: "#1890FF" },
    { name: "Shadcn UI", color: "#000000", icon: "✨" },
    { name: "Figma", color: "#F24E1E", icon: "🎨" },
  ],
  "Backend & Languages": [
    { src: "/images/node-logo.svg", name: "Node.js", color: "#339933" },
    { name: "GoLang", color: "#00ADD8", icon: "🐹" },
    { name: "Express.js", color: "#000000", icon: "⚡" },
    { name: "JavaScript", color: "#F7DF1E", icon: "📜" },
    { name: "Prisma", color: "#2D3748", icon: "🔷" },
  ],
  "Cloud & DevOps": [
    { name: "Docker", color: "#2496ED", icon: "🐳" },
    { name: "Google Cloud", color: "#4285F4", icon: "☁️" },
    { name: "Vercel", color: "#000000", icon: "▲" },
    { name: "VPS", color: "#FF6B6B", icon: "🖥️" },
    { name: "Supabase", color: "#3ECF8E", icon: "⚡" },
  ],
  "Databases & Analytics": [
    { name: "PostgreSQL", color: "#336791", icon: "🐘" },
    { name: "BigQuery", color: "#4285F4", icon: "📊" },
  ],
  "Testing & API Tools": [
    { name: "Cypress", color: "#17202C", icon: "🧪" },
    { name: "Postman", color: "#FF6C37", icon: "📮" },
  ],
  "AI & Tools": [
    { name: "AI/ML Tools", color: "#FF6B35", icon: "🤖" },
    { name: "MCP", color: "#8B5CF6", icon: "🔗" },
    { src: "/images/framer-logo.svg", name: "Framer Motion", color: "#0055FF" },
  ],
};
// ------------------------------------------------------------

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
  }
`;

const CategorySection = styled(motion.div)`
  width: 100%;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.green};
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.green},
      transparent
    );
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
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

const TechCard = styled(motion.div)<{ $glowColor: string }>`
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.colors.lightNavy},
    ${(props) => props.theme.colors.navy}
  );
  border: 1px solid ${(props) => props.theme.colors.lightestNavy};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      transparent,
      ${(props) => props.$glowColor}20,
      transparent
    );
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

const TechIcon = styled.div<{ $color: string; children?: React.ReactNode }>`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.$color}15;
  border: 2px solid ${(props) => props.$color}30;
  font-size: 2rem;
  position: relative;
  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: drop-shadow(0 0 8px ${(props) => props.$color}50);
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      ${(props) => props.$color}20,
      transparent
    );
    transform: rotate(45deg);
    transition: transform 0.6s ease;
  }

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const TechName = styled.span<{ $color: string; children?: React.ReactNode }>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  letter-spacing: 0.5px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const FloatingOrb = styled(motion.div)<{
  $color: string;
  $size: number;
  $top: string;
  $left: string;
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${(props) => props.$color}20,
    transparent
  );
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  pointer-events: none;
  z-index: 0;
`;

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const orbVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref}>
      <Wrapper id="Technologies">
        {/* Floating Background Orbs */}
        <FloatingOrb
          $color="#64ffda"
          $size={100}
          $top="10%"
          $left="5%"
          variants={orbVariants}
          animate="animate"
        />
        <FloatingOrb
          $color="#61DAFB"
          $size={80}
          $top="60%"
          $left="90%"
          variants={orbVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <FloatingOrb
          $color="#3178C6"
          $size={120}
          $top="80%"
          $left="10%"
          variants={orbVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />

        <TitleSection number="02" title="Technologies" />

        <AboutText
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Cutting-edge technologies and frameworks I use to build exceptional
          digital experiences
        </AboutText>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ width: "100%", position: "relative", zIndex: 1 }}
        >
          {Object.entries(techCategories).map(
            ([category, techs], categoryIndex) => (
              <CategorySection key={category} variants={categoryVariants}>
                <CategoryTitle
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                >
                  {category}
                </CategoryTitle>

                <TechGrid>
                  {techs.map((tech, index) => (
                    <TechCard
                      key={`${category}-${index}`}
                      variants={cardVariants}
                      whileHover="hover"
                      $glowColor={tech.color}
                    >
                      <motion.div variants={iconVariants} whileHover="hover">
                        <TechIcon $color={tech.color}>
                          {tech.src ? (
                            <img src={tech.src} alt={tech.name} />
                          ) : (
                            <span>{tech.icon}</span>
                          )}
                        </TechIcon>
                      </motion.div>

                      <TechName $color={tech.color}>{tech.name}</TechName>
                    </TechCard>
                  ))}
                </TechGrid>
              </CategorySection>
            )
          )}
        </motion.div>
      </Wrapper>
    </div>
  );
}
