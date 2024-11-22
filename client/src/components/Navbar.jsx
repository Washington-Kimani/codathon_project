import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function Navbar({ onSearch }) {
    const location = useLocation();
    const isItemsPage = location.pathname === "/items";
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="w-full bg-teal-950 px-8 py-2 flex justify-between cursor-pointer items-center fixed z-50">
            {/* Logo Section */}
            <div className="text-white font-bold text-2xl">
                <Link to="/">L&F</Link>
            </div>

            {/* Search Bar (Visible only on `/items` page) */}
            {isItemsPage && (
                <div className="flex items-center">
                    <input
                        type="search"
                        placeholder="Search"
                        className="bg-gray-200 text-teal-950 w-48 lg:w-[400px] rounded-l-md px-3 py-1"
                        onChange={handleSearch}
                    />
                    <button className="flex items-center bg-teal-700 text-white rounded-r-md px-4 py-2">
                        <CiSearch />
                    </button>
                </div>
            )}

            {/* Hamburger Menu */}
            <div className="text-white text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
                {menuOpen ? <AiOutlineClose /> : <FaBarsStaggered />}
            </div>

            {/* Navigation Links */}
            <div
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col items-center -mt-2 md:flex md:flex-row md:static absolute top-14 left-0 w-full md:w-auto bg-teal-950 md:bg-transparent z-50`}
            >
                <nav>
                    <ul className="flex flex-col md:flex-row items-center">
                        <li className="mb-3 md:mb-0 md:mr-6">
                            <Link
                                to="/"
                                className="text-white hover:text-gray-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mb-3 md:mb-0 md:mr-6">
                            <Link
                                to="/items"
                                className="text-white hover:text-gray-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Items
                            </Link>
                        </li>
                        <li className="mb-3 md:mb-0 md:mr-6">
                            <Link
                                to="/upload"
                                className="text-white hover:text-gray-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Upload New
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;