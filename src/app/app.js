import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Todo from './todo';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Todo}/>
        <Route path='/todo' component={Todo}/>
        {/* Add all your remaining routes here, like /about, etc. */}
      </div>
    </Router>
  );
}

export default App;
