'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface MobileSidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  activeItem?: string;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
];

export function MobileSidebar({ isOpen, onOpenChange, activeItem = 'dashboard' }: MobileSidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-64 p-0 bg-white">
        <nav className="p-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = item.id === activeItem;
            
            return (
              <button
                key={item.id}
                className={cn(
                  "w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors",
                  isActive
                    ? "bg-[#4B8B9F] text-white font-medium"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
                onClick={() => onOpenChange(false)}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
