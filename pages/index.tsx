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
        <title>
          Mohammed Yasin Mulla | Frontend Developer & Software Engineer
        </title>
        <meta
          name="description"
          content="Mohammed Yasin Mulla - Experienced Frontend Developer & Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional user experiences and scalable applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mohammed Yasin Mulla" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Mohammed Yasin Mulla, Frontend Developer, Software Engineer, React Developer, Next.js, TypeScript, JavaScript, Web Development, UI/UX, Portfolio"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mohammed-yasin-mulla.vercel.app/"
        />
        <meta
          property="og:title"
          content="Mohammed Yasin Mulla | Frontend Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Experienced Frontend Developer & Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies."
        />
        <meta
          property="og:image"
          content="https://mohammed-yasin-mulla.vercel.app/images/profile-pic.png"
        />
        <meta
          property="og:site_name"
          content="Mohammed Yasin Mulla Portfolio"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://mohammed-yasin-mulla.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Mohammed Yasin Mulla | Frontend Developer & Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Experienced Frontend Developer & Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies."
        />
        <meta
          property="twitter:image"
          content="https://mohammed-yasin-mulla.vercel.app/images/profile-pic.png"
        />

        {/* Additional SEO */}
        <meta name="theme-color" content="#64ffda" />
        <link rel="canonical" href="https://mohammed-yasin-mulla.vercel.app/" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Yasin Mulla",
              jobTitle: "Frontend Developer & Software Engineer",
              description:
                "Experienced Frontend Developer & Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
              url: "https://mohammed-yasin-mulla.vercel.app/",
              image:
                "https://mohammed-yasin-mulla.vercel.app/images/profile-pic.png",
              sameAs: [
                "https://github.com/Mohammed-Yasin-Mulla",
                "https://www.linkedin.com/in/mohammed-yasin-mulla",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Frontend Development",
                "Web Development",
                "Software Engineering",
              ],
            }),
          }}
        />
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
