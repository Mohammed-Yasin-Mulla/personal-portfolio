import type { NextPage } from "next";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
// import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Footer from "../components/Footer";
import Head from "next/head";

const Home: NextPage = () => {
  <Head>
    <title>Mohammed Yasin Mulla</title>
  </Head>;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      {/* Disabling Projects for now! */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
