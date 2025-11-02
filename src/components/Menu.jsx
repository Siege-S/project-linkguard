import React from "react";

const Menu = ({ isMenuOpen, handleMenuOpen }) => {
  return (
    <section
      className={`${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } fixed z-50  right-0 top-18 w-full transition-all h-full`}
    >
      <nav className="flex flex-col bg-white text-primary border-t border-primary">
        <a
          href="#features"
          className="p-5 hover:bg-black/10"
          onClick={handleMenuOpen}
        >
          Features
        </a>

        <a
          href="#about"
          className="p-5 hover:bg-black/10"
          onClick={handleMenuOpen}
        >
          About
        </a>

        <a
          href="#faqs"
          className="p-5 hover:bg-black/10"
          onClick={handleMenuOpen}
        >
          FAQs
        </a>

        <a
          href="#contact"
          className="p-5 hover:bg-black/10"
          onClick={handleMenuOpen}
        >
          Contact
        </a>
      </nav>

      {/* Overlay */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute z-50 bg-black/90 h-full w-full`}
        onClick={handleMenuOpen}
        onTouchStart={handleMenuOpen}
      ></div>
    </section>
  );
};

export default Menu;
