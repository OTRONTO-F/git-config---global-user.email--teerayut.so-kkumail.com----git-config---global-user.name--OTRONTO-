import React, { useState, useEffect, useCallback } from 'react';
import { Heart, X, MessageCircle, Shield, Sparkles, LogOut, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthPages from './components/AuthPages';
import RegisterProfilePage from './components/RegisterProfilePage';
import AppSelectPage from './components/AppSelectPage';
import InterestsSelectionPage from './components/InterestsSelectionPage';
import profileImage from './assets/images/profile.jpg';

// Navbar Component
const Navbar = ({ onAuthClick, isAuthenticated, onLogout, showBack, onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md' : 'bg-white/70 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {showBack && (
              <button 
                onClick={onBack}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <button className="flex items-center group">
              <Heart className="w-8 h-8 text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                Love Alam
              </span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="w-4 h-4 mr-2" />
                ออกจากระบบ
              </button>
            ) : (
              <>
                <button 
                  onClick={() => onAuthClick('login')} 
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 hover:bg-pink-50 rounded-lg"
                >
                  เข้าสู่ระบบ
                </button>
                <button 
                  onClick={() => onAuthClick('register')}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 hover:scale-105"
                >
                  สมัครสมาชิก
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-${color}-50 hover:to-transparent`}>
    <CardContent className="p-6">
      <div className={`mb-4 p-3 bg-${color}-50 rounded-full w-fit group-hover:bg-${color}-100 transition-all duration-300 group-hover:scale-110`}>
        <Icon className={`w-6 h-6 text-${color}-500 group-hover:animate-bounce`} />
      </div>
      <h3 className={`text-xl font-semibold mb-2 group-hover:text-${color}-600 transition-colors duration-300`}>{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </CardContent>
  </Card>
);

// Profile Card Component
const ProfileCard = ({ profile, onLike, onPass }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-[3/4]">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={profile.image}
          alt={profile.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 relative">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">
          {profile.name}, {profile.age}
        </h3>
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {profile.bio}
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={onPass}
            className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={onLike}
            className="p-4 rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-200"
          >
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

// HomePage Component
const HomePage = ({ onAuthClick }) => {
  const features = [
    {
      icon: Sparkles,
      title: 'การจับคู่อัจฉริยะ',
      description: 'ระบบ AI ที่เข้าใจความต้องการและรสนิยมของคุณอย่างลึกซึ้ง',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'ความปลอดภัย',
      description: 'การยืนยันตัวตนและการปกป้องข้อมูลส่วนตัวด้วยระบบความปลอดภัยระดับสูง',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'แชทแบบเรียลไทม์',
      description: 'พูดคุยกับคู่ที่สนใจได้ทันทีด้วยระบบแชทที่ใช้งานง่าย',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar onAuthClick={onAuthClick} />

      {/* Hero Section with improved header */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-purple-100/20 animate-pulse" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative z-10">
              <span className="relative inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient pb-2">
                ค้นหารักแท้ของคุณ
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </span>
            </h1>
            <div className="absolute -inset-x-6 -inset-y-4 bg-white/50 backdrop-blur-lg -z-10 rounded-xl"></div>
          </div>
          <p className="text-xl text-gray-600 mb-8 relative z-10">
            เริ่มต้นค้นหาคู่ที่ใช่สำหรับคุณ ด้วยระบบจับคู่อัจฉริยะของเรา
          </p>
          <button 
            onClick={() => onAuthClick('register')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-pink-200/50 hover:scale-105 hover:-translate-y-1"
          >
            เริ่มต้นใช้งาน
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Sample Profile Section with improved header */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                <span className="relative inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  พบเจอผู้คนที่น่าสนใจ
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                </span>
              </h2>
              <div className="absolute -inset-x-6 -inset-y-4 bg-white/50 backdrop-blur-lg -z-10 rounded-xl"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 relative z-10">
              ค้นพบโปรไฟล์ที่น่าสนใจมากมาย พร้อมระบบการจับคู่ที่ชาญฉลาด
              ช่วยให้คุณได้พบกับคนที่ใช่
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Profile Card Column */}
            <div className="md:col-span-1">
              <ProfileCard
                profile={{
                  name: "มินนี่",
                  age: 25,
                  bio: "ชอบท่องเที่ยว ถ่ายรูป และทำอาหาร 📸✈️🍳\nกำลังมองหาคนที่มีความฝันและพร้อมที่จะเติบโตไปด้วยกัน",
                  image: profileImage
                }}
                onLike={() => onAuthClick('register')}
                onPass={() => onAuthClick('register')}
              />
            </div>

            {/* Features List Column */}
            <div className="md:col-span-1 space-y-6 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">ระบบการจับคู่ที่แม่นยำ</h3>
                  <p className="text-gray-600">
                    AI ของเราจะวิเคราะห์ความชอบและไลฟ์สไตล์ เพื่อแนะนำคนที่เหมาะกับคุณ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">การยืนยันตัวตนที่ปลอดภัย</h3>
                  <p className="text-gray-600">
                    ทุกโปรไฟล์ผ่านการตรวจสอบเพื่อความปลอดภัยของผู้ใช้งาน
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">การแชทที่ราบรื่น</h3>
                  <p className="text-gray-600">
                    พูดคุยกันได้ทันทีเมื่อทั้งสองฝ่ายสนใจกัน พร้อมฟีเจอร์ที่หลากหลาย
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Column */}
            <div className="md:col-span-1 bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">สถิติของเรา</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-500 mb-2">150,000+</div>
                  <div className="text-gray-600">ผู้ใช้งานที่ลงทะเบียน</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-500 mb-2">85%</div>
                  <div className="text-gray-600">อัตราการจับคู่สำเร็จ</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-500 mb-2">10,000+</div>
                  <div className="text-gray-600">คู่รักที่พบกันผ่านแอพ</div>
                </div>
              </div>

              <button 
                onClick={() => onAuthClick('register')}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 hover:scale-105"
              >
                เริ่มต้นใช้งานเลย
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">น้ำหวาน</h4>
                  <p className="text-gray-500 text-sm">กรุงเทพฯ</p>
                </div>
              </div>
              <p className="text-gray-600">
                "เจอคนที่ใช่ผ่านแอพนี้ค่ะ ตอนนี้คบกันมา 1 ปีแล้ว ระบบจับคู่แม่นมาก"
              </p>
            </Card>

            <Card className="bg-white p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">ภูมิ</h4>
                  <p className="text-gray-500 text-sm">เชียงใหม่</p>
                </div>
              </div>
              <p className="text-gray-600">
                "ชอบระบบการคัดกรองผู้ใช้ ทำให้รู้สึกปลอดภัยและมั่นใจในการใช้งาน"
              </p>
            </Card>

            <Card className="bg-white p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">มิ้นท์</h4>
                  <p className="text-gray-500 text-sm">ภูเก็ต</p>
                </div>
              </div>
              <p className="text-gray-600">
                "แอพใช้งานง่าย UI สวย แถมมีคนที่น่าสนใจเยอะมาก แนะนำเลยค่ะ"
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [authMode, setAuthMode] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showNotification = useCallback((message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  }, []);

  const handleNavigation = (page, mode = 'login') => {
    setCurrentPage(page);
    if (page === 'auth') {
      setAuthMode(mode);
    }
  };

  const handleLogin = useCallback((userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    setCurrentPage('profile');
    showNotification('เข้าสู่ระบบสำเร็จ');
  }, [showNotification]);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage('home');
    showNotification('ออกจากระบบสำเร็จ');
  }, [showNotification]);

  const handleProfileComplete = useCallback((profileData) => {
    setCurrentUser(prev => ({ ...prev, ...profileData }));
    setCurrentPage('interests'); // เปลี่ยนจาก 'chat' เป็น 'interests'
  }, []);

  const handleInterestsComplete = useCallback((interestsData) => {
    setCurrentUser(prev => ({
      ...prev,
      interests: interestsData
    }));
    setCurrentPage('chat');
    showNotification('อัพเดทโปรไฟล์สำเร็จ');
  }, []);

  return (
    <>
      {showAlert && (
        <Alert className="fixed top-4 right-4 z-50 bg-white shadow-lg">
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}

      {currentPage === 'home' && (
        <HomePage onAuthClick={(mode) => handleNavigation('auth', mode)} />
      )}
      
      {currentPage === 'auth' && (
        <AuthPages 
          onBack={() => handleNavigation('home')}
          onLogin={handleLogin}
          isRegister={authMode === 'register'}
          setIsRegister={(value) => setAuthMode(value ? 'register' : 'login')}
        />
      )}
      
      {currentPage === 'profile' && isAuthenticated && (
        <RegisterProfilePage 
          onBack={() => handleNavigation('home')}
          onLogout={handleLogout}
          onProfileComplete={handleProfileComplete}
          userData={currentUser}
        />
      )}

      {currentPage === 'interests' && isAuthenticated && (
        <InterestsSelectionPage
          onBack={() => handleNavigation('profile')}
          onComplete={handleInterestsComplete}
          initialInterests={currentUser?.interests}
        />
      )}
      
      {currentPage === 'chat' && isAuthenticated && (
        <AppSelectPage
          onBack={() => handleNavigation('profile')}
          userData={currentUser}
        />
      )}
    </>
  );
};

export default App;