Компоненти

App 
1. LoadMoreBtn
2. SearchBar
3. ImageGallery
4. Loader
5. ErrorMessage
6. ImageModal

 ImageGallery:

1.  ImageCard
2.  ImageCard ...

Хедер з формою пошуку



Компонент SearchBar приймає один проп onSubmit – функцію для передачі значення інпуту під час сабміту форми. Створює DOM-елемент наступної структури.



<header>
  <form>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>



Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Ця перевірка виконується в компоненті SearchBar в момент відправки форми. Для сповіщень використовуй бібліотеку React Hot Toast.



Галерея зображень



Компонент ImageGallery – це список карток зображень який створює DOM-елемент наступної структури.



<ul>
	{/* Набір елементів списку із зображеннями */}
	<li>
		<div>
		  <img src="" alt="" />
		</div>
	</li>
</ul>

Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.



Картка зображення



Компонент ImageCard рендериться в елементі галереї. Створює DOM-елемент наступної структури.

<div>
  <img src="" alt="" />
</div>
Індикатор завантаження



Компонент Loader відображається під галереєю поки відбувається завантаження зображень. Використовуй будь-який готовий компонент, наприклад react-loader-spinner або інший.

Поки йде завантаження зображень, індикатор завантаження не повинен замінювати галерею, а просто рендеритися під нею. Це буде критичним при додаванні зображень до вже завантажених.



Повідомлення про помилку



Компонент ErrorMessage рендериться замість галереї зображень у випадку помилки HTTP-запиту. Достатньо, щоб це було текстове повідомлення.



Кнопка завантаження додаткових зображень



Компонент LoadMoreBtn рендерить кнопку із текстом "Load more". При натисканні на кнопку має завантажуватися наступна порція зображень і рендеритися разом із попередніми.

<button className={css.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>

Кнопка має рендеритися лише тоді, коли є які-небудь завантажені зображення.
Якщо масив зображень порожній, кнопка не рендериться.


Модальне вікно
  //  const handleToggle = () => {
  //   setIsOpen(!isOpen);
  //  };


Компонент ImageModal повинен рендеритися всередині компоненту App та отримувати через пропси з App всі необхідні дані та функції.



Під час натискання на зображення галереї повинно відкриватися модальне вікно ImageModal з темним фоном, яке відображатиме зображення у великому форматі. Модальне вікно має бути налаштовано таким чином, щоб воно закривалося при натисканні на клавішу ESC або при кліку за його межами. Для реалізації функціональності модального вікна використовуй бібліотеку React Modal.

/=======================================
Вся основна логіка повинна бути в Арр.
Використовуємо useEffect в масиві залежностей якого буде лише query і page
useEffect(() => { if (!query) return; }, [query, page]);
Функція для запиту повинна бути в окремому файлі, в Арр її лише викликаємо.
Коли на бекенді закінчилися фото, приховуємо кнопку “Load more”. Для цього використовуємо властивість total_pages яку нам повертає бекенд при успішному запиті.
const [showBtn, setShowBtn] = useState(false);

setShowBtn(total_pages && total_pages !== page)

{showBtn && <button> Load more ... </button >}
Для перевірки можна використовувати слова для пошуку “min” “max”.



const API_KEY = 'CiYbYfeKy1jv8indJhhf6vm3xolSsoXblOTrxmzC1Go';


 // try {
// const {} = data; )
//   // код ...

// } catch (err) {
// console.err('Error fetching photos:', err);
//   // обработка ошибки

// }


//   useEffect(() => {

//     const fetchPhotos = async (query, page) => {
//   try {
//       const { data } = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=office`);
//       console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching photos:', error);
//     throw error; // Прокидуємо помилку для подальшої обробки
//   }
// };
//     // if (!query) return;
//     // fetchPhotos(query, page)
//     // setImages(prev => [...prev, ...images])
//   }, [query, page]);

  // useEffect(() => {
  //   fetchPhotos(query, page)
  //   console.log(fetchPhotos);
  //  }, [])

  // const handleSubmit = (query) => {
  //   setQuery(query);
  //   console.log(query);
    
    // };


   if (inputValue) {
    onSubmit(query);
    setQuery("");
    } else {
      
  }
--------------------------------
  SCROLLING

  import {useRef } from 'react';
  const loadMoreBtnRef = useRef(null);
  useEffect(() => {
    if (loadMoreBtnRef.current) {
      loadMoreBtnRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [images]);

  В розмітку пишемо
  <div ref={loadMoreBtnRef} />
