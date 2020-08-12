import React from 'react';
import logo from './images/sigma-logo.png'
import './css/Title.css';

//Componente del logo, titulo y parrafo

function Title() {
  return (
    <div className=" mt-5">
      <header className="Logo pl-5 pr-5">
        <div className="text-center">
          <img src={logo} alt="logo" />
          <h1 className="mt-4 mb-4">Prueba de desarrollo Sigma</h1>
          <p className="text-justify-center pl-5 pr-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consectetur laudantium modi accusantium, quibusdam facilis expedita, ipsam voluptas molestiae suscipit inventore aliquam nisi. Praesentium ratione perferendis provident similique ipsum. Assumenda!
          </p>
        </div>
      </header>
    </div>
  );
}

export default Title;