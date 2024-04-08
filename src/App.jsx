
import { useEffect, useState } from "react";
import { fetchPhotos } from './apiService/imageApi';
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn"
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageModal } from "./components/ImageModal/ImageModal";
import './App.css'



const App = () => {
	// 1. Оголошуємо стан
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Додайте стан для вибраного зображення
  const [modalIsOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchPhotos(query, page)
      .then(({ results, total_pages }) => {
        setLoading(true)
        setImages(prev => [...prev,...results])
        setTotalPages(total_pages)
        setLoading(false)

      })
      .catch(error => setError(error.message))
    
  }, [query, page]);

  const handleSubmit = (query) => {
    setPage(1)
    setImages([])
    setTotalPages(0)
    setError(false)
    setQuery(query);
    console.log(query);    
  };
    
  const handleLoadMore = () => {
    setLoading(true)
    setPage(page + 1);    
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} onClick={handleImageClick} />
      {totalPages > 0 && images.length < totalPages && <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>}
      <ImageModal images={selectedImage}
      isOpen={modalIsOpen} 
      onRequestClose={closeModal}/>
    </div>
  );
}

export default App


  // function afterOpenModal() {
  //   let subtitle;
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }



// onClick={() => onClick(image.urls.small, image.urls.regular, image.alt_description)}