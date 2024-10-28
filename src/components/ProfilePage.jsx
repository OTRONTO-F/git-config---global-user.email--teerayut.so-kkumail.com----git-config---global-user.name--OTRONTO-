import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Camera, Edit2, MapPin, Briefcase, Heart, Image, Star, Share2, Settings, Plus, X, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileMod from '@/assets/images/profile-mod.jpg';
import Moountain from '@/assets/images/mountain.jpg';
import Bleach from '@/assets/images/bleach.jpg';


const ImageGallery = ({ photos, onAddPhoto }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="aspect-square relative cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
          </motion.div>
        ))}
        <motion.div
          className="aspect-square relative border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05, borderColor: '#ec4899' }}
          whileTap={{ scale: 0.95 }}
          onClick={onAddPhoto}
        >
          <Plus className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size"
                className="w-full rounded-lg"
              />
              <button
                className="absolute top-4 right-4 p-2 bg-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const profile = {
    name: 'คุณมด',
    age: 25,
    location: 'กรุงเทพมหานคร',
    occupation: 'นักการตลาด',
    bio: 'ชอบท่องเที่ยว ถ่ายรูป และทำอาหาร ๆ กำลังมองหาคนที่มีความสนใจคล้าย ๆ กัน',
    interests: ['ท่องเที่ยว', 'ถ่ายรูป', 'ทำอาหาร', 'ดูหนัง', 'อ่านหนังสือ', 'เล่นดนตรี'],
    photos: [ Moountain, Bleach ],
    stats: {
      followers: 1234,
      following: 567,
      likes: 890
    }
  };

  const handleAddPhoto = () => {
    // Implement photo upload logic
    console.log('Add photo clicked');
  };

  return (
    <div className="max-w-md mx-auto p-4 mb-16">
      {/* Profile Header with Parallax Effect */}
      <motion.div
        className="relative mb-4 rounded-lg overflow-hidden"
        whileHover={{ height: '70vh' }}
        initial={{ height: '40vh' }}
        transition={{ duration: 0.3 }}
      >
        <img
          src= {ProfileMod}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-2">{profile.name}, {profile.age}</h1>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1" />
              <span>{profile.occupation}</span>
            </div>
          </div>
          
          {/* ปรับปรุงส่วนของปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button 
              variant="default" 
              className="bg-white/20 backdrop-blur-lg hover:bg-white/30 w-full sm:w-auto"
              size="sm"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">แก้ไขโปรไฟล์</span>
            </Button>
            <Button 
              variant="default" 
              className="bg-white/20 backdrop-blur-lg hover:bg-white/30 w-full sm:w-auto"
              size="sm"
            >
              <Share2 className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">แชร์โปรไฟล์</span>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {Object.entries(profile.stats).map(([key, value]) => (
          <motion.div
            key={key}
            className="bg-white rounded-lg p-4 text-center shadow-sm"
            whileHover={{ y: -5, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
          >
            <p className="text-2xl font-bold text-pink-500">{value}</p>
            <p className="text-gray-600 text-sm capitalize">{key}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Profile Content */}
      <Card className="p-4 mb-4">
        <ScrollArea className="h-[600px] pr-4">
          {/* About Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-pink-500" />
              เกี่ยวกับฉัน
            </h2>
            <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
          </div>

          {/* Interests Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">ความสนใจ</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <motion.span
                  key={interest}
                  className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: '#fce7f3' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Photos Section */}
          <div>
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <Image className="w-5 h-5 mr-2 text-pink-500" />
              รูปภาพ
            </h2>
            <ImageGallery photos={profile.photos} onAddPhoto={handleAddPhoto} />
          </div>
        </ScrollArea>
      </Card>

      {/* Action Buttons */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <motion.div
          className="flex space-x-2"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Button
            className="flex-1 bg-pink-500 hover:bg-pink-600"
            onClick={() => setIsEditing(true)}
          >
            <Heart className="w-4 h-4 mr-2" />
            อัพเดทโปรไฟล์
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowSettings(true)}
          >
            <Settings className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">ตั้งค่า</h2>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  ตั้งค่าความเป็นส่วนตัว
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  การแจ้งเตือน
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600">
                  ออกจากระบบ
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfilePage;