import React from 'react';
import Ticket from './features/tickerts/Ticket';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Seats from './features/seats/Seats';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/seats">
            <Seats />
          </Route>


          <Route path="/">
            <Ticket />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
