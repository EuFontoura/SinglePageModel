const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">Sobre Mim</h3>
            <p className="text-lg md:text-xl mt-4 text-gray-600">
              Olá! Sou um mico leão dourado modelo apaixonado por moda e arte. Minha missão é trazer
              beleza, criatividade e autenticidade para cada projeto em que me envolvo.
            </p>
            <p className="text-lg md:text-xl mt-4 text-gray-600">
              Adoro colaborar com fotógrafos, designers e marcas para criar algo
              verdadeiramente único e memorável.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Sobre mim"
            className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;