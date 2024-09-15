import React from 'react';
import { BellIcon } from 'lucide-react';

const NotificationIcons: React.FC = () => {
  return (
    <div className="mr-4 flex space-x-4">
        <BellIcon color='gray'  />
      {/* Add more notification icons as needed */}
    </div>
  );
};

export default NotificationIcons;

