// src/components/BottomNavigation.jsx
import React from 'react';
import { MessageCircle, Users, UserCircle, Settings } from 'lucide-react';

const BottomNavigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'nearby', icon: Users, label: 'ค้นหา' },
    { id: 'chat', icon: MessageCircle, label: 'แชท' },
    { id: 'profile', icon: UserCircle, label: 'โปรไฟล์' },
    { id: 'settings', icon: Settings, label: 'ตั้งค่า' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-md mx-auto flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center p-2 flex-1 ${
              currentPage === item.id
                ? 'text-pink-500'
                : 'text-gray-500'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;