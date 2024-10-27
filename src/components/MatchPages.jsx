import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  X, 
  MessageCircle, 
  User, 
  MapPin, 
  Music, 
  Coffee, 
  Book 
} from 'lucide-react';

const MatchPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample match data - in a real app, this would come from an API
  const matches = [
    {
      id: 1,
      name: "สมหญิง",
      age: 25,
      location: "กรุงเทพมหานคร",
      bio: "ชอบดูหนัง ฟังเพลง และท่องเที่ยว",
      interests: ["ดนตรี", "กาแฟ", "อ่านหนังสือ"],
      imageUrl: "/api/placeholder/400/500"
    },
    {
      id: 2,
      name: "สมศรี",
      age: 23,
      location: "เชียงใหม่",
      bio: "รักการอ่านและชอบท่องเที่ยว",
      interests: ["อ่านหนังสือ", "ดนตรี", "กาแฟ"],
      imageUrl: "/api/placeholder/400/500"
    },
    // Add more matches as needed
  ];

  const currentMatch = matches[currentIndex];

  const handleLike = () => {
    console.log('Liked:', currentMatch.name);
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePass = () => {
    console.log('Passed:', currentMatch.name);
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMessage = () => {
    console.log('Message:', currentMatch.name);
    // Implement message functionality
  };

  const getInterestIcon = (interest) => {
    switch (interest.toLowerCase()) {
      case 'ดนตรี':
        return <Music className="w-4 h-4" />;
      case 'กาแฟ':
        return <Coffee className="w-4 h-4" />;
      case 'อ่านหนังสือ':
        return <Book className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent py-4">
          ค้นหาคู่ที่ใช่
        </CardTitle>

        {currentMatch && (
          <Card className="w-full overflow-hidden">
            <div className="relative">
              <img 
                src={currentMatch.imageUrl} 
                alt={currentMatch.name} 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <h3 className="text-2xl font-bold">
                  {currentMatch.name}, {currentMatch.age}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{currentMatch.location}</span>
                </div>
              </div>
            </div>

            <CardContent className="p-4 space-y-4">
              <p className="text-gray-600">{currentMatch.bio}</p>

              <div className="flex flex-wrap gap-2">
                {currentMatch.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
                  >
                    {getInterestIcon(interest)}
                    <span>{interest}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button
                  onClick={handlePass}
                  variant="outline"
                  size="lg"
                  className="rounded-full h-14 w-14 p-0 border-2 hover:border-red-500 hover:text-red-500 transition-all duration-300"
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  onClick={handleMessage}
                  variant="outline"
                  size="lg"
                  className="rounded-full h-14 w-14 p-0 border-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>

                <Button
                  onClick={handleLike}
                  variant="outline"
                  size="lg"
                  className="rounded-full h-14 w-14 p-0 border-2 hover:border-green-500 hover:text-green-500 transition-all duration-300"
                >
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentIndex >= matches.length && (
          <Card className="text-center p-8">
            <User className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">ไม่พบการจับคู่เพิ่มเติม</h3>
            <p className="text-gray-600 mb-4">กรุณาลองกลับมาใหม่ในภายหลัง</p>
            <Button 
              onClick={() => setCurrentIndex(0)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
            >
              เริ่มค้นหาใหม่
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MatchPage;