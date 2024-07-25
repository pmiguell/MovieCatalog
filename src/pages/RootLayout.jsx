import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserContext from "../contexts/UserContext";

export default function RootLayout() {
  const { handleSearchChange, searchTerm, toggleMenu, isMenuOpen } = useContext(UserContext);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        searchTerm={searchTerm}
        searchChange={handleSearchChange}
      />
      <Outlet />
      <Footer />
    </>
  );
}
