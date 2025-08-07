import { cn } from '@/lib/utils';

interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
];

export function Sidebar({ activeItem = 'dashboard' }: SidebarProps) {
  return (
    <aside className="w-64 bg-white min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = item.id === activeItem;
          
          return (
            <button
              key={item.id}
              className={cn(
                "w-full flex items-center px-4 py-2 rounded-full text-left transition-colors",
                isActive
                  ? "bg-[#3A6C7B]/20 text-[#3A6C7B] font-medium"
                  : "text-[#1B2528] hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
