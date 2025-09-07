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
  return (
    <>
      <Head>
        <title>Mohammed Yasin Mulla</title>
        <meta
          name="description"
          content="Portfolio of Mohammed Yasin Mulla - Software Engineer specializing in frontend development with React, Next.js and modern web technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
