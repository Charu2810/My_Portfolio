import Section from "./Section";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={<>Let's build something <span className="text-gradient-primary">together</span>.</>}
      description="Open to internships, research collaborations, and challenging engineering problems."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left: Contact Info */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 space-y-6 h-fit">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary-glow mb-2">Email</div>
            <a
              href="mailto:charulata2810@gmail.com"
              className="text-lg font-medium hover:text-gradient-primary transition-all break-all"
            >
              charulata2810@gmail.com
            </a>
          </div>
          <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />
          <div>
            <div className="text-xs uppercase tracking-wider text-primary-glow mb-2">Phone</div>
            <a href="tel:+919508756103" className="text-lg font-medium hover:text-primary-glow transition-colors">
              +91 95087 56103
            </a>
          </div>
          <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />
          <div>
            <div className="text-xs uppercase tracking-wider text-primary-glow mb-2">Location</div>
            <div className="text-lg font-medium">Chennai, India</div>
          </div>
          <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />
          <a
            href="https://www.linkedin.com/in/charu-lata-a22096280"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0a66c2]/20 border border-[#0a66c2]/40 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#0a66c2]">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-muted-foreground group-hover:text-primary-glow transition-colors">Connect with me professionally</div>
            </div>
          </a>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-3 glass-card rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Message sent!</h3>
              <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary-glow transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/charulata2810@gmail.com"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
