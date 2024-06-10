import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="header-wrapper">
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
