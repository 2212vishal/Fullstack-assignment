
import React from 'react';

const LoadingCard = () => {
  return (
    <div className="w-60 h-24 border-2 border-gray-300 rounded-md mx-auto mt-5">
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col space-y-3">
          <div className="w-36 h-6 bg-gray-300 rounded-md"></div>
          <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
