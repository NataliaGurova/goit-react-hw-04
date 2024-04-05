
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  console.log(images);
  
  return (    
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          {/* Передаємо зображення у компонент ImageCard */}
          <ImageCard small={image.urls.small}
            regular={image.urls.regular}
            alt={image.alt_description} />
        </li>
      ))}
    </ul>);
};

export default ImageGallery
