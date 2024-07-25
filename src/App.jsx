import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserContext from "./contexts/UserContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const contextValue = {
    isMenuOpen,
    toggleMenu,
    searchTerm,
    handleSearchChange,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
