import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowLeft, Mail, Phone, Lock, User } from 'lucide-react'; 

const AuthPages = ({ onBack }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Implement Google Sign In logic here
    console.log('Google Sign In');
    setIsLoading(false);
  };

  const handlePhoneSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement Phone Sign In logic here
    console.log('Phone Sign In:', phoneNumber);
    setIsLoading(false);
    if (phoneNumber) {
      alert('รหัส OTP ถูกส่งไปที่เบอร์โทรศัพท์ของคุณแล้ว');
      navigate('/profile');
    } else {
      alert('กรุณากรอกเบอร์โทรศัพท์');
    }
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement Email Sign In logic here
    console.log('Email Sign In:', email, password);
    setIsLoading(false);
    if (email && password) {
      navigate('/profile'); // เปลี่ยนเส้นทางไปที่ ProfilePage
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement Register logic here
    console.log('Register:', name, email, password);
    setIsLoading(false);
  };

  const LoginForm = () => (
    <>
      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="email">อีเมล</TabsTrigger>
          <TabsTrigger value="phone">เบอร์โทรศัพท์</TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  type="email"
                  placeholder="อีเมล"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.value)}
                  required
                />
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.value)}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="phone">
          <form onSubmit={handlePhoneSignIn} className="space-y-4">
            <div className="relative">
              <Phone className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="tel"
                placeholder="เบอร์โทรศัพท์"
                className="pl-10"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'กำลังส่งรหัส OTP...' : 'รับรหัส OTP'}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <div className="mt-6 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">หรือ</span>
          </div>
        </div>

        <Button 
          onClick={handleGoogleSignIn}
          variant="outline" 
          className="w-full hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 flex items-center justify-center"
          disabled={isLoading}
        >
          <div className="flex items-center justify-center w-full">
            <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            <span className="flex-shrink-0">
              {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบด้วย Google'}
            </span>
          </div>
        </Button>
      </div>
    </>
  );

  const RegisterForm = () => (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="ชื่อ-นามสกุล"
            className="pl-10"
            value={name}
            onChange={(e) => setName(e.value)}
            required
          />
        </div>
        <div className="relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="email"
            placeholder="อีเมล"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.value)}
            required
          />
        </div>
        <div className="relative">
          <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="password"
            placeholder="รหัสผ่าน"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.value)}
            required
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
      </Button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900 flex items-center gap-2 rounded-lg hover:bg-white/50 transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>กลับไปหน้าแรก</span>
      </button>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {isRegister ? 'สมัครสมาชิก Love Alam' : 'ยินดีต้อนรับสู่ Love Alam'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isRegister ? <RegisterForm /> : <LoginForm />}

          <p className="mt-4 text-center text-sm text-gray-600">
            {isRegister ? 'มีบัญชีอยู่แล้ว?' : 'ยังไม่มีบัญชี?'}{' '}
            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setEmail('');
                setPassword('');
                setName('');
                setPhoneNumber('');
              }}
              className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-300"
            >
              {isRegister ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPages;