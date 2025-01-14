import fashion1 from '../assets/imgs/fashion1.jpg'
import fashion2 from '../assets/imgs/fashion2.jpg'
import fashion3 from '../assets/imgs/fashion3.png'
import fashion4 from '../assets/imgs/fashion4.jpg'

const Gallery = () => {
    const images = [fashion1, fashion2, fashion3, fashion4];
  
    return (
      <section id="gallery" className="py-10 bg-gray-100">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">Galeria</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Foto ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;