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
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
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
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
