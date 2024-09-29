import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // ต้องแน่ใจว่ามีการนำเข้าไฟล์ CSS
import App from './App'; // นำเข้า App คอมโพเนนต์

// Render คอมโพเนนต์ App ไปที่ div ที่มี id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
