
import { useEffect, useState } from "react";
import { fetchPhotos } from './apiService/imageApi';
import SearchBar from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
// import './App.css'



const App = () => {
	// 1. Оголошуємо стан
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    fetchPhotos(query, page)
      .then(({ results, total_pages }) => {
        setImages(results)
        setTotalPages(total_pages)
      })
      .catch(error => setError(error.message))
    
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    console.log(query);
    
    };

  
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      
    </div>
  );
}

export default App

