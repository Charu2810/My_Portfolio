import { lazy, Suspense } from "react";

const Scene3D = lazy(() => import("@/components/Scene3D"));

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0" />}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 animate-float">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground tracking-wide">
              AI & Robotics Engineer · Available for opportunities
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient-primary">Charu Lata</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I build intelligent systems where{" "}
            <span className="text-foreground">software meets hardware</span> — crafting
            machine learning pipelines, autonomous robots, and AI-driven products.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl glass text-foreground font-medium hover:bg-white/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "9.17", l: "CGPA (as of 5th Semester)" },
              { v: "4+", l: "Projects" },
              { v: "3", l: "Hackathons" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-gradient-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-muted-foreground text-xs flex flex-col items-center gap-2 animate-float">
        <span>Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}