import './App.css';
import { useState } from "react";
import { saveAs } from 'file-saver';


function App() {

  //стейт-переменная с данными пользователя
  const [data, setData] = useState('');
  
  //задаем данные
  function handleChangeData(e) {
    const value = e.target.value;
    setData(value);
  };

  //сохраняем страницу
  function savePage() {
    saveAs(
      new Blob(
          [(new XMLSerializer).serializeToString(document)]
        , {type: "application/xhtml+xml;charset=" + document.characterSet}
    )
    , "document.xhtml"
    );
    setData('');
  };

  //открываем данные пользователя в новом окне
  function createNewDocument() {
    var newWindow = window.open('', '', 'width=400,height=500');
    newWindow.document.open();
    newWindow.document.write('<!doctype html>');
    newWindow.document.write('<html lang="ru">');
    newWindow.document.write('<head>');
    newWindow.document.write('<meta charset="utf-8">');
    newWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
    newWindow.document.write('<title>Новая страница</title>');
    newWindow.document.write('</head>');
    newWindow.document.write('<body>');
    newWindow.document.write('<h1>Сформированные данные:</h1>');
    newWindow.document.write(data);
    newWindow.document.write('</' + 'body>');
    newWindow.document.write('</html>');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Тестовая задача</h1>
      </header>
      <section>
        <p className="text">Вставьте необходимые для сохранения данные:</p>
        <input placeholder='Данные' value={data} onChange={handleChangeData} />
        
        <p className="text">Чтобы сохранить страницу в формате XHTML нажмите:</p>
        <button onClick={savePage}>Сохранить</button>
        
        <p className="text">Чтобы сформировать и открыть новый документ нажмите:</p>
        <button onClick={createNewDocument}>Открыть</button>
      </section>
    </div>
  );
};

export default App;
