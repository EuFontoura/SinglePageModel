import hero from '../assets/imgs/hero.png'

const Hero = () => {
    return (
      <section id="home" className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold">Bem-vindo ao meu mundo</h2>
          <p className="text-xl mt-4">Onde moda e arte se encontram</p>
          <a href="#gallery" className="mt-8 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-lg">Ver Galeria</a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  