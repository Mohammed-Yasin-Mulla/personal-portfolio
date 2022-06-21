import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Wrapper, Link, VerticalLine } from "./NavbarSideStyleComp";

interface Props {
  positionCol: "left" | "right";
}

export default function NavbarSide(props: Props) {
  const { positionCol } = props;

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "afterChildren",
        delay: i * 0.3,
      },
    }),
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    whileHover: {
      y: -5,
    },
    whileTap: {
      y: 0,
    },
  };

  if (positionCol === "left") {
    return (
      <Wrapper positionLeftCol>
        <Link
          variants={variants}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={1}
        >
          <FiGithub className="svgIcon" />
        </Link>
        <Link
          variants={variants}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={2}
        >
          <FiLinkedin className="svgIcon" />
        </Link>
        <Link
          variants={variants}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={3}
        >
          <FiTwitter className="svgIcon" />
        </Link>
        <VerticalLine
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeInOut", when: "afterChildren" }}
          // whileHover={{ y: -5 }}
          // whileTap={{ y: 0 }}
        />
      </Wrapper>
    );
  }

  if (positionCol === "right") {
    return (
      <Wrapper positionRightCol>
        <Link
          variants={variants}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={1}
        >
          <p className="email">MohammedYasinMulla@outlook.com</p>
        </Link>
        <VerticalLine
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeInOut", delay: 0.9 }}
        />
      </Wrapper>
    );
  }

  return null;
}
