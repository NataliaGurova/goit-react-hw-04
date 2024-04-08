
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onClick }) => {
  console.log(images);
  
  return (    
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          {/* Передаємо зображення у компонент ImageCard */}
          <ImageCard small={image.urls.small}
            regular={image.urls.regular}
            alt={image.alt_description}
            onClick={() => onClick(image.urls.regular)}/>
        </li>
      ))}
    </ul>);
};

export default ImageGallery
