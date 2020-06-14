import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import List from './components/List'
import CreateNotes from './components/CreateNotes'
import CreateUsers from './components/CreateUsers'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={List}/>
      <Route path="/create" component={CreateNotes}/>
      <Route path="/users" component={CreateUsers}/>
    </Router>
  );
}

export default App;
