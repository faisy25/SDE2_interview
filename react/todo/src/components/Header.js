import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-100% bg-dark p-3">
      <div className="container mx-auto px-4">
        <RouterLink to="/">
          <h1 className="text-xl text-light"> TODO </h1>
        </RouterLink>
      </div>
    </nav>
  );
};

export default Header;
