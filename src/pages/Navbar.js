// Navbar.jsx
import { useState } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../redux/userSlice';
import image from '../Assets/stock.homepage.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    dispatch(signout());
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav
      className={`text-[#4c4c4c] border-r border-gray-400 fixed h-full flex flex-col transition-transform duration-300 transform translate-x-0 lg:translate-x-0 lg:w-80 lg:items-center lg:bg-white ${
        isOpen ? 'bg-white' : 'bg-transparent'
      }`}
      style={{ zIndex: 1000 }}
    >
      {/* Hamburger button for smaller screens */}
      <div className="lg:hidden cursor-pointer p-4" onClick={toggleMenu}>
        {isOpen ? <FaArrowLeft /> : <FaBars />}
      </div>
      <ul className={`lg:flex lg:flex-col lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <li className="hidden lg:block">
          <img src={image} alt="Logo" className="py-4" style={{ width: '80px', height: '80px', margin: '20px' }} />
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/home" className="block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white">
            All Stocks with respective company
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/balanceSheet/:id" className="block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white">
            Balance Sheets
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/details/:id" className="block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white">
            Stock details
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/" onClick={() => handleSignOut()} className="block px-4 text-[18px] py-4 mt-20 ml-auto font-bold hover:bg-[#97bf0f] hover:text-white">
            Logout
          </NavLink>
        </li>
      </ul>

      <div className={`lg:block mt-28 ${isOpen ? 'nav-footer' : 'hidden'}`}>
        <ul className="social-links-container ms-5 flex">
          <li>
            <i className="fab fa-facebook-f me-4 text-sm text-gray-700" />
          </li>
          <li>
            <i className="fab fa-google-plus-g me-4 text-sm text-gray-700" />
          </li>
          <li>
            <i className="fab fa-twitter me-4 text-sm text-gray-700" />
          </li>
          <li>
            <i className="fab fa-pinterest-p me-4 text-sm text-gray-700" />
          </li>
          <li>
            <i className="fab fa-vimeo-v me-4 text-sm text-gray-700" />
          </li>
        </ul>
        <small className="my-2 ms-5 block text-[10px] font-bold text-gray-500">
          @2015 PIAGGIO $ C.S P.A. PIVA
        </small>
      </div>
    </nav>
  );
};

export default Navbar;
