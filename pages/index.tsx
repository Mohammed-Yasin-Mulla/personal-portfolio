import type { NextPage } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

const Home: NextPage = () => (
  <>
    <Navbar />
    <About>Hello About</About>
    <Technologies>Hello Technologies</Technologies>
    <Projects>Hello Projects</Projects>
    <Contact>Hello Contact</Contact>
  </>
);

export default Home;
