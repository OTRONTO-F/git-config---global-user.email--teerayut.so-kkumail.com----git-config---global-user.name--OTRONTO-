import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, Heart } from 'lucide-react';

const ChatSelectPage = () => {
  const matches = [
    {
      id: 1,
      name: 'นุชนารถ',
      age: 25,
      distance: '2 กม.',
      matches: ['ชอบอ่านหนังสือ', 'เที่ยวต่างประเทศ'],
      isOnline: true
    },
    {
      id: 2,
      name: 'วรรณา',
      age: 28,
      distance: '5 กม.',
      matches: ['ทำอาหาร', 'ดูหนัง'],
      isOnline: true
    },
    {
      id: 3,
      name: 'พิมพ์มาดา',
      age: 24,
      distance: '3 กม.',
      matches: ['โยคะ', 'ถ่ายรูป'],
      isOnline: false
    },
    {
      id: 4,
      name: 'กุลนิษฐ์',
      age: 27,
      distance: '1 กม.',
      matches: ['วาดรูป', 'ดนตรี'],
      isOnline: true
    },
  ];

  const chats = [
    {
      id: 1,
      name: 'สมหญิง',
      lastMessage: 'สวัสดีค่ะ ยินดีที่ได้รู้จักนะคะ',
      timestamp: '10:30',
      unread: 2,
      isOnline: true,
      matches: ['ชอบอ่านหนังสือ', 'ชอบท่องเที่ยว']
    },
    {
      id: 2,
      name: 'สมศรี',
      lastMessage: 'เย็นนี้ว่างไหมคะ?',
      timestamp: '09:45',
      unread: 0,
      isOnline: true,
      matches: ['ชอบทำอาหาร', 'รักสัตว์']
    },
    {
      id: 3,
      name: 'สมใจ',
      lastMessage: 'ขอบคุณที่แนะนำร้านอาหารนะคะ',
      timestamp: 'เมื่อวาน',
      unread: 0,
      isOnline: false,
      matches: ['ชอบดูหนัง', 'เล่นดนตรี']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Card className="max-w-md mx-auto h-screen flex flex-col">
        <CardHeader className="border-b bg-white shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">การจับคู่</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-purple-600 hover:text-purple-700"
            >
              ดูทั้งหมด
            </Button>
          </div>
          
          {/* Matching Profiles Section */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="flex-shrink-0 w-32 group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src="/api/placeholder/128/160"
                      alt={match.name}
                      className="w-32 h-40 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                    />
                    {match.isOnline && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 rounded-b-lg">
                      <p className="text-white font-medium">{match.name}</p>
                      <p className="text-white/80 text-sm">{match.age} • {match.distance}</p>
                    </div>
                    <Button
                      size="icon"
                      className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-sm hover:shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4 text-pink-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Input
              placeholder="ค้นหาการสนทนา..."
              className="pl-10 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </CardHeader>

        {/* Chat List */}
        <CardContent className="flex-1 overflow-y-auto p-0">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="p-4 border-b hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-4"
            >
              <div className="relative">
                <img
                  src="/api/placeholder/48/48"
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.timestamp}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-1">
                  <MessageCircle className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>

                <div className="flex gap-2 mt-2">
                  {chat.matches.map((match, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-purple-700 rounded-full text-xs"
                    >
                      {match}
                    </span>
                  ))}
                </div>
                
                {chat.unread > 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatSelectPage;