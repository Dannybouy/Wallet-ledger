"use client";

import { Header } from "@/components/Header";
import { MobileSidebar } from "@/components/MobileSidebar";
import { Sidebar } from "@/components/Sidebar";
import { SummaryCards } from "@/components/SummaryCards";
import { TransactionTable } from "@/components/TransactionTable";
import { WalletHeader } from "@/components/WalletHeader";
import { mockSummary, mockTransactions, mockUsers } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { DashboardSummary, Transaction } from "@/types/dashboard";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // <-- Add this

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setTransactions(mockTransactions);
      setSummary(mockSummary);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(true);
    } else {
      setIsSidebarOpen((prev) => !prev);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onMenuClick={handleMenuClick} />
      <div className="flex items-start">
        {/* Desktop Sidebar */}
        {isSidebarOpen && (
          <div
            className={cn(
              "hidden md:block transition-all duration-300 ease-in-out"
            )}
          >
            <Sidebar activeItem="dashboard" />
          </div>
        )}

        {/* Mobile Sidebar */}
        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onOpenChange={setIsMobileSidebarOpen}
          activeItem="dashboard"
        />

        <main
          className={`flex-1 p-4 lg:p-6 space-y-4 md:space-y-8 overflow-x-hidden ${
            isSidebarOpen ? "" : "md:ml-0"
          }`}
        >
          <WalletHeader users={mockUsers} />

          {loading ? (
            <div className="space-y-4 md:space-y-6">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-32"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-32 bg-gray-200 rounded animate-pulse"
                  ></div>
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
