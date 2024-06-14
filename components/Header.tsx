import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header id="home" className="header-wrapper">
      <nav className="nav-wrapper">
        <Link href={"/"}>Store.logo</Link>

        <NavItems />

        <IoMenuOutline className="cursor-pointer lg:hidden"></IoMenuOutline>
      </nav>
    </header>
  );
};

export default Header;
