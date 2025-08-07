import { Card, CardContent } from '@/components/ui/card';
import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';
import { DashboardSummary } from '@/types/dashboard';
import { Button } from '@/components/ui/button';

interface SummaryCardsProps {
  summary: DashboardSummary;
}

export function SummaryCards({ summary }: SummaryCardsProps) {
  const cards = [
    {
      title: 'Total Balance',
      value: `$${summary.totalBalance.toLocaleString()}`,
      change: summary.balanceChange,
      isPositive: summary.balanceChange > 0,
    },
    {
      title: 'Total Credits',
      value: `$${summary.totalCredits.toLocaleString()}`,
      change: summary.creditsChange,
      isPositive: summary.creditsChange > 0,
    },
    {
      title: 'Total Debits',
      value: `$${summary.totalDebits.toLocaleString()}`,
      change: summary.debitsChange,
      isPositive: summary.debitsChange > 0,
    },
    {
      title: 'Transactions',
      value: summary.transactionCount.toString(),
      change: summary.transactionChange,
      isPositive: summary.transactionChange > 0,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className="bg-[#34616f] border-[#34616f] hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-white/80">{card.title}</h3>
                <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-white/10">
                  <MoreHorizontal className="w-4 h-4 text-white/60" />
                </Button>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">{card.value}</p>
                <div className="flex items-center space-x-1">
                  {card.isPositive ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-400" />
                  )}
                  <span className={`text-xs font-medium ${
                    card.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {card.change > 0 ? '+' : ''}{card.change}%
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
