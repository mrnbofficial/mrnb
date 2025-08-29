import { useState, useEffect } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { Card, CardContent } from "@/components/ui/card";

interface MilestoneData {
  telegram: { current: number; target: number; progress: number };
  twitter: { current: number; target: number; progress: number };
  marketCap: { current: number; target: number; progress: number };
}

export function Milestones() {
  const { ref, isIntersecting } = useIntersection(0.3);
  const [animated, setAnimated] = useState(false);
  const [milestones] = useState<MilestoneData>({
    telegram: { current: 17000, target: 25000, progress: 68 },
    twitter: { current: 21000, target: 50000, progress: 42 },
    marketCap: { current: 150000, target: 1000000, progress: 15 },
  });

  const [displayValues, setDisplayValues] = useState({
    telegram: 0,
    twitter: 0,
    marketCap: 0,
  });

  useEffect(() => {
    if (isIntersecting && !animated) {
      setAnimated(true);
      
      // Animate telegram
      let telegramCurrent = 0;
      const telegramStep = milestones.telegram.current / 120;
      const telegramTimer = setInterval(() => {
        telegramCurrent += telegramStep;
        if (telegramCurrent >= milestones.telegram.current) {
          telegramCurrent = milestones.telegram.current;
          clearInterval(telegramTimer);
        }
        setDisplayValues(prev => ({ ...prev, telegram: Math.floor(telegramCurrent) }));
      }, 16);

      // Animate twitter
      let twitterCurrent = 0;
      const twitterStep = milestones.twitter.current / 120;
      const twitterTimer = setInterval(() => {
        twitterCurrent += twitterStep;
        if (twitterCurrent >= milestones.twitter.current) {
          twitterCurrent = milestones.twitter.current;
          clearInterval(twitterTimer);
        }
        setDisplayValues(prev => ({ ...prev, twitter: Math.floor(twitterCurrent) }));
      }, 16);

      // Animate market cap
      let marketCapCurrent = 0;
      const marketCapStep = milestones.marketCap.current / 120;
      const marketCapTimer = setInterval(() => {
        marketCapCurrent += marketCapStep;
        if (marketCapCurrent >= milestones.marketCap.current) {
          marketCapCurrent = milestones.marketCap.current;
          clearInterval(marketCapTimer);
        }
        setDisplayValues(prev => ({ ...prev, marketCap: Math.floor(marketCapCurrent) }));
      }, 16);
    }
  }, [isIntersecting, animated, milestones]);

  return (
    <section id="milestones" className="py-16 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 gradient-text" data-testid="milestones-title">
          Milestones
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Telegram Users */}
          <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group" data-testid="card-milestone-telegram">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.507 7.927-1.507 7.927-.47.187-.708-.117-.708-.117l-2.061-1.611-1.047-.982-1.881-1.33c-.234-.196-.234-.196.046-.466l3.049-2.791c.234-.196.117-.279-.117-.083l-4.15 2.697-1.881-.466c-.467-.117-.467-.467.117-.7l7.505-2.98c.35-.118.7.118.531.7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Telegram Users</h3>
              <div className="text-4xl font-black text-primary mb-2" data-testid="count-telegram">
                {displayValues.telegram.toLocaleString()}
              </div>
              <div className="text-muted-foreground font-bold">
                Target: {milestones.telegram.target.toLocaleString()}
              </div>
              <div className="w-full bg-border rounded-full h-2 mt-4">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${milestones.telegram.progress}%` }}
                  data-testid="progress-telegram"
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Twitter Followers */}
          <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group" data-testid="card-milestone-twitter">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Twitter Followers</h3>
              <div className="text-4xl font-black text-secondary mb-2" data-testid="count-twitter">
                {displayValues.twitter.toLocaleString()}
              </div>
              <div className="text-muted-foreground font-bold">
                Target: {milestones.twitter.target.toLocaleString()}
              </div>
              <div className="w-full bg-border rounded-full h-2 mt-4">
                <div 
                  className="bg-secondary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${milestones.twitter.progress}%` }}
                  data-testid="progress-twitter"
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Market Cap */}
          <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group" data-testid="card-milestone-marketcap">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Market Cap</h3>
              <div className="text-4xl font-black text-accent mb-2">
                <span data-testid="count-marketcap">
                  ${(displayValues.marketCap / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="text-muted-foreground font-bold">
                Target: ${(milestones.marketCap.target / 1000000).toFixed(0)}M
              </div>
              <div className="w-full bg-border rounded-full h-2 mt-4">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${milestones.marketCap.progress}%` }}
                  data-testid="progress-marketcap"
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
