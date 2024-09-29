import React, { useState } from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, applyDiscount }) => {
  const [coupon, setCoupon] = useState('');
  const shippingCost = 100;
  
  // คำนวณราคารวม
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const handleCouponApply = () => {
    if (coupon === 'DISCOUNT10') {
      applyDiscount(0.1); // ลดราคา 10%
    }
  };

  return (
    <div className="border p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">รายการ</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div>
                {item.name} - {item.price} บาท
              </div>
              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="ml-4 text-red-500" onClick={() => removeFromCart(item.id)}>
                ลบรายการ
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-lg">รวมทั้งหมด: {total} บาท</h3>
            <p>ค่าขนส่ง: {shippingCost} บาท</p>
            <h3 className="text-lg font-bold">
              ราคารวมทั้งหมด: {total + shippingCost} บาท
            </h3>
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="ใส่คูปอง"
              className="border py-1 px-2"
            />
            <button
              onClick={handleCouponApply}
              className="ml-2 bg-green-500 text-white py-1 px-4 rounded"
            >
              เพิ่มคูปอง
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
