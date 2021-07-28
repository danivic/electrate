import React from 'react';
import Calc from './components/Calc';
import Imc from './components/Imc';
import Todo from './components/Todo';
import { Route, HashRouter } from 'react-router-dom';
import GetPizzas from './components/GetPizzas';

const App = () => { 
return (
    <>
  <HashRouter>
      <Route path='/' exact>
          <Calc/>
          </Route>
          <Route path='/imc'>
              <Imc/>
      </Route>
      <Route path='/todo'>
              <Todo/>
      </Route>
      <Route path='/getpizzas'>
              <GetPizzas/>
      </Route>
  </HashRouter>  
    </>
)
}

export default App;