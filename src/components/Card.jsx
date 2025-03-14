import Image from 'next/image';
import React from 'react';


const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col p-4 max-w-sm rounded-4xl w-full items-center overflow-hidden shadow-lg bg-white">

      <Image src={imageSrc} alt={title} width={330} height={120} className='object-cover' />
      <div className="p-4 flex flex-col space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;