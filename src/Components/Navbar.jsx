import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-800 via-pink-700 to-red-600 shadow-2xl backdrop-blur-sm">
            <ul className="navbar flex justify-between items-center px-6 py-4">
                {/* Logo / Brand */}
                <li>
                    <Link
                        to="/"
                        className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg hover:scale-105 hover:text-yellow-300 transition-all duration-300"
                    >
                        💰 Expense Tracker
                    </Link>
                </li>

                {/* Tagline */}
                <li>
                    <h1 className="text-sm md:text-lg font-medium italic tracking-wider 
            bg-gradient-to-r from-yellow-200 to-pink-300 bg-clip-text text-transparent 
            drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] transition-all duration-300">
                        Spend Smart Today, Smile Tomorrow
                    </h1>
                </li>

                
            </ul>
        </nav>
    );
};

export default Navbar;
