// src/components/AppSelectPage.jsx
import React, { useState } from 'react';
import NearbyUsers from './ui/NearbyUsers';
import Onboarding from './ui/Onboarding';
import BottomNavigation from './ui/BottomNavigation';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';

const AppSelectPage = () => {
  const [currentPage, setCurrentPage] = useState('nearby');
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Onboarding isOpen={showOnboarding} onClose={() => setShowOnboarding(false)} />
      
      {currentPage === 'nearby' && <NearbyUsers />}
      {currentPage === 'chat' && <ChatPage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'settings' && <SettingsPage />}
      
      <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
};

export default AppSelectPage;