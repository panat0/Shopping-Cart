import React from 'react';
import ProductCard from '../ProductCard';

const products = [
  { id: 1, name: 'แซลม่อนกุ้ง', price: 10, image: 'https://www.apthai.com/images/production/POBL0bRFlFSZdaEZahrXBmnKCIR8PrnWi9tDBxYb.jpg' },
  { id: 2, name: 'ปีกไก่ทอด', price: 20, image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg' },
  { id: 3, name: 'หูกรอบ', price: 30, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/5b/43/4c/20190922-130031-largejpg.jpg' },
  { id: 4, name: 'กระเพรา', price: 40, image: 'https://blog.hungryhub.com/wp-content/uploads/2022/07/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-1024x683.webp' },
  { id: 5, name: 'ต้มยำกุ้ง', price: 50, image: 'https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFRA9Hw1ddaiN8vczDH5awGUi4JQ7XTjwF2YTlnGfAZTGUAcQDXv.jpg' },
  { id: 6, name: 'ไข่เจียว', price: 60, image: 'https://s359.kapook.com/rq/580/435/50/pagebuilder/29e40ab6-f3b1-42f8-a0fb-31b2475c0db4.jpg' },
  { id: 7, name: 'ข้าวผัด', price: 70, image: 'https://www.ajinomotofoodservicethailand.com/wp-content/uploads/2017/12/shutterstock_9138055_Final-1024x683.jpg' },
  { id: 8, name: 'ส้มตำ', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay8YaeYK9xwx5UXt3cgVsfqpW_2oD6_PUN7k6BhjVpMkI528M3-_ZBnCBqMsITdzAB_Y&usqp=CAU' },
  { id: 9, name: 'ทาโกะยากิ', price: 90, image: 'https://artralux.co.th/wp-content/uploads/2023/07/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%AE%E0%B8%B4%E0%B8%95-14.jpg' },
  { id: 10, name: 'ซูชิ', price: 100, image: 'https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop-Thumb-400x200.jpg' },
  // เพิ่มสินค้าได้อีกตามความต้องการ
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
