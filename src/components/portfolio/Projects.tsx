import Section from "./Section";

const projects = [
  {
    name: "CosmeSel",
    tag: "AI · Recommendation",
    description:
      "AI-powered cosmetic recommendation engine built with Python and React. Uses ML to analyze skin parameters and deliver personalized cosmetic selections.",
    stack: ["Python", "React", "ML", "Scikit-learn"],
    accent: "from-primary to-primary-glow",
  },
  {
    name: "Diabetes Prediction System",
    tag: "ML Pipeline · Health",
    description:
      "End-to-end ML pipeline using Scikit-learn and Pandas to predict diabetes risk. Implemented Naive Bayes for efficient probabilistic classification and early disease detection.",
    stack: ["Python", "Scikit-learn", "Pandas", "Naive Bayes"],
    accent: "from-accent to-primary",
  },
  {
    name: "AI Real Estate Valuation",
    tag: "ML · Regression",
    description:
      "Property valuation model using Linear Regression, analyzing historical market data and geographic features to predict real estate prices with high precision.",
    stack: ["Python", "Scikit-learn", "Linear Regression", "Pandas"],
    accent: "from-primary-glow to-accent",
  },
  {
    name: "Night Patrolling Rover",
    tag: "Robotics · Hardware",
    description:
      "Hardware-based robotic rover for night surveillance. Integrates sensors and motor control for autonomous patrolling and real-time obstacle detection.",
    stack: ["Arduino", "Sensors", "Motor Control", "Embedded C"],
    accent: "from-primary to-accent",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects I've <span className="text-gradient-primary">built</span></>}
      description="A blend of machine learning, full-stack engineering, and physical robotics."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="group relative glass-card rounded-2xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500"
          >
            <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-glow mb-2">
                    {p.tag}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                </div>
                <div className="text-xs font-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md glass text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}