const Header = () => {
    return (
      <header className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Mico Francisco</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">Sobre</a></li>
            <li><a href="#gallery" className="hover:text-gray-300">Galeria</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  