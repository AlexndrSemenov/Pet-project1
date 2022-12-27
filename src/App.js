import { useState } from "react";
import ImagePopup from './ImagePopup';
import { useDispatch } from "react-redux";
import * as actions from "./store/actions";

function App() {

  //получаем диспатч из хука
  const dispatch = useDispatch();

  //стейт-переменная с ссылкой на картинку пользователя
  const [url, setUrl] = useState('');
  //стейт-переменная определяющая видимость попапа
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    dispatch(actions.addTodo(url)); 
    setIsImagePopupOpen(true);
  }
  
  const closeAllPopup = () => {
    //скрываем попапы
    setIsImagePopupOpen(false);
  }

  //задаем данные
  function handleChangeUrl(e) {
    const value = e.target.value;
    setUrl(value);
  };
  
  return (

    <main>
      
      <header className="main__header">
        <h1>Приложение для просмотра изображений</h1>
      </header>

      <section>
        <p>(тест Redux и less)</p>
        <p className="main__text">Вставьте ссылку на изображение</p>
        <input placeholder='Ваша ссылка' value={url} onChange={handleChangeUrl} className="main__input"/>
        <p className="main__text">Для просмотра изображения нажмите</p>
        <button onClick={handleEditAvatarClick}  className="body__header-button">Открыть</button>
      </section>
      
      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopup} />

    </main>

  );
};

export default App;
