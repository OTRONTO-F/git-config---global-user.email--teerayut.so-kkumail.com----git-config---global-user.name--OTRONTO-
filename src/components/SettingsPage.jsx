import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Shield,
  User,
  Heart,
  HelpCircle,
  LogOut,
  ChevronRight,
  Moon,
  Sun,
  Smartphone,
  Languages,
  Lock,
  Save,
  Camera,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SettingItem = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-between p-3 rounded-lg ${
        item.type === 'danger' 
          ? 'text-red-500 hover:bg-red-50' 
          : 'text-gray-700 hover:bg-pink-50'
      } relative overflow-hidden transition-colors duration-200`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 z-10">
        <motion.div
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <item.icon className="w-5 h-5" />
        </motion.div>
        <span className="font-medium">{item.label}</span>
      </div>

      {item.type === 'toggle' ? (
        <Switch 
          checked={item.value} 
          className="z-10"
          onCheckedChange={(checked) => {
            // Handle toggle change
            console.log(`${item.label} toggled:`, checked);
          }}
        />
      ) : item.type === 'link' ? (
        <motion.div
          animate={{
            x: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </motion.div>
      ) : null}

      {/* Hover Effect Background */}
      <motion.div
        className={`absolute inset-0 ${
          item.type === 'danger' ? 'bg-red-50' : 'bg-pink-50'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const settingsSections = [
    {
      title: 'ส่วนตัว',
      icon: User,
      items: [
        {
          icon: User,
          label: 'แก้ไขโปรไฟล์',
          type: 'link'
        },
        {
          icon: Camera,
          label: 'รูปโปรไฟล์',
          type: 'link'
        },
        {
          icon: Share2,
          label: 'แชร์โปรไฟล์',
          type: 'link'
        }
      ]
    },
    {
      title: 'ความปลอดภัย',
      icon: Shield,
      items: [
        {
          icon: Shield,
          label: 'ความเป็นส่วนตัว',
          type: 'link'
        },
        {
          icon: Lock,
          label: 'เปลี่ยนรหัสผ่าน',
          type: 'link'
        }
      ]
    },
    {
      title: 'การแจ้งเตือน',
      icon: Bell,
      items: [
        {
          icon: Bell,
          label: 'แจ้งเตือนข้อความ',
          type: 'toggle',
          value: true
        },
        {
          icon: Heart,
          label: 'แจ้งเตือนการจับคู่',
          type: 'toggle',
          value: true
        },
        {
          icon: Smartphone,
          label: 'แจ้งเตือนบนมือถือ',
          type: 'toggle',
          value: true
        }
      ]
    },
    {
      title: 'การแสดงผล',
      icon: Sun,
      items: [
        {
          icon: darkMode ? Moon : Sun,
          label: 'โหมดมืด',
          type: 'toggle',
          value: darkMode
        },
        {
          icon: Languages,
          label: 'ภาษา',
          type: 'link'
        }
      ]
    },
    {
      title: 'อื่นๆ',
      icon: HelpCircle,
      items: [
        {
          icon: HelpCircle,
          label: 'ช่วยเหลือ',
          type: 'link'
        },
        {
          icon: LogOut,
          label: 'ออกจากระบบ',
          type: 'danger'
        }
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto p-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-2xl font-bold">ตั้งค่า</h1>
      </motion.div>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {settingsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <section.icon className="w-5 h-5 text-pink-500" />
                  <h2 className="text-sm font-semibold text-gray-500">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <SettingItem
                      key={item.label}
                      item={item}
                      onClick={() => {
                        if (item.type === 'danger') {
                          setShowLogoutConfirm(true);
                        }
                        // Handle other clicks
                        console.log(`${item.label} clicked`);
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </ScrollArea>

      <motion.p 
        className="text-center text-sm text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        เวอร์ชัน 1.0.0
      </motion.p>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowLogoutConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-sm"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">ยืนยันการออกจากระบบ</h2>
              <p className="text-gray-600 mb-6">คุณต้องการออกจากระบบใช่หรือไม่?</p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowLogoutConfirm(false)}
                >
                  ยกเลิก
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => {
                    console.log('Logging out...');
                    setShowLogoutConfirm(false);
                  }}
                >
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

export default SettingsPage;