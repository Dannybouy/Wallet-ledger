'use client';

import { useState } from 'react';
import { Search, Menu, Grid3X3, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchClick = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!searchValue) {
      setIsSearchExpanded(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section - Mobile Menu + Logo */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4B8B9F] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">F</span>
            </div>
            <span className="text-xl font-semibold text-[#4B8B9F]">FinTrack</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 flex justify-center max-w-md mx-4 md:mx-8">
          <div className="relative">
            {!isSearchExpanded ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSearchClick}
                className="w-10 h-10 rounded-full hover:bg-gray-100"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            ) : (
              <div className="relative search-expand">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onBlur={handleSearchBlur}
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors w-80"
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Section - User Avatar */}
        <div className="flex items-center">
          <Button variant="ghost" size="icon">
            <Grid3X3 className="w-5 h-5 text-gray-600" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-gray-100">
              <span className="text-gray-600 text-sm">U</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
