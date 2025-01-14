import hero from '../assets/imgs/hero.png'

const Hero = () => {
  return (
      <section
          id="home"
          className="relative bg-cover bg-center h-screen text-white"
          style={{ backgroundImage: `url(${hero})` }}
      >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="relative flex flex-col justify-center items-center h-full text-center px-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Bem-vindo ao meu mundo
              </h2>
              <p className="text-lg md:text-2xl mt-4 max-w-xl">
                  Onde moda e arte se encontram
              </p>
              <a
                  href="#gallery"
                  className="mt-8 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-lg md:text-xl transition-all"
              >
                  Ver Galeria
              </a>
          </div>
      </section>
  );
};

export default Hero;
  