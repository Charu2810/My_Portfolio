import Section from "./Section";

const hackathons = [
  {
    name: "TechXcelerate 2025",
    org: "BITS Pilani · 24 hr Hackathon",
    detail: "Built a full-stack booking system to streamline event creation and management.",
  },
  {
    name: "HackForge 2025",
    org: "DG Vaishnav College · 24 hr Hackathon",
    detail: "Developed an application automating hospital appointments. Secured 2nd Prize.",
    badge: "2nd Prize",
  },
  {
    name: "HackEra 2025",
    org: "Sathyabama University · 24 hr Hackathon",
    detail: "Built a user-friendly app to automate hospital appointments and optimize service efficiency.",
  },
];

const awards = [
  { title: "2nd Prize", subtitle: "HackForge 2025 — 24 Hr Hackathon" },
  { title: "2nd Prize", subtitle: "Professional Training Pride Course" },
];

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title={<>Hackathons & <span className="text-gradient-primary">achievements</span></>}
      description="Where I show up, ship fast, and win."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {hackathons.map((h) => (
          <div key={h.name} className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
            {h.badge && (
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium">
                {h.badge}
              </span>
            )}
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-glow">
                <path d="M6 9H4.5a2.5 2.5 0 010-5H6m12 5h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0012 0V2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">{h.name}</h3>
            <div className="text-xs text-muted-foreground mt-1 mb-3">{h.org}</div>
            <p className="text-sm text-foreground/80 leading-relaxed">{h.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {awards.map((a, i) => (
          <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
              ★
            </div>
            <div>
              <div className="font-semibold">{a.title}</div>
              <div className="text-sm text-muted-foreground">{a.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}