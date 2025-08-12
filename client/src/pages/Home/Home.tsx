import Experience from "./ExperienceSection/Experience";
import Hero from "./HeroSection/Hero";
import Projects from "./ProjectsSection/Projects";
import Strip from "../../components/Strip";

export default function Home() {
  return (
    <>
      <Strip />
      <Hero />
      <Projects />
      <Experience />
    </>
  )
}
