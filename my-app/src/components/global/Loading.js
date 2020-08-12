// Dependencias
import React from 'react';
import './css/Loading.css';
import $ from 'jquery';
//Componente que contendrá los demás componentess
function cargar(){
  $('#cont-load').fadeOut(4000);
};

$(document).ready(function($){
  cargar();
});

function Loading() {
  return (
    <div id="cont-load">
      <div className="loader">
        <div className="load"></div>
        <div className="load load2"></div>
        <div className="load load3"></div>
      </div>
    </div>
  );
}

export default Loading;