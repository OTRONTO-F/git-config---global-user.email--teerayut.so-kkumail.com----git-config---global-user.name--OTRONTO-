// src/components/ChatPage.jsx
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Send, Phone, Video, MoreVertical, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBubble = ({ message, isOwn }) => (
  <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
    {!isOwn && (
      <img
        src={message.avatar}
        alt="avatar"
        className="w-8 h-8 rounded-full mr-2 mt-2"
      />
    )}
    <div
      className={`max-w-[70%] rounded-2xl p-3 ${
        isOwn
          ? 'bg-pink-500 text-white rounded-br-none'
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
      }`}
    >
      <p className="text-sm">{message.text}</p>
      <span className={`text-xs mt-1 block ${isOwn ? 'text-pink-100' : 'text-gray-500'}`}>
        {message.time}
      </span>
    </div>
  </div>
);

const ChatDetailView = ({ chat, onBack }) => {
  const [newMessage, setNewMessage] = useState('');
  
  const messages = [
    {
      id: 1,
      text: 'สวัสดีค่ะ ยินดีที่ได้รู้จักนะคะ 😊',
      time: '12:30',
      isOwn: false,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 2,
      text: 'สวัสดีครับ ยินดีที่ได้รู้จักเช่นกันครับ',
      time: '12:31',
      isOwn: true
    },
    {
      id: 3,
      text: 'คุณชอบทำอะไรยามว่างเหรอคะ?',
      time: '12:33',
      isOwn: false,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 4,
      text: 'ผมชอบถ่ายรูปและเล่นดนตรีครับ คุณล่ะครับ?',
      time: '12:35',
      isOwn: true
    }
  ];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className="fixed inset-0 bg-white z-50"
    >
      {/* Chat Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b p-4 flex items-center space-x-4">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img
          src={chat.imageUrl}
          alt={chat.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{chat.name}</h3>
          <p className="text-xs text-gray-500">ออนไลน์</p>
        </div>
        <div className="flex space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="h-[calc(100vh-130px)] mt-[72px] p-4">
        <div className="max-w-md mx-auto">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message}
              isOwn={message.isOwn}
            />
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="max-w-md mx-auto flex space-x-4">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="พิมพ์ข้อความ..."
            className="flex-1"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-pink-500 text-white rounded-full"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'คุณฝน',
      lastMessage: 'สวัสดีค่ะ ยินดีที่ได้รู้จัก',
      time: '12:30',
      unread: 2,
      imageUrl: '/api/placeholder/50/50',
      online: true
    },
    {
      id: 2,
      name: 'คุณนุ่น',
      lastMessage: 'วันนี้ไปไหนมาคะ?',
      time: '11:45',
      unread: 0,
      imageUrl: '/api/placeholder/50/50',
      online: false
    },
    {
      id: 3,
      name: 'คุณแพร',
      lastMessage: 'เย็นนี้ว่างไหมคะ?',
      time: '09:15',
      unread: 1,
      imageUrl: '/api/placeholder/50/50',
      online: true
    }
  ];

  const filteredConversations = conversations.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4 mb-16">
      <h1 className="text-2xl font-bold mb-4">แชท</h1>
      
      {/* Search Bar */}
      <div className="relative mb-4">
        <Input
          type="text"
          placeholder="ค้นหาแชท"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Chat List */}
      <AnimatePresence>
        {filteredConversations.map((chat, index) => (
          <motion.div
            key={chat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="p-4 mb-2 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={chat.imageUrl}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {chat.unread}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Chat Detail View */}
      <AnimatePresence>
        {selectedChat && (
          <ChatDetailView
            chat={selectedChat}
            onBack={() => setSelectedChat(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatPage;