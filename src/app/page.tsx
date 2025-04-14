import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Resume from "../components/sections/Resume";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Resume />
      <Projects />
      <Contact />
    </Layout>
  );
}
