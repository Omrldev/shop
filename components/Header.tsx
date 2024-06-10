import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header id="home" className="header-wrapper">
      <div className="header-container">
        <Link href={"/"}>Store.logo</Link>
        <nav className="max-lg:hidden">
          <NavItems />
        </nav>
        <IoMenuOutline className="cursor-pointer"></IoMenuOutline>
      </div>
    </header>
  );
};

export default Header;
