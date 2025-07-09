import React from 'react';
import LatestCollection from '../Components/LatestCollection';
import BestSeller from '../Components/BestSeller';

function Product() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#000000] to-[#000000] flex flex-col items-center justify-start py-5">
      <div className="w-full flex flex-col items-center justify-center space-y-10">
        <LatestCollection />
        <BestSeller />
      </div>
    </div>
  );
}

export default Product;
