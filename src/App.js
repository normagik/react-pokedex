import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Home  from './pages/index';
import  Favoritos  from './pages/favoritos';
import Capturados from "./pages/capturados";

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/favoritos" component={Favoritos} exact/>
        <Route path="/capturados"component={Capturados} exact/>
      </Switch>
     </Router>

  );
}

export default App;
