const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">Sobre Mim</h3>
            <p className="text-lg md:text-xl mt-4 text-gray-600">
              Olá! Sou Francisco, um mico leão dourado modelo apaixonado por moda e arte. Minha missão é trazer
              beleza, criatividade e autenticidade para cada projeto em que me envolvo.
            </p>
            <p className="text-lg md:text-xl mt-4 text-gray-600">
              Adoro colaborar com fotógrafos, designers e marcas para criar algo
              verdadeiramente único e memorável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
