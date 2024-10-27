import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, X, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import AuthPages from './components/AuthPages';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Enhanced Navbar with backdrop blur and smooth transitions */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-gray-100 fixed w-full top-0 z-50 transition-all duration-300 hover:bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center group">
              <Heart className="w-8 h-8 text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                Love Finder
              </span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/auth" className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 hover:bg-pink-50 rounded-lg">
                เข้าสู่ระบบ
              </Link>
              <Link to="/auth" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 hover:scale-105">
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with floating animations */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-purple-100/20 animate-pulse" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            ค้นหารักแท้ของคุณ
          </h1>
          <p className="text-xl text-gray-600 mb-8 transition-all duration-300 hover:scale-105">
            เริ่มต้นค้นหาคู่ที่ใช่สำหรับคุณ ด้วยระบบจับคู่อัจฉริยะของเรา
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-pink-200/50 hover:scale-105 hover:-translate-y-1">
            เริ่มต้นใช้งาน
          </button>
        </div>
      </section>

      {/* Enhanced Features Section with hover effects */}
      <section className="py-24 bg-white/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-pink-50 hover:to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-pink-50 rounded-full w-fit group-hover:bg-pink-100 transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-6 h-6 text-pink-500 group-hover:animate-spin-slow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">การจับคู่อัจฉริยะ</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  ระบบ AI ที่เข้าใจความต้องการและรสนิยมของคุณอย่างลึกซึ้ง
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-purple-50 hover:to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-purple-50 rounded-full w-fit group-hover:bg-purple-100 transition-all duration-300 group-hover:scale-110">
                  <Shield className="w-6 h-6 text-purple-500 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">ความปลอดภัย</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  การยืนยันตัวตนและการปกป้องข้อมูลส่วนตัวด้วยระบบความปลอดภัยระดับสูง
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-pink-50 hover:to-transparent">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-pink-50 rounded-full w-fit group-hover:bg-pink-100 transition-all duration-300 group-hover:scale-110">
                  <MessageCircle className="w-6 h-6 text-pink-500 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">แชทแบบเรียลไทม์</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  พูดคุยกับคู่ที่สนใจได้ทันทีด้วยระบบแชทที่ใช้งานง่าย
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Profile Card with smooth interactions */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src="/api/placeholder/400/500"
                alt="Profile"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6 relative">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">มินนี่, 25</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                ชอบท่องเที่ยว ถ่ายรูป และทำอาหาร
              </p>
              <div className="flex justify-center space-x-4">
                <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-4 rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-200">
                  <Heart className="w-6 h-6 text-white" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPages />} />
      </Routes>
    </Router>
  );
};

// Add these custom animations to your CSS/Tailwind config
const customStyles = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animate-spin-slow {
  animation: spin 3s linear infinite;
}
`;

export default App;