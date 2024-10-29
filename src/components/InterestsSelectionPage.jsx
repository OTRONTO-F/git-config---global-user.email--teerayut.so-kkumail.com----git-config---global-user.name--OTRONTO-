import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const InterestsSelectionPage = ({ onBack, onComplete }) => {
  const [selectedInterests, setSelectedInterests] = useState({
    music: [],
    sports: [],
    food: [],
    hobbies: [],
    movies: []
  });

  const categories = {
    music: {
      title: 'แนวเพลงที่ชอบ',
      options: ['Pop', 'Rock', 'Jazz', 'Classical', 'Hip Hop', 'R&B', 'Country', 'EDM', 'K-Pop', 'T-Pop']
    },
    sports: {
      title: 'กีฬา',
      options: ['ฟุตบอล', 'บาสเกตบอล', 'วอลเลย์บอล', 'เทนนิส', 'แบดมินตัน', 'วิ่ง', 'ว่ายน้ำ', 'โยคะ', 'ฟิตเนส']
    },
    food: {
      title: 'อาหาร',
      options: ['อาหารไทย', 'อาหารญี่ปุ่น', 'อาหารจีน', 'อาหารอิตาเลียน', 'อาหารเกาหลี', 'ของหวาน', 'อาหารทะเล', 'มังสวิรัติ']
    },
    hobbies: {
      title: 'งานอดิเรก',
      options: ['อ่านหนังสือ', 'ดูหนัง', 'เล่นเกม', 'ท่องเที่ยว', 'ถ่ายรูป', 'ทำอาหาร', 'ปลูกต้นไม้', 'ศิลปะ', 'ดนตรี']
    },
    movies: {
      title: 'ประเภทภาพยนตร์',
      options: ['แอคชั่น', 'โรแมนติก', 'ตลก', 'สยองขวัญ', 'แฟนตาซี', 'การ์ตูน', 'สารคดี', 'ดราม่า']
    }
  };

  const toggleInterest = (category, interest) => {
    setSelectedInterests(prev => {
      const currentInterests = prev[category];
      const exists = currentInterests.includes(interest);
      
      if (exists) {
        return {
          ...prev,
          [category]: currentInterests.filter(item => item !== interest)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentInterests, interest]
        };
      }
    });
  };

  const handleComplete = () => {
    onComplete(selectedInterests);
  };

  const getTotalSelected = () => {
    return Object.values(selectedInterests).reduce((total, current) => total + current.length, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="flex items-center gap-2 mb-6 hover:bg-white/50 transition-all duration-300"
        >
          <ChevronLeft className="h-4 w-4" />
          กลับ
        </Button>

        <Card className="shadow-xl backdrop-blur-sm bg-white/90 border-none">
          <CardHeader className="bg-gradient-to-r from-pink-500/10 to-purple-500/10">
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              เลือกสิ่งที่คุณชอบ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.options.map((option) => {
                    const isSelected = selectedInterests[key].includes(option);
                    return (
                      <Button
                        key={option}
                        variant={isSelected ? "default" : "outline"}
                        onClick={() => toggleInterest(key, option)}
                        className={`
                          transition-all duration-300
                          ${isSelected ? 
                            'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-200/50' : 
                            'hover:border-pink-200 hover:text-pink-500'
                          }
                        `}
                      >
                        {option}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-6">
              <p className="text-sm text-gray-500">
                เลือกแล้ว {getTotalSelected()} รายการ
              </p>
              <Button 
                onClick={handleComplete}
                className="min-w-[120px] bg-gradient-to-r from-pink-500 to-purple-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/50"
              >
                ถัดไป
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterestsSelectionPage;