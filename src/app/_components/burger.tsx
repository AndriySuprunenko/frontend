"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION_LINKS } from "../lib/navigation";
import Navlink from "./nav-link";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      {/* Burger Icon */}
      <div className="lg:hidden block cursor-pointer z-50" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <nav className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-40 lg:hidden overflow-y-auto">
            <ul className="pt-16 px-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id} className="border-b border-gray-200">
                  {link.sublinks ? (
                    <>
                      <button
                        className="px-6 py-3 hover:bg-skoda-emerald-green/20 transition-all w-full flex items-center cursor-pointer"
                        onClick={() => toggleDropdown(link.id)}
                        aria-haspopup="menu"
                        aria-expanded={openDropdown === link.id}
                      >
                        <span>{link.text}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <ul
                        role="menu"
                        className={`overflow-hidden transition-all duration-200 pl-4 ${
                          openDropdown === link.id
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {link.sublinks?.map((sublink) => (
                          <li key={sublink.id} role="menuitem">
                            <Navlink onClick={toggleMenu} href={sublink.href!}>
                              {sublink.text}
                            </Navlink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Navlink onClick={toggleMenu} href={link.href!}>
                      {link.text}
                    </Navlink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Burger;
