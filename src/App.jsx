import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, X, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import AuthPages from './components/AuthPages';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <Heart className="w-8 h-8 text-pink-500" />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Love Finder
              </span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/auth" className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
                เข้าสู่ระบบ
              </Link>
              <Link to="/auth" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ค้นหารักแท้ของคุณ
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            เริ่มต้นค้นหาคู่ที่ใช่สำหรับคุณ ด้วยระบบจับคู่อัจฉริยะของเรา
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
            เริ่มต้นใช้งาน
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-pink-50 rounded-full w-fit group-hover:bg-pink-100 transition-colors">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">การจับคู่อัจฉริยะ</h3>
                <p className="text-gray-600">
                  ระบบ AI ที่เข้าใจความต้องการและรสนิยมของคุณอย่างลึกซึ้ง
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-purple-50 rounded-full w-fit group-hover:bg-purple-100 transition-colors">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ความปลอดภัย</h3>
                <p className="text-gray-600">
                  การยืนยันตัวตนและการปกป้องข้อมูลส่วนตัวด้วยระบบความปลอดภัยระดับสูง
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-pink-50 rounded-full w-fit group-hover:bg-pink-100 transition-colors">
                  <MessageCircle className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">แชทแบบเรียลไทม์</h3>
                <p className="text-gray-600">
                  พูดคุยกับคู่ที่สนใจได้ทันทีด้วยระบบแชทที่ใช้งานง่าย
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profile Card Example */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="/api/placeholder/400/500"
                alt="Profile"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">มินนี่, 25</h3>
              <p className="text-gray-600 mb-6">
                ชอบท่องเที่ยว ถ่ายรูป และทำอาหาร
              </p>
              <div className="flex justify-center space-x-4">
                <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-4 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors">
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

export default App;