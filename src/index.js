// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Importando os componentes
import Componente01 from './Componente01';
import Componente02 from './Componente02';

// Criando o componente do index
class Principal extends React.Component {
  render() {
    return (
      <div>
        <Componente01 />
        <Componente02 />
      </div>
    );
  }
}

// render
ReactDOM.render(<Principal />, document.getElementById('root'));
