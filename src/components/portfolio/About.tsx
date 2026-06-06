import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Engineering intelligence at the <span className="text-gradient-primary">edge of hardware</span>.</>}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-card rounded-2xl p-8 space-y-4">
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm an <span className="text-primary-glow font-medium">AI & Robotics undergraduate</span>{" "}
            at Sathyabama Institute of Science and Technology, building toward a future where
            machine learning and intelligent hardware work in seamless concert.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My focus sits at the intersection of <span className="text-foreground">ML pipelines</span>,
            <span className="text-foreground"> embedded systems</span>, and{" "}
            <span className="text-foreground">full-stack development</span>. From recommendation
            engines to autonomous patrolling rovers, I love solving complex problems through
            end-to-end design — software, hardware, and the messy bits in between.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Problem Solving", "Leadership", "Team Management", "Adaptability", "Time Management"].map((s) => (
              <span key={s} className="px-3 py-1.5 text-xs rounded-full glass text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Location", value: "Chennai, India" },
            { label: "Education", value: "B.E. CSE (AI & Robotics)" },
            { label: "CGPA", value: "9.17 (as of 5th Semester)"  },
            { label: "Graduation", value: "Expected 2027" },
            { label: "Languages", value: "English, Hindi" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
              <div className="text-sm font-medium mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}