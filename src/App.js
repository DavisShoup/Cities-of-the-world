import './App.css';
import './styles.css';
import imageArr from "./imageData.js"
import { useState } from "react";

export default function App() {
  const [bigImage, setBigImage] = useState(imageArr[0].img);
  const handleImage = (url) => {setBigImage(url)};
  const city = imageArr.map((elem, index) => {
    return(<img 
      className="thumbnail" 
      id={elem.name} 
      src={elem.img} 
      alt={elem.name} 
      key={index} 
      onClick={() => handleImage(elem.img)}/>);
  });
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {city}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImage'/>
      </div>
    </div>
  );
}



