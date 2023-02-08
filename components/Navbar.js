import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="first-nav">
        <Link href="/">Coder Wikipedia</Link>
      </div>

      <div className="second-nav">
        <Link href="/about">About </Link>
        <Link href="/coders">All Coders</Link>
      </div>
    </nav>
  );
};

export default Navbar;
