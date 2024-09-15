import React from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import NotificationIcons from './NotificationIcons';
import UserIcon from './UserIcon';

const TopNav: React.FC = () => {
    return (<header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                    <Logo />
                    <NavItems />
                </div>
                <div className="flex items-center space-x-4">
                    <NotificationIcons />
                    <UserIcon />
                </div>
            </div>
        </div>
    </header>)

};

export default TopNav;