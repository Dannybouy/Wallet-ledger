import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Share, ChevronDown } from 'lucide-react';
import { User } from '@/types/dashboard';

interface WalletHeaderProps {
  users: User[];
  additionalUsersCount: number;
}

export function WalletHeader({ users, additionalUsersCount }: WalletHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Title and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-semibold text-gray-900">Wallet Ledger</h1>
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Active
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-[#4B8B9F] border-[#4B8B9F] hover:bg-[#4B8B9F] hover:text-white">
            Share
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* User Avatars */}
      <div className="flex items-center space-x-4">
        <div className="flex -space-x-2">
          {users.map((user) => (
            <Avatar key={user.id} className="w-8 h-8 border-2 border-white">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-xs">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
          {additionalUsersCount > 0 && (
            <div className="w-8 h-8 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">+{additionalUsersCount}</span>
            </div>
          )}
        </div>
        <span className="text-sm text-gray-600">
          {users.map(u => u.name).join(', ')} +{additionalUsersCount} others
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button className="py-2 px-1 border-b-2 border-[#4B8B9F] text-[#4B8B9F] font-medium text-sm">
            Overview
          </button>
          <button className="py-2 px-1 text-gray-500 hover:text-gray-700 font-medium text-sm">
            Transactions
          </button>
        </nav>
      </div>
    </div>
  );
}
