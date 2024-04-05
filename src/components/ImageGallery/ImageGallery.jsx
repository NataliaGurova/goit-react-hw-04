
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  console.log(images);
  
  return (    
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          {/* Передаємо зображення у компонент ImageCard */}
          <ImageCard small={image.urls.small}
            regular={image.urls.regular}
            alt={image.alt_description} />
        </li>
      ))}
    </ul>);
};

export default ImageGallery
