import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, ArrowLeft, Phone, Camera } from 'lucide-react';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'สมหญิง',
      content: 'สวัสดีค่ะ ยินดีที่ได้รู้จักนะคะ',
      timestamp: '10:30',
      isSender: false,
    },
    {
      id: 2,
      sender: 'คุณ',
      content: 'สวัสดีครับ ยินดีที่ได้รู้จักเช่นกันครับ',
      timestamp: '10:31',
      isSender: true,
    },
    // Add more messages as needed
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'คุณ',
        content: message,
        timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
        isSender: true,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Card className="max-w-md mx-auto h-screen flex flex-col">
        {/* Chat Header */}
        <CardHeader className="border-b bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <img
                  src="/api/placeholder/40/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">สมหญิง</CardTitle>
                  <p className="text-sm text-gray-500">ออนไลน์</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Camera className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages Area */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] ${
                  msg.isSender
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-2xl rounded-bl-2xl'
                    : 'bg-gray-100 text-gray-800 rounded-t-2xl rounded-br-2xl'
                } p-3 shadow-sm`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className={`text-xs ${msg.isSender ? 'text-pink-100' : 'text-gray-500'} block mt-1`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </CardContent>

        {/* Input Area */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="พิมพ์ข้อความ..."
              className="rounded-full"
            />
            <Button
              onClick={handleSend}
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatPage;