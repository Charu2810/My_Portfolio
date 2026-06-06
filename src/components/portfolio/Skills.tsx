import Section from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C"],
    icon: (
      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
    ),
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "Naive Bayes", "Linear Regression"],
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />,
  },
  {
    title: "Web Development",
    items: ["React", "Full-Stack", "REST APIs", "Booking Systems"],
    icon: <path d="M3 9h18M9 21V9M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />,
  },
  {
    title: "Tools & Design",
    items: ["MySQL", "AutoCAD", "SolidWorks", "Simulink", "Arduino"],
    icon: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />,
  },
  {
    title: "Robotics & Hardware",
    items: ["Sensors", "Motor Control", "Arduino UNO", "Embedded Systems"],
    icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
  },
  {
    title: "Interests",
    items: ["AI / ML", "Robotics", "Web Development", "Computer Vision"],
    icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Skills & <span className="text-gradient-primary">technologies</span></>}
      description="The tools and frameworks I use to turn ideas into intelligent, working systems."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group glass-card rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-glow">
                {g.icon}
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}