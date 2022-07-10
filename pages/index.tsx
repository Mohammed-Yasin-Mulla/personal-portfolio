import type { NextPage } from "next";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
// import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  <Head>
    <title>Mohammed Yasin Mulla</title>
  </Head>;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Hero isMobile={isMobile} />
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
