// src/pages/CropsPage.tsx

import React from 'react';

// Define a TypeScript interface for the Crop
interface Crop {
  id: number;
  name: string;
  price: number;
}

const crops: Crop[] = [
  { id: 1, name: 'Wheat', price: 10 },
  { id: 2, name: 'Corn', price: 15 },
  { id: 3, name: 'Rice', price: 20 },
  // Add more crops as needed
];

const CropsPage: React.FC = () => {
  const handleBuy = (cropId: number) => {
    // Handle buy logic here (e.g., show a message or make an API call)
    alert(`Bought crop with ID: ${cropId}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Buy and Sell Crops</h1>
      <ul>
        {crops.map((crop) => (
          <li key={crop.id} style={{ marginBottom: '10px' }}>
            <span>{crop.name} - ${crop.price}</span>
            <button
              onClick={() => handleBuy(crop.id)}
              style={{ marginLeft: '10px' }}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropsPage;
