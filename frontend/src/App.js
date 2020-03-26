import React from 'react';

import './global.css';

import Routes from './routes';

//JSX Javascript XML

// Um componente em React é uma função que retorna HTML

// Estado: Informação mantida pelo componente, 
// no qual toda vez que for alterado o componente irá se remontar

function App() {
  return (
    <div>
     <Routes />
    </div>
  );
}

export default App;
