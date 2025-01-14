const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Mico Francisco. Todos os direitos reservados.
        </p>
        <p className="text-sm md:text-base">
          Feito com ❤️ por Gabriel Fontoura.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
