// Dependencias
import React from 'react';

import Test from '../pages/Test';
import Loading from '../components/global/Loading';
//Componente que contendrá los demás componentess
function App() {
  return (
    
    <div className="container pb-5">
      <div className="row pb-5">
        <div className="col-sm-10 m-auto">
          <Test />
        </div>
          <Loading />
      </div>
    </div>
    
  );
}

export default App;