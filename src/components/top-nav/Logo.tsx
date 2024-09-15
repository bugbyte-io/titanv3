import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div>
      <Image priority src="/cohezion_logo_fixed.svg" alt="Cohezion Logo" width={150} height={100}/>
    </div>
  );
};

export default Logo;