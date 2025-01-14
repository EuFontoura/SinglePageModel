import fashion1 from '../assets/imgs/fashion1.jpg'
import fashion2 from '../assets/imgs/fashion2.jpg'
import fashion3 from '../assets/imgs/fashion3.png'
import fashion4 from '../assets/imgs/fashion4.jpg'

const Gallery = () => {
    const images = [fashion1, fashion2, fashion3, fashion4];
  
    return (
      <section id="gallery" className="p-10 bg-gray-100">
        <h3 className="text-4xl font-bold text-center mb-8">Galeria</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Fashion ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;
  