import { cn } from "@/lib/utils";
import logoPath from "@assets/1958573454241726464_1756452699808.jpeg";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={logoPath}
              alt="$MRNB Logo"
              className="w-12 h-12 rounded-full"
              data-testid="logo-image"
            />
            <span className="text-2xl font-black gradient-text" data-testid="brand-name">
              $MRNB
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("milestones")}
              className="text-muted-foreground hover:text-foreground transition-colors font-bold"
              data-testid="nav-milestones"
            >
              Milestones
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-muted-foreground hover:text-foreground transition-colors font-bold"
              data-testid="nav-community"
            >
              Community
            </button>
            <button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105"
              data-testid="button-join-now"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
