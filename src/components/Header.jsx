import React from "react";
import logo from "../assets/logo/logo-lg.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Header = ({ isMenuOpen, handleMenuOpen }) => {
  return (
    <header className="fixed z-50 top-0 h-18 bg-white w-full flex items-center shadow-md px-4 xl:px-0">
      <nav className="container mx-auto flex justify-between items-center w-full">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img className="w-10" src={logo} alt="linkguard" />
          <span className="font-momo font-bold text-lg text-primary">
            LinkGuard
          </span>
        </div>

        <ul className="hidden lg:flex text-primary font-light text-sm">
          <li>
            <a href="#features" className="px-6 py-5 hover:text-primary/50">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="px-6 py-5 hover:text-primary/50">
              About
            </a>
          </li>
          <li>
            <a href="#faqs" className="px-6 py-5 hover:text-primary/50">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" className="px-6 py-5 hover:text-primary/50">
              Contact
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          {isMenuOpen ? (
            <RxCross2
              className="size-8 stroke-1 text-primary cursor-pointer active:scale-95"
              onClick={handleMenuOpen}
            />
          ) : (
            <IoMenu
              className="size-10 text-primary cursor-pointer active:scale-95"
              onClick={handleMenuOpen}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
