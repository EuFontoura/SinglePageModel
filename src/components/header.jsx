import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold">
          Mico Francisco
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            Sobre
          </a>
          <a href="#gallery" className="hover:text-gray-400">
            Galeria
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contato
          </a>
        </nav>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#home" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Galeria
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
