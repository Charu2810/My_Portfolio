export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Charu Lata · Crafted with intent.
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="mailto:charulata2810@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <span className="text-border">·</span>
          <a href="https://www.linkedin.com/in/charu-lata-a22096280" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <span className="text-border">·</span>
          <a href="tel:+919508756103" className="hover:text-foreground transition-colors">Phone</a>
        </div>
      </div>
    </footer>
  );
}