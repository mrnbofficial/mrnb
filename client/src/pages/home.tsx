import { Navigation } from "@/components/ui/navigation";
import { CountdownTimer } from "@/components/countdown-timer";
import { Milestones } from "@/components/milestones";
import logoPath from "@assets/1958573454241726464_1756452699808.jpeg";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo and Title */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 animate-pulse-slow">
              <img
                src={logoPath}
                alt="$MRNB Logo"
                className="w-full h-full rounded-full object-cover"
                data-testid="hero-logo"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-black gradient-text mb-4" data-testid="hero-title">
              $MRNB
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-bold" data-testid="hero-subtitle">
              The Next Big Solana Memecoin
            </p>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* Milestones Section */}
      <Milestones />

      {/* Community Section */}
      <section id="community" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 gradient-text" data-testid="community-title">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-bold" data-testid="community-description">
            Be part of the next big Solana memecoin revolution!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-3"
              data-testid="link-telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.507 7.927-1.507 7.927-.47.187-.708-.117-.708-.117l-2.061-1.611-1.047-.982-1.881-1.33c-.234-.196-.234-.196.046-.466l3.049-2.791c.234-.196.117-.279-.117-.083l-4.15 2.697-1.881-.466c-.467-.117-.467-.467.117-.7l7.505-2.98c.35-.118.7.118.531.7z"/>
              </svg>
              <span>Join Telegram</span>
            </a>
            
            <a
              href="#"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-3"
              data-testid="link-twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
              <span>Follow Twitter</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src={logoPath}
              alt="$MRNB Logo"
              className="w-8 h-8 rounded-full"
              data-testid="footer-logo"
            />
            <span className="text-xl font-black gradient-text" data-testid="footer-brand">
              $MRNB
            </span>
          </div>
          <p className="text-muted-foreground font-bold" data-testid="footer-text">
            Built on Solana | The Future of Memecoins
          </p>
        </div>
      </footer>
    </div>
  );
}
