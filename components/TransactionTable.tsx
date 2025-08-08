"use client";

import { cn } from "@/lib/utils";
import { SortDirection, SortField, Transaction } from "@/types/dashboard";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";

interface TransactionTableProps {
  transactions: Transaction[];
  loading?: boolean;
}

export function TransactionTable({
  transactions,
  loading = false,
}: TransactionTableProps) {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (sortField === "date") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortField === "amount") {
        aValue = Math.abs(aValue);
        bValue = Math.abs(bValue);
      }

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [transactions, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const formatAmount = (amount: number) => {
    const absAmount = Math.abs(amount);
    return amount < 0 ? `-$${absAmount}` : `$${absAmount}`;
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1 table-auto">
          <thead className="">
            <tr>
              {[
                { key: "date" as SortField, label: "Date" },
                { key: "remark" as SortField, label: "Remark" },
                { key: "amount" as SortField, label: "Amount" },
                { key: "currency" as SortField, label: "Currency" },
                { key: "type" as SortField, label: "Type" },
              ].map(({ key, label }) => (
                <th
                  key={key}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors border-b-2"
                  onClick={() => handleSort(key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{label}</span>
                    <SortIcon field={key} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedTransactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 transition-colors border-b last:border-b-0 text-left"
              >
                <td className="w-[60%] py-2 whitespace-nowrap text-sm text-gray-900 border-b-2 text-left">
                  {transaction.date}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-b-2 text-left">
                  {transaction.remark}
                </td>
                <td
                  className={cn(
                    "px-4 py-2 whitespace-nowrap text-sm font-medium border-b-2"
                  )}
                >
                  {formatAmount(transaction.amount)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-b-2">
                  {transaction.currency}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b-2">
                  <div className="flex items-center gap-2 bg-[#346F6F]/10 text-[#1B2528] rounded-full w-fit px-3 py-1.5">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        transaction.type === "Credit"
                          ? "bg-green-500"
                          : "bg-red-500"
                      )}
                    ></div>
                    <span className="text-sm text-gray-900 font-medium">
                      {transaction.type}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedTransactions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No transactions found</p>
        </div>
      )}
    </div>
  );
}
