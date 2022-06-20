import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Wrapper, Link, VerticalLine } from "./NavbarSideStyleComp";

interface Props {
  positionCol: "left" | "right";
}

export default function NavbarSide(props: Props) {
  const { positionCol } = props;

  if (positionCol === "left") {
    return (
      <Wrapper positionLeftCol>
        <Link
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <FiGithub className="svgIcon" />
        </Link>
        <Link
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
        >
          <FiLinkedin className="svgIcon" />
        </Link>
        <Link
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
        >
          <FiTwitter className="svgIcon" />
        </Link>
        <VerticalLine
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
        />
      </Wrapper>
    );
  }

  if (positionCol === "right") {
    return (
      <Wrapper positionRightCol>
        <Link
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
        >
          <p className="email">MohammedYasinMulla@outlook.com</p>
        </Link>
        <VerticalLine
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
        />
      </Wrapper>
    );
  }

  return null;
}
