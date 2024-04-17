import React from 'react';
import "./Product.css";
import Price from './Price.jsx';

export default function Product({ title, idx }) {
  const oldPrices = ["11,223", "14,313", "5635", "3521"];
  const newPrices = ["2343", "2343", "7534", "2341"];
  const descriptions = [
    "80,000 DPI",
    "Intuitive surface",
    "Designed for iPad Pro",
    "Wireless",
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{descriptions[idx]}</p>
      <p>Product</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
