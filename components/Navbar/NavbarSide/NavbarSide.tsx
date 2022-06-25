import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Wrapper, Link, VerticalLine } from "./NavbarSideStyleComp";

interface Props {
  positionCol: "left" | "right";
}

export default function NavbarSide(props: Props) {
  const { positionCol } = props;

  const variantsLeft = {
    visible: ({ i }: { i: number }) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          when: "afterChildren",
          delay: i * 0.3,
        },
      };
    },
    hidden: ({ side = "left" }: { side: "left" | "right" }) => ({
      opacity: 0,
      x: side === "left" ? -20 : 20,
      transition: {
        ease: "easeInOut",
        when: "afterChildren",
      },
    }),
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
          variants={variantsLeft}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={{ i: 1 }}
        >
          <FiGithub className="svgIcon" />
        </Link>
        <Link
          variants={variantsLeft}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={{ i: 2 }}
        >
          <FiLinkedin className="svgIcon" />
        </Link>
        <Link
          variants={variantsLeft}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={{ i: 3 }}
        >
          <FiTwitter className="svgIcon" />
        </Link>
        <VerticalLine
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeInOut", when: "afterChildren" }}
        />
      </Wrapper>
    );
  }

  if (positionCol === "right") {
    return (
      <Wrapper positionRightCol>
        <Link
          variants={variantsLeft}
          animate="visible"
          initial="hidden"
          whileHover="whileHover"
          whileTap="whileTap"
          custom={{ side: "right" }}
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
