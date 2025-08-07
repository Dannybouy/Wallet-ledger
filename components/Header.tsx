import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, SearchIcon } from "lucide-react";
import Image from "next/image";

import { Icons } from "./Icons";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section - Mobile Menu + Logo */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className=""
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo */}
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/logoIcon.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold italic text-[#437D8E] tracking-tight">
              FinTrack
            </span>
          </div>
        </div>

        {/* Right Section - User Avatar */}
        <div className="flex items-center gap-2">
          <SearchIcon className="w-6 h-6 text-[#1B2528]" />
          <Button variant="ghost" className="w-6 h-6">
            <Icons.appGrid />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/avatar-img.png" width={80} height={80} />
            <AvatarFallback className="bg-gray-100">
              <span className="text-gray-600 text-sm">U</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
