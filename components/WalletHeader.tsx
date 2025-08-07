import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User } from "@/types/dashboard";
import { ChevronDown, MoreHorizontal, Share } from "lucide-react";
import { Icons } from "./Icons";

interface WalletHeaderProps {
  users: User[];
}

export function WalletHeader({ users }: WalletHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Title and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl lg:text-2xl font-bold text-[#1B2528]">
              Wallet Ledger
            </h1>
            <Icons.caretDown size={12} />
          </div>
          <Badge
            variant="default"
            className="bg-[#34616F]/10 text-[#1B2528] font-medium hover:bg-green-100 h-7"
          >
            <div className="w-2 h-2 bg-[#08712E] rounded-full mr-2"></div>
            Active
          </Badge>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="default"
            className="text-black bg-[#4B8B9F] rounded-full border-none hover:bg-[#4B8B9F] hover:text-white"
          >
            Share
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-2xl border-2"
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* User Avatars */}
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
          {users.map((user) => (
            <Avatar key={user.id} className="w-8 h-8 border-2 border-white">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback className="text-xs">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {users
            .slice(0, 3)
            .map((u) => u.name)
            .join(", ")}{" "}
          +12 others
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-3">
          <button className="py-2 px-6 border-b-2 border-[#4B8B9F] text-[#4B8B9F] font-medium text-sm">
            Overview
          </button>
          <button className="py-2 px-6 text-gray-500 hover:text-gray-700 font-medium text-sm">
            Transactions
          </button>
        </nav>
      </div>
    </div>
  );
}
