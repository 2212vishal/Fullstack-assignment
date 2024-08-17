import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-full sm:w-1/2 md:w-5/12 lg:w-1/3 max-w-xs">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <hr className="border-gray-300 mb-2"/>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
};

export default Card;
