// Dependencies
import React from 'react';
import './css/Card.css';

import $ from 'jquery';
import swal from 'sweetalert';


//Declaro variable global para recibir los datos que llegan en la funcion GetData
var data;
//Se hace el evento onload
window.onload = function () {
  GetData();
  var name = $('#name'),
    email = $('#email'),
    state = $('#state'),
    city = $('#city');
  state.attr('required', true);
  city.attr('required', true);
  name.attr('pattern', "[a-zA-Z ]{3,30}");
  name.attr('required', true);
  name.attr('title', 'Ingresa un nombre entre 3 y 30 caracteres que no contenga caracteres especiales o números.');
  email.attr('pattern', "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  email.attr('required', true);
  email.attr('title', 'Ingresa un correo válido');
  //Evento para el filtrado de los departamentos con sus respectivas ciudades
  $('#state').on('change', function () {
    $("#city option").remove();
    let city = document.getElementById('city');
    var valu = $("#state").val();
    //Ciclo for para recorrer la variable global data, obtener las ciudades y añadirlas a una opcion de un select
    for (var i in data[valu]) {
      var option = document.createElement("option");
      option.text = data[valu][i];
      option.value = data[valu][i];
      city.add(option);
    }
  });

  $('#form').on('submit', function (ev) {
    ev.preventDefault();
    const data = {
      name: $('#name').val(),
      email: $('#email').val(),
      state: $('#state').val(),
      city: $('#city').val()
    };

    $.ajax({
      url: "http://localhost/Test/my-app-php/contacts",
      type: "POST",
      data: data,
      success: function (response) {
        var json = JSON.parse(response);
        if (json.OK) {
          swal("Response!", 'Sus datos han sido registrados exitosamente', "success");
        }
        if (json.Error) {
          swal("Response!", 'Lo sentimos, ha ocurrido un error', "warning");
        }
        $('#form').trigger('reset');
        $("#city option").remove();
      }
    });
  });
}
//Se define la funcion que me traera los datos de la url dada en la prueba
function GetData() {
  let state = document.getElementById("state");
  //Se hace un peticion ajax a la url para obtener los datos y almacenarlos en la variable data
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json",
    type: "GET",
    success: function (response) {
      data = response;
      //ciclo para recorrer los datos de la url, obtener los departamentos y asignarlos a una opción de un select
      for (var i in data) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        state.add(option);
      }
    }
  });
}


//Componente del formulario
function Card() {

  return (
    <div className="card" >
      <div className="card-body">
        <form id="form" className="p-3 pt-4 pb-3" method="POST">
          <div className="form-group">
            <label>Departamento*</label>
            <select className="form-control" id="state">
              <option value="">Seleccione alguno</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ciudad*</label>
            <select className="form-control" id="city"></select>
          </div>
          <div className="form-group">
            <label>Nombre*</label>
            <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre"></input>
          </div>
          <div className="form-group">
            <label>Correo*</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com"></input>
          </div>
          <div className="form-group d-flex justify-content-center">
            <button type="submit" className="btn btn-danger btn-lg mt-3">ENVIAR</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Card;