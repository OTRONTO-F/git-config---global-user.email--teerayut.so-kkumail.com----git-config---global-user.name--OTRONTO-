import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Camera, ChevronLeft, LogOut } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ProfilePage = ({ onBack, onLogout, onProfileComplete, userData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    location: '',
    occupation: '',
    about: '',
    interests: '',
    lookingFor: '',
    photoUrl: null
  });

  useEffect(() => {
    if (userData) {
      setProfile(prevProfile => ({
        ...prevProfile,
        ...userData
      }));
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSelectChange = (value, name) => {
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('รูปภาพต้องมีขนาดไม่เกิน 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({
          ...prev,
          photoUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateProfile = () => {
    if (!profile.firstName.trim()) return 'กรุณากรอกชื่อ';
    if (!profile.lastName.trim()) return 'กรุณากรอกนามสกุล';
    if (!profile.age || profile.age < 18) return 'อายุต้องมากกว่า 18 ปี';
    if (!profile.gender) return 'กรุณาเลือกเพศ';
    if (!profile.location.trim()) return 'กรุณากรอกที่อยู่';
    return '';
  };

  const handleSubmit = async () => {
    const validationError = validateProfile();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onProfileComplete(profile);
    } catch (err) {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="container mx-auto p-4 max-w-2xl relative">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2 hover:bg-white/50 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
            กลับ
          </Button>
          <Button 
            variant="ghost" 
            onClick={onLogout}
            className="flex items-center gap-2 text-destructive hover:bg-red-50 transition-all duration-300"
          >
            <LogOut className="h-4 w-4" />
            ออกจากระบบ
          </Button>
        </div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
          <Card className="shadow-xl backdrop-blur-sm bg-white/90 border-none relative transition-all duration-300 hover:shadow-pink-100/50">
            <CardHeader className="bg-gradient-to-r from-pink-500/10 to-purple-500/10">
              <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                โปรไฟล์ของฉัน
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {error && (
                <Alert variant="destructive" className="animate-shake">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-pink-200/50">
                  {profile.photoUrl ? (
                    <img 
                      src={profile.photoUrl} 
                      alt="Profile" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <Camera className="w-12 h-12 text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-500" />
                  )}
                </div>
                <Button 
                  variant="outline" 
                  className="relative bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg"
                >
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handlePhotoUpload}
                    accept="image/*"
                  />
                  อัพโหลดรูปภาพ
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">ชื่อ *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                    placeholder="ชื่อ"
                    className="transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">นามสกุล *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleInputChange}
                    placeholder="นามสกุล"
                    className="transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium">อายุ *</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={profile.age}
                    onChange={handleInputChange}
                    placeholder="อายุ"
                    min="18"
                    max="100"
                    className="transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm font-medium">เพศ *</Label>
                  <Select 
                    name="gender" 
                    value={profile.gender} 
                    onValueChange={(value) => handleSelectChange(value, 'gender')}
                  >
                    <SelectTrigger className="transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500">
                      <SelectValue placeholder="เลือกเพศ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">ชาย</SelectItem>
                      <SelectItem value="female">หญิง</SelectItem>
                      <SelectItem value="other">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Fields below are generated similarly with matching styles */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">ที่อยู่ *</Label>
                <Input
                  id="location"
                  name="location"
                  value={profile.location}
                  onChange={handleInputChange}
                  placeholder="จังหวัด/เมือง"
                  className="transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation" className="text-sm font-medium">อาชีพ</Label>
                <Input
                  id="occupation"
                  name="occupation"
                  value={profile.occupation}
                  onChange={handleInputChange}
                  placeholder="อาชีพของคุณ"
                  className="transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about" className="text-sm font-medium">เกี่ยวกับฉัน</Label>
                <Textarea
                  id="about"
                  name="about"
                  value={profile.about}
                  onChange={handleInputChange}
                  placeholder="บอกเล่าเกี่ยวกับตัวคุณ"
                  rows={4}
                  className="resize-none transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests" className="text-sm font-medium">ความสนใจ</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  value={profile.interests}
                  onChange={handleInputChange}
                  placeholder="งานอดิเรก, กิจกรรมที่ชอบ"
                  rows={3}
                  className="resize-none transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lookingFor" className="text-sm font-medium">กำลังมองหา</Label>
                <Textarea
                  id="lookingFor"
                  name="lookingFor"
                  value={profile.lookingFor}
                  onChange={handleInputChange}
                  placeholder="คุณกำลังมองหาคนแบบไหน"
                  rows={3}
                  className="resize-none transition-all duration-300 hover:border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="min-w-[120px] bg-gradient-to-r from-pink-500 to-purple-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/50"
                >
                  {isSubmitting ? 'กำลังบันทึก...' : 'บันทึก'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;