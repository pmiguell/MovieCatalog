import { Link, useLocation } from "react-router-dom";
import style from "./styles.module.css";
import { FaSearch } from 'react-icons/fa';

export default function Header({ searchChange, searchTerm, toggleMenu, isMenuOpen }) {
  const location = useLocation();

  const isMovieDetailsPage = location.pathname.startsWith("/movie/");

  return (
    <header>
      <div className={style.left}>
        <h1>
          <Link to="/" className={style.homeLink}>
            Movie<span className={style.highlight}>Catalog</span>
          </Link>
        </h1>
        <div className={style.searchContainer}>
        <FaSearch className={style.searchIcon} />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          className={style.searchInput}
          onChange={searchChange}
        />
        </div>
      </div>

      {!isMovieDetailsPage && (
        <button className={style.menu_icon} onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src="./src/assets/img/close.png" alt="Close Icon" />
          ) : (
            <img src="./src/assets/img/menu.png" alt="Menu Icon" />
          )}
        </button>
      )}
    </header>
  );
}
