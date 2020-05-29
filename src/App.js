import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Price from './Price/Price';
import Home from './Home/Home';
import About from './About/About';
import Deposit from './Deposit/Deposit';

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/price" component={Price} />
        <Route path="/deposit" component={Deposit} />
      </Switch>
    </div>
  );
};

export default App;
