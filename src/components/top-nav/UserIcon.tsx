import { User } from 'lucide-react';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/popover";

const UserIcon: React.FC = () => {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center cursor-pointer">
            <User />
            <span className="ml-2">Zerovapor</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            <a href="/user/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
            <a href="/auth/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserIcon;