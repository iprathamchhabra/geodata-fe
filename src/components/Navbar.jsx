import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../images/logo.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, [pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        closeMenu();
        navigate('/');
    };

    return (
        <header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-6 sm:py-4 sticky top-0 z-50 shadow-md">
            <div className="flex items-center justify-between w-full px-4 py-3 sm:p-0">
                <div className="mr-8">
                    <img className="h-10" src={logo} alt="logo" />
                </div>
                <nav className={`hidden sm:flex space-x-8 items-center flex-grow`}>
                    <Link to="/" className={`text-gray-800 font-semibold ${pathname === '/' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded transition duration-300`} onClick={closeMenu}>Home</Link>
                    <Link to="/upload" className={`text-gray-800 font-semibold ${pathname === '/upload' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded transition duration-300`} onClick={closeMenu}>Upload</Link>
                    <Link to="/mapView" className={`text-gray-800 font-semibold ${pathname === '/mapView' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded transition duration-300`} onClick={closeMenu}>Map</Link>
                    <Link to="/about" className={`text-gray-800 font-semibold ${pathname === '/about' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded transition duration-300`} onClick={closeMenu}>Whats'in</Link>
                </nav>
                <div className="sm:hidden">
                    <button type="button" onClick={toggleMenu} className="text-gray-800 hover:text-cyan-500 focus:outline-none focus:text-cyan-500">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 6H5v2h14V6zM5 11h14v-2H5v2zm14 5H5v-2h14v2z" />
                            ) : (
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm16 7H4v-2h16v2zm0 5H4v-2h16v2z" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="hidden sm:flex items-center space-x-8">
                    <div className="flex-grow"></div>
                    <div>
                        <nav className="space-x-8">
                            {isLoggedIn ? (
                                <button className="text-black font-semibold py-2 px-4 bg-cyan-500 rounded hover:bg-cyan-600 transition duration-300" onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link to="/login" className="text-black font-semibold py-2 px-4 bg-cyan-500 rounded hover:bg-cyan-600 transition duration-300" onClick={closeMenu}>Login</Link>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
            <nav className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-4 space-y-2">
                    <Link to="/" className={`text-gray-800 font-semibold ${pathname === '/' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded block transition duration-300`} onClick={closeMenu}>Home</Link>
                    <Link to="/upload" className={`text-gray-800 font-semibold ${pathname === '/upload' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded block transition duration-300`} onClick={closeMenu}>Upload</Link>
                    <Link to="/mapView" className={`text-gray-800 font-semibold ${pathname === '/mapView' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded block transition duration-300`} onClick={closeMenu}>Map</Link>
                    <Link to="/about" className={`text-gray-800 font-semibold ${pathname === '/about' ? 'bg-cyan-500 text-black' : 'hover:bg-cyan-200'} py-2 px-4 rounded block transition duration-300`} onClick={closeMenu}>Whats'in</Link>
                    <div className="px-2 pt-2 pb-4">
                        {isLoggedIn ? (
                            <button className="text-white font-semibold py-2 px-4 bg-cyan-500 rounded hover:bg-cyan-600 transition duration-300 w-full" onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link to="/login" className="text-white font-semibold py-2 px-4 bg-cyan-500 rounded hover:bg-cyan-600 transition duration-300 w-full" onClick={closeMenu}>Login</Link>
                        )}
                    </div>
                </div>
                <div className="px-4 py-5 border-t border-gray-300 sm:hidden"></div>
            </nav>
        </header>
    );
};

export default Navbar;
