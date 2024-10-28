# React + Vite โปรเจค

โปรเจคนี้เป็นเทมเพลตพื้นฐานสำหรับการพัฒนาแอปพลิเคชัน React โดยใช้ Vite เป็น build tool พร้อมการตั้งค่าเริ่มต้นที่จำเป็น

## คุณสมบัติหลัก

- ⚡️ การพัฒนาที่รวดเร็วด้วย Vite
- ⚛️ React 18
- 🔥 Hot Module Replacement (HMR)
- 🚨 ESLint สำหรับตรวจสอบโค้ด

## การติดตั้ง

```bash
# ใช้ npm
npm create vite@latest my-react-app -- --template react

# หรือใช้ yarn
yarn create vite my-react-app --template react

# หรือใช้ pnpm
pnpm create vite my-react-app --template react
```

## การเริ่มต้นใช้งาน

1. ติดตั้ง dependencies:
```bash
npm install
```

2. เริ่มต้น development server:
```bash
npm run dev
```

3. สร้างไฟล์สำหรับ production:
```bash
npm run build
```

4. ทดสอบ build ก่อนนำขึ้น production:
```bash
npm run preview
```

## ปลั๊กอินที่รองรับ

ปัจจุบันมีปลั๊กอินอย่างเป็นทางการ 2 ตัว:

1. [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
   - ใช้ [Babel](https://babeljs.io/) สำหรับ Fast Refresh
   - เหมาะสำหรับโปรเจคที่ต้องการความยืดหยุ่นในการกำหนดค่า Babel

2. [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
   - ใช้ [SWC](https://swc.rs/) สำหรับ Fast Refresh
   - เหมาะสำหรับโปรเจคที่ต้องการความเร็วในการ compile

## โครงสร้างโปรเจค

```
my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## การปรับแต่งเพิ่มเติม

สามารถปรับแต่งการตั้งค่าของ Vite ได้ผ่านไฟล์ `vite.config.js` เช่น:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
})
```

## การสนับสนุน

หากพบปัญหาหรือต้องการความช่วยเหลือ สามารถติดตามได้ที่:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Issues](https://github.com/vitejs/vite/issues)

## License

MIT License
