import type { NextPage } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

const Home: NextPage = ({ isMobile }: { isMobile?: boolean }) => (
  <>
    <Navbar isMobile={isMobile} />
    <About isMobile={isMobile} />
    <Technologies isMobile={isMobile}>Hello Technologies</Technologies>
    <Projects isMobile={isMobile}>Hello Projects</Projects>
    <Contact isMobile={isMobile}>Hello Contact</Contact>
  </>
);

export default Home;
