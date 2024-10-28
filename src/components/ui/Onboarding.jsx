// src/components/Onboarding.jsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Onboarding = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>ยินดีต้อนรับสู่ Love Alam</DialogTitle>
          <DialogDescription>
            เริ่มต้นการค้นหาคู่ที่ใช่สำหรับคุณ
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            เราจะช่วยคุณหาคู่ที่เหมาะสมโดยใช้:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>ความสนใจที่ตรงกัน</li>
            <li>ระยะทางที่เหมาะสม</li>
            <li>ไลฟ์สไตล์ที่เข้ากันได้</li>
          </ul>
          <Button onClick={onClose} className="w-full">
            เริ่มต้นใช้งาน
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;