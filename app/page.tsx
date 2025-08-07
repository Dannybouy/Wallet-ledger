'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { MobileSidebar } from '@/components/MobileSidebar';
import { WalletHeader } from '@/components/WalletHeader';
import { SummaryCards } from '@/components/SummaryCards';
import { TransactionTable } from '@/components/TransactionTable';
import { mockTransactions, mockSummary, mockUsers } from '@/data/mockData';
import { Transaction, DashboardSummary } from '@/types/dashboard';

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTransactions(mockTransactions);
      setSummary(mockSummary);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={handleMobileMenuClick} />
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar activeItem="dashboard" />
        </div>
        
        {/* Mobile Sidebar */}
        <MobileSidebar 
          isOpen={isMobileSidebarOpen}
          onOpenChange={setIsMobileSidebarOpen}
          activeItem="dashboard"
        />
        
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <WalletHeader 
            users={mockUsers} 
            additionalUsersCount={12} 
          />
          
          {loading ? (
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-32"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
              <div className="h-96 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ) : (
            <>
              {summary && <SummaryCards summary={summary} />}
              <TransactionTable transactions={transactions} loading={loading} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
