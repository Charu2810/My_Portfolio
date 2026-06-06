import Section from "./Section";

const timeline = [
  {
    year: "2023 – 2027",
    title: "B.E. Computer Science",
    subtitle: "Sathyabama Institute of Science and Technology",
    detail: "Specialization in Artificial Intelligence & Robotics. CGPA 9.17 (up to 5th sem).",
  },
  {
    year: "2025",
    title: "Infosys Springboard Virtual Internship 6.0",
    subtitle: "Artificial Intelligence Domain",
    detail: "Immersive AI program — hands-on with ML workflows and applied AI projects.",
  },
  {
    year: "2025",
    title: "GFG 160 Days · GeeksforGeeks",
    subtitle: "22-Week Intensive DSA Program",
    detail: "Sustained data structures and algorithms practice across 160 days.",
  },
  {
    year: "2021 – 2022",
    title: "Intermediate (12th)",
    subtitle: "Kendriya Vidyalaya, Kankarbagh, Patna",
    detail: "Scored 82.16%.",
  },
  {
    year: "2019 – 2020",
    title: "Matriculation (10th)",
    subtitle: "Kendriya Vidyalaya, Kankarbagh, Patna",
    detail: "Scored 91.40%.",
  },
];

const certs = [
  "Python Programming — CodeTantra",
  "Fundamentals of Java Programming — CodeTantra",
  "Programming in Java — NPTEL",
  "Infosys Springboard Internship — AI Domain",
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={<>Experience & <span className="text-gradient-primary">education</span></>}
      description="The path that's shaped my engineering thinking."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
                </div>
                <div className="glass-card rounded-xl p-5">
                  <div className="text-xs font-mono text-primary-glow mb-1">{t.year}</div>
                  <h3 className="font-semibold text-lg">{t.title}</h3>
                  <div className="text-sm text-muted-foreground mb-2">{t.subtitle}</div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="text-sm text-muted-foreground flex gap-3">
                  <span className="text-primary-glow mt-0.5">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
              Leadership & Activities
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary-glow mt-0.5">▸</span>Conducted a seminar on Sensors & Arduino UNO</li>
              <li className="flex gap-3"><span className="text-primary-glow mt-0.5">▸</span>Conducted a seminar on Simulink</li>
              <li className="flex gap-3"><span className="text-primary-glow mt-0.5">▸</span>Team management & cross-disciplinary collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}