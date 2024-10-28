import React, { useState } from 'react';
import { MapPin, MessageCircle, User, Settings, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

// Onboarding Component
const Onboarding = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    {
      title: "ยินดีต้อนรับสู่ Love Alam",
      content: "แอพพลิเคชั่นหาคู่ที่จะช่วยให้คุณค้นพบความรักที่แท้จริง"
    },
    {
      title: "การจับคู่อัจฉริยะ",
      content: "เราใช้ AI เพื่อช่วยคุณค้นหาคู่ที่เหมาะสมที่สุด โดยวิเคราะห์จากความชอบและรูปแบบการใช้ชีวิตของคุณ"
    },
    {
      title: "ความปลอดภัยมาก่อน",
      content: "เราให้ความสำคัญกับความปลอดภัยของข้อมูลส่วนตัวของคุณ ทุกการติดต่อสื่อสารถูกเข้ารหัสและปกป้อง"
    },
    {
      title: "ข้อตกลงการใช้งาน",
      content: (
        <ScrollArea className="h-60 w-full rounded-md border p-4">
          <div className="space-y-4">
            <h3 className="font-semibold">1. การใช้งานทั่วไป</h3>
            <p>ผู้ใช้ต้องมีอายุ 18 ปีขึ้นไป</p>
            <p>ห้ามใช้ข้อมูลเท็จหรือหลอกลวง</p>
            
            <h3 className="font-semibold">2. ความเป็นส่วนตัว</h3>
            <p>เราจะปกป้องข้อมูลส่วนตัวของคุณตามนโยบายความเป็นส่วนตัว</p>
            <p>คุณสามารถควบคุมข้อมูลที่แสดงในโปรไฟล์ได้</p>
            
            <h3 className="font-semibold">3. การใช้งานที่ไม่เหมาะสม</h3>
            <p>ห้ามใช้แอพในทางที่ผิดกฎหมายหรือละเมิดสิทธิผู้อื่น</p>
            <p>ห้ามส่งเนื้อหาที่ไม่เหมาะสมหรือก่อกวนผู้อื่น</p>
            
            <h3 className="font-semibold">4. การยกเลิกบัญชี</h3>
            <p>คุณสามารถยกเลิกบัญชีได้ทุกเมื่อ</p>
            <p>เราจะลบข้อมูลของคุณตามนโยบายการลบข้อมูล</p>
          </div>
        </ScrollArea>
      )
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {steps[currentStep - 1].title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {steps[currentStep - 1].content}
        </div>

        <div className="flex justify-center gap-2 my-4">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                idx + 1 <= currentStep ? 'bg-pink-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <DialogFooter className="flex gap-2">
          {currentStep < totalSteps ? (
            <Button
              className="w-full"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              ถัดไป
            </Button>
          ) : (
            <Button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500"
              onClick={onClose}
            >
              ยอมรับและเริ่มต้นใช้งาน
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Bottom Navigation Component
const BottomNavigation = ({ currentPage, onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        <button
          onClick={() => onNavigate('nearby')}
          className={`flex flex-col items-center space-y-1 ${
            currentPage === 'nearby' ? 'text-pink-500' : 'text-gray-500'
          }`}
        >
          <MapPin className="h-6 w-6" />
          <span className="text-xs">ใกล้ตัว</span>
        </button>

        <button
          onClick={() => onNavigate('chat')}
          className={`flex flex-col items-center space-y-1 ${
            currentPage === 'chat' ? 'text-pink-500' : 'text-gray-500'
          }`}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs">แชท</span>
        </button>

        <button
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center space-y-1 ${
            currentPage === 'profile' ? 'text-pink-500' : 'text-gray-500'
          }`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs">โปรไฟล์</span>
        </button>

        <button
          onClick={() => onNavigate('settings')}
          className={`flex flex-col items-center space-y-1 ${
            currentPage === 'settings' ? 'text-pink-500' : 'text-gray-500'
          }`}
        >
          <Settings className="h-6 w-6" />
          <span className="text-xs">ตั้งค่า</span>
        </button>
      </div>
    </div>
  );
};

// Nearby Users Component
const NearbyUsers = () => {
  const [nearbyUsers] = useState([
    { id: 1, name: 'มินนี่', age: 25, distance: 120, interests: ['ท่องเที่ยว', 'ถ่ายรูป'] },
    { id: 2, name: 'แนน', age: 23, distance: 80, interests: ['อ่านหนังสือ', 'ดูหนัง'] },
    { id: 3, name: 'พลอย', age: 27, distance: 150, interests: ['ทำอาหาร', 'โยคะ'] },
  ]);

  return (
    <div className="max-w-md mx-auto p-4 mb-16">
      <h2 className="text-xl font-semibold mb-4">ผู้ใช้ใกล้ตัวคุณ</h2>
      <div className="space-y-4">
        {nearbyUsers.map(user => (
          <Card key={user.id} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <img
                src="/api/placeholder/56/56"
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{user.name}, {user.age}</h3>
                <p className="text-sm text-gray-500">ห่างจากคุณ {user.distance}m</p>
                <div className="flex gap-2 mt-2">
                  {user.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Main ChatSelectPage Component
const ChatSelectPage = () => {
  const [currentPage, setCurrentPage] = useState('nearby');
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Onboarding isOpen={showOnboarding} onClose={() => setShowOnboarding(false)} />
      
      {currentPage === 'nearby' && <NearbyUsers />}
      
      <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
};

export default ChatSelectPage;