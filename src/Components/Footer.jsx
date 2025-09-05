import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white rounded-t-lg shadow-md mb-1">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Logo & App Name */}
                <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-md">
                        <span className="text-2xl">💰</span>
                    </div>
                    <span className="text-lg md:text-xl font-bold drop-shadow-sm">
                        Smart Expense Tracker
                    </span>
                </div>

                {/* Copyright */}
                <div className="text-sm md:text-base text-white/90 font-medium drop-shadow-sm">
                    © {new Date().getFullYear()} - All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
