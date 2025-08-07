import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DashboardSummary } from "@/types/dashboard";
import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";

interface SummaryCardsProps {
  summary: DashboardSummary;
}

export function SummaryCards({ summary }: SummaryCardsProps) {
  const cards = [
    {
      title: "Total Balance",
      value: `$${summary.totalBalance.toLocaleString()}`,
      change: summary.balanceChange,
      isPositive: summary.balanceChange > 0,
    },
    {
      title: "Total Credits",
      value: `$${summary.totalCredits.toLocaleString()}`,
      change: summary.creditsChange,
      isPositive: summary.creditsChange > 0,
    },
    {
      title: "Total Debits",
      value: `$${summary.totalDebits.toLocaleString()}`,
      change: summary.debitsChange,
      isPositive: summary.debitsChange > 0,
    },
    {
      title: "Transactions",
      value: summary.transactionCount.toString(),
      change: summary.transactionChange,
      isPositive: summary.transactionChange > 0,
    },
  ];

  return (
    <div className="space-y-3 md:space-y-4 w-full">
      <h2 className="text-base md:text-lg font-semibold text-gray-900">
        Summary
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="bg-[#34616f]/10 hover:shadow-md transition-shadow w-full"
          >
            <CardContent className="px-3 py-3 md:px-5 md:py-4">
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <h3 className="text-xs md:text-sm font-medium text-[#1B2528] leading-tight">
                  {card.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-5 h-5 md:w-6 md:h-6 hover:bg-white/10 flex-shrink-0"
                >
                  <MoreHorizontal className="w-3 h-3 md:w-4 md:h-4 text-[#1B2528]" />
                </Button>
              </div>
              <div className="space-y-1">
                <p className="text-lg md:text-2xl font-bold text-[#1B2528] leading-tight">
                  {card.value}
                </p>
                <div className="flex items-center space-x-1">
                  {card.isPositive ? (
                    <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#3e7383] flex-shrink-0" />
                  ) : (
                    <TrendingDown className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-400 flex-shrink-0" />
                  )}
                  <span
                    className={cn("text-xs font-medium", {
                      "text-[#3e7383]": card.isPositive,
                      "text-red-400": !card.isPositive,
                    })}
                  >
                    {card.change > 0 ? "+" : ""}
                    {card.change}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
