import axios from 'axios';

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/search/photos?page=1&query=office

const API_KEY = "CiYbYfeKy1jv8indJhhf6vm3xolSsoXblOTrxmzC1Go";
axios.defaults.baseURL = 'https://api.unsplash.com/';
// axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    client_id: API_KEY,
    orientation: 'landscape',
    per_page: 12,
};

export const fetchPhotos = async (query, page) => {
  try {
      const { data } = await axios.get(`search/photos?page=${page}&query=${query}`);
      console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error; // Прокидуємо помилку для подальшої обробки
  }
};







// export const fetchPhotos = async (query, page) => {
//   const API_KEY = 'CiYbYfeKy1jv8indJhhf6vm3xolSsoXblOTrxmzC1Go';
//   const params = {
//     client_id: API_KEY,
//     query: query,
//     page: page,
//     orientation: 'landscape',
//     per_page: 12,
//   };

//   try {
//     const response = await axios.get('https://api.unsplash.com/search/photos/', {
//       params: params,
//       headers: {
//         Authorization: `Client-ID ${API_KEY}`
//       }
//     });
    
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching photos:', error);
//     throw error; // Прокидуємо помилку для подальшої обробки
//   }
// };

