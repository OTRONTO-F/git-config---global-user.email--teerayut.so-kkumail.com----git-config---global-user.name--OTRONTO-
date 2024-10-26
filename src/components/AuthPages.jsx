import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AuthPages = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const LoginForm = () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">เข้าสู่ระบบ</CardTitle>
        <CardDescription className="text-center">
          กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">อีเมล</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">รหัสผ่าน</Label>
            <Input 
              id="password"
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full">เข้าสู่ระบบ</Button>
          <p className="text-center text-sm text-gray-600">
            ยังไม่มีบัญชี?{' '}
            <Button 
              variant="link" 
              className="p-0"
              onClick={() => setIsLogin(false)}
            >
              สมัครสมาชิก
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );

  const RegisterForm = () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">สมัครสมาชิก</CardTitle>
        <CardDescription className="text-center">
          กรุณากรอกข้อมูลเพื่อสร้างบัญชีใหม่
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">ชื่อผู้ใช้</Label>
            <Input 
              id="username"
              type="text" 
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">อีเมล</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">รหัสผ่าน</Label>
            <Input 
              id="password"
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</Label>
            <Input 
              id="confirmPassword"
              type="password" 
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full">สมัครสมาชิก</Button>
          <p className="text-center text-sm text-gray-600">
            มีบัญชีอยู่แล้ว?{' '}
            <Button 
              variant="link" 
              className="p-0"
              onClick={() => setIsLogin(true)}
            >
              เข้าสู่ระบบ
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPages;