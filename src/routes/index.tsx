import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charu Lata — AI & Robotics Engineer" },
      {
        name: "description",
        content:
          "3D portfolio of Charu Lata — AI & Robotics engineering student building intelligent systems where ML meets hardware. Projects, skills, hackathons, and contact.",
      },
      { property: "og:title", content: "Charu Lata — AI & Robotics Engineer" },
      {
        property: "og:description",
        content:
          "Building intelligent systems where software meets hardware — ML pipelines, autonomous robots, and AI-driven products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
