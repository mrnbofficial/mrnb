import { useCountdown } from "@/hooks/use-countdown";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export function CountdownTimer() {
  const { days, hours, minutes, isExpired } = useCountdown("2025-10-08T00:00:00");
  const { toast } = useToast();

  const contractAddress = "7XzwEhQdVdwyhkE5P9VxMtbP1XzQpXqN8dF2vK9mL3sR";

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({
        title: "Contract Address Copied!",
        description: "The contract address has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy contract address. Please copy manually.",
        variant: "destructive",
      });
    }
  };

  if (isExpired) {
    return (
      <div className="mb-16" data-testid="contract-section">
        <h3 className="text-3xl md:text-4xl font-black text-secondary mb-8" data-testid="text-live-status">
          🚀 IT'S LIVE!
        </h3>
        <Card className="bg-card border-secondary max-w-2xl mx-auto glow-effect">
          <CardContent className="p-8">
            <p className="text-muted-foreground font-bold mb-4 text-lg">Contract Address:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
              <code
                className="bg-muted text-muted-foreground px-4 py-3 rounded-lg font-mono text-sm break-all flex-1"
                data-testid="contract-address"
              >
                {contractAddress}
              </code>
              <Button
                onClick={copyContract}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                data-testid="button-copy-contract"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mb-16" data-testid="countdown-section">
      <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8" data-testid="countdown-title">
        Launch Countdown
      </h2>
      <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-8">
        {/* Days */}
        <div className="text-center">
          <Card className="bg-card border border-border glow-effect">
            <CardContent className="p-4 md:p-6 min-w-[100px] md:min-w-[120px]">
              <div
                className="text-4xl md:text-6xl font-black text-primary countdown-digit"
                data-testid="countdown-days"
              >
                {String(days).padStart(3, "0")}
              </div>
              <div className="text-xs md:text-base text-muted-foreground font-bold uppercase tracking-wider">
                Days
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hours */}
        <div className="text-center">
          <Card className="bg-card border border-border glow-effect">
            <CardContent className="p-4 md:p-6 min-w-[100px] md:min-w-[120px]">
              <div
                className="text-4xl md:text-6xl font-black text-primary countdown-digit"
                data-testid="countdown-hours"
              >
                {String(hours).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-base text-muted-foreground font-bold uppercase tracking-wider">
                Hours
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Minutes */}
        <div className="text-center">
          <Card className="bg-card border border-border glow-effect">
            <CardContent className="p-4 md:p-6 min-w-[100px] md:min-w-[120px]">
              <div
                className="text-4xl md:text-6xl font-black text-primary countdown-digit"
                data-testid="countdown-minutes"
              >
                {String(minutes).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-base text-muted-foreground font-bold uppercase tracking-wider">
                Minutes
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
