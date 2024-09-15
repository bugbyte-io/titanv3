import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div>
      <Image priority src="/cohezion_logo.svg" alt="Cohezion Logo" width={200} height={100}/>
    </div>
  );
};

export default Logo;