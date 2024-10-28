// src/components/NearbyUsers.jsx
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, X, MapPin, Briefcase, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageFon from '@/assets/images/avatar-fon.jpg';
import ImageNun from '@/assets/images/avatar-nun.jpg';
import ImagePare from '@/assets/images/avatar-pare.jpg';

const NearbyUsers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  
  const users = [
    {
      id: 1,
      name: 'คุณฝน',
      age: 23,
      occupation: 'พนักงานบริษัท',
      distance: 2,
      interests: ['ท่องเที่ยว', 'ถ่ายรูป', 'ดนตรี'],
      bio: 'ชอบเที่ยวต่างประเทศ ถ่ายรูปเป็นงานอดิเรก ชอบฟังเพลงแนว Lo-fi',
      imageUrl: ImageFon
    },
    {
      id: 2,
      name: 'คุณนุ่น',
      age: 25,
      occupation: 'นักการตลาด',
      distance: 3.5,
      interests: ['อ่านหนังสือ', 'ทำอาหาร', 'โยคะ'],
      bio: 'รักการอ่านหนังสือ ชอบทำอาหาร และรักการออกกำลังกาย',
      imageUrl: ImageNun
    },
    {
      id: 3,
      name: 'คุณแพร',
      age: 24,
      occupation: 'กราฟิกดีไซน์เนอร์',
      distance: 1.8,
      interests: ['ศิลปะ', 'ดูหนัง', 'คาเฟ่'],
      bio: 'ชอบวาดรูป หาร้านกาแฟน่านั่ง และดูหนังทุกแนว',
      imageUrl: ImagePare
    }
  ];

  const handleSwipe = (swipeDirection) => {
    setDirection(swipeDirection);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      setDirection(null);
    }, 300);
  };

  // Variants for card animations
  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  // If we've shown all users
  if (currentIndex >= users.length) {
    return (
      <div className="max-w-md mx-auto p-4 mb-16 text-center">
        <Card className="p-8">
          <Coffee className="w-16 h-16 mx-auto mb-4 text-pink-500" />
          <h2 className="text-2xl font-bold mb-2">ไม่มีโปรไฟล์เพิ่มเติม</h2>
          <p className="text-gray-600 mb-4">กรุณาลองค้นหาใหม่ในภายหลัง</p>
          <button 
            onClick={() => setCurrentIndex(0)}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            เริ่มค้นหาใหม่
          </button>
        </Card>
      </div>
    );
  }

  const currentUser = users[currentIndex];

  return (
    <div className="max-w-md mx-auto p-4 mb-16">
      <div className="relative h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentUser.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <Card className="overflow-hidden shadow-lg h-[600px]">
              <div className="relative h-full">
                <img
                  src={currentUser.imageUrl}
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* User Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    {currentUser.name}, {currentUser.age}
                  </h2>
                  
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <p className="text-sm">{currentUser.occupation}</p>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <p className="text-sm">ห่างจากคุณ {currentUser.distance} กม.</p>
                  </div>
                  
                  <p className="text-sm mb-3">{currentUser.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {currentUser.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            onClick={() => handleSwipe('left')}
          >
            <X className="w-8 h-8 text-gray-500" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
            onClick={() => handleSwipe('right')}
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NearbyUsers;