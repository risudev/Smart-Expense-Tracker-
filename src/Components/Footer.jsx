import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white flex justify-center items-center p-6 shadow-lg rounded-t-xl">
            <aside className="flex justify-center items-center space-x-4">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="url(#gradient)"
                    className="drop-shadow-lg"
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#fff" />
                            <stop offset="100%" stopColor="#f0f" />
                        </linearGradient>
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%" >
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
                        </filter>
                    </defs>
                </svg>
                <p className="text-lg font-semibold drop-shadow-md">
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
