import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from 'react';
import { UserContext } from '../context/useContext';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        <ul className={`nav_menu ${menuOpen ? 'show_menu' : ''}`}>
          {currentUser?.id ? (
            <>
              <li><Link to={`/profile/${currentUser.id}`} onClick={closeMenu}>{currentUser?.name}</Link></li>
              <li><Link to="/create" onClick={closeMenu}>Create Post</Link></li>
              <li><Link to="/authors" onClick={closeMenu}>Authors</Link></li>
              <li><Link to="/logout" onClick={closeMenu}>Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/authors" onClick={closeMenu}>Authors</Link></li>
              <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
            </>
          )}
        </ul>

        <button className="nav_toggle-btn" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <MdMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
