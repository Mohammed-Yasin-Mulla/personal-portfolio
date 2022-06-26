import type { NextPage } from "next";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import About from "../components/About";

const Home: NextPage = ({ isMobile = false }: { isMobile?: boolean }) => (
  <>
    <Navbar isMobile={isMobile} />
    <Hero isMobile={isMobile} />
    <About />
    <Technologies />
    <Projects isMobile={isMobile}>Hello Projects</Projects>
    <Contact isMobile={isMobile}>Hello Contact</Contact>
  </>
);

export default Home;
