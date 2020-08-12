
import React from 'react';


import Title from '../components/global/Title';
import Image from '../components/global/Image';
import Card from '../components/global/Card';

//Componente donde se hace el maquetado de los componentes ya creados
function Test() {
  return (
    
    <div>
      <div className="row">
        <Title />
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <Image />
        </div>
        <div className="col-md-6">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Test;