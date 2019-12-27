import React from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"; 
import Home from '../Pages/home'
import Tables from '../Pages/datashow';
import Header from '../component/Header';

export default function Routes() {
  return (
    <Router>
      <div>
        <Route path="" component={Header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tables" component={Tables} />
          </Switch>
      </div>
    </Router>
  )
}
