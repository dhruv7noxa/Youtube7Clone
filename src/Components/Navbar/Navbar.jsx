import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import jack_img from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {

  const sidebar_toggle = (e) => {
    setSidebar((prev) => prev === false ? true : false);
  };

  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="Menu" className="menu-icon" onClick={sidebar_toggle} />
        <Link to='/'> <img src={logo} alt="Logo" className="logo" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="Search" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <Link to="/upload" className="upload-button">
          <img src={upload_icon} alt="Upload" className="upload-icon" />
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <img src={more_icon} alt="More" />
        <img src={notification_icon} alt="Notifications" />
        <img src={jack_img} alt="User" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
