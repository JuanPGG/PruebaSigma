import React from 'react';
import image from './images/sigma-image.png'
import './css/Image.css';

// Componente de la imagen
function Image() {
  return (
    <div>
        <img src={image} className="image" alt="sigma"></img>
    </div>
  );
}

export default Image;
