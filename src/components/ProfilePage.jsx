import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Camera } from 'lucide-react';

const ProfilePage = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value, name) => {
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    // Placeholder for photo upload logic
    console.log('Photo upload:', e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">โปรไฟล์ของฉัน</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* รูปโปรไฟล์ */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center relative">
              {profile.photoUrl ? (
                <img 
                  src={profile.photoUrl} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <Camera className="w-12 h-12 text-gray-400" />
              )}
            </div>
            <Button variant="outline" className="relative">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handlePhotoUpload}
                accept="image/*"
              />
              อัพโหลดรูปภาพ
            </Button>
          </div>

          {/* ข้อมูลส่วนตัว */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">ชื่อ</Label>
              <Input
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                placeholder="ชื่อ"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">นามสกุล</Label>
              <Input
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                placeholder="นามสกุล"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">อายุ</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={profile.age}
                onChange={handleInputChange}
                placeholder="อายุ"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">เพศ</Label>
              <Select name="gender" value={profile.gender} onValueChange={(value) => handleSelectChange(value, 'gender')}>
                <SelectTrigger>
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

          <div className="space-y-2">
            <Label htmlFor="location">ที่อยู่</Label>
            <Input
              id="location"
              name="location"
              value={profile.location}
              onChange={handleInputChange}
              placeholder="จังหวัด/เมือง"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="occupation">อาชีพ</Label>
            <Input
              id="occupation"
              name="occupation"
              value={profile.occupation}
              onChange={handleInputChange}
              placeholder="อาชีพของคุณ"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">เกี่ยวกับฉัน</Label>
            <Textarea
              id="about"
              name="about"
              value={profile.about}
              onChange={handleInputChange}
              placeholder="บอกเล่าเกี่ยวกับตัวคุณ"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">ความสนใจ</Label>
            <Textarea
              id="interests"
              name="interests"
              value={profile.interests}
              onChange={handleInputChange}
              placeholder="งานอดิเรก, กิจกรรมที่ชอบ"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lookingFor">กำลังมองหา</Label>
            <Textarea
              id="lookingFor"
              name="lookingFor"
              value={profile.lookingFor}
              onChange={handleInputChange}
              placeholder="คุณกำลังมองหาคนแบบไหน"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">ยกเลิก</Button>
            <Button>บันทึก</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;