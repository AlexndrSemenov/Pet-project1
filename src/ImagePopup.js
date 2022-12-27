import React from 'react';
import { useSelector } from "react-redux";

function ImagePopup(props) {

  //получаем state
  const state = useSelector((state)=>state);

  return (
    
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
      
        <button type="reset" className="popup__close-button" onClick={props.onClose}/>
        <img src={state.todos} alt='Картинка пользователя' className="photo-grid__image"/>

      </div>
    </div>
  )
}

export default ImagePopup;
